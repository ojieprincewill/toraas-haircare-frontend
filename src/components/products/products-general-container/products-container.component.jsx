import React, { useEffect, useState } from "react";
import "./products-container.styles.scss";
import Product from "../product/product.component";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../../../features/products/productsSlice";
import ProductOptions from "../product-options/product-options.component";
import SearchButton from "../search-button/search-button.component";
import SearchBar from "../search-bar/search-bar.component";

const ProductsContainer = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const [isSearchActive, setIsSearchActive] = useState(false);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const toggleSearch = () => {
    setIsSearchActive(!isSearchActive);
  };

  return (
    <>
      <div className="options-container">
        <ProductOptions />
        <SearchButton isActive={isSearchActive} toggleSearch={toggleSearch} />
      </div>
      {isSearchActive && <SearchBar isSearchActive={isSearchActive} />}

      <div className="product-list">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};

export default ProductsContainer;
