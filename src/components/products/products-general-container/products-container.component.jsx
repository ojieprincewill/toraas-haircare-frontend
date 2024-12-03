import React, { useEffect, useState } from "react";
import "./products-container.styles.scss";
import Product from "../product/product.component";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchProducts,
  selectProductsByCategory,
} from "../../../features/products/productsSlice";
import SearchButton from "../search-button/search-button.component";
import SearchBar from "../search-bar/search-bar.component";
import Spinner from "../../spinner-hoc/spinner.component";
import ProductCategories from "../product-categories/product-categories.component";

const ProductsContainer = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectProductsByCategory);
  const { status, error } = useSelector((state) => state.products);
  const [isSearchActive, setIsSearchActive] = useState(false);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const toggleSearch = () => {
    setIsSearchActive(!isSearchActive);
  };

  if (status === "loading") return <Spinner />;

  if (status === "failed") return <div>Error: {error}</div>;

  return (
    <>
      <div className="options-container">
        <ProductCategories />
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
