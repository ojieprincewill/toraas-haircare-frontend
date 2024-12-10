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
  const { status } = useSelector((state) => state.products);
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [visibleCount, setVisibleCount] = useState(12);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const toggleSearch = () => {
    setIsSearchActive(!isSearchActive);
  };

  const showMoreProducts = () => {
    setVisibleCount((prevCount) => prevCount + 12);
  };

  if (status === "loading") return <Spinner />;

  if (status === "failed")
    return (
      <div className="error-message">
        Error: Failed to fetch product data. Try reloading the browser window.
      </div>
    );

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearchChange = (query) => {
    setSearchQuery(query);
  };

  return (
    <>
      <div className="options-container">
        <ProductCategories />
        <SearchButton isActive={isSearchActive} toggleSearch={toggleSearch} />
      </div>
      {isSearchActive && (
        <SearchBar
          searchQuery={searchQuery}
          onSearchChange={handleSearchChange}
          isSearchActive={isSearchActive}
        />
      )}
      {searchQuery && filteredProducts.length === 0 && (
        <p className="error-message">No products match your search &#9785;</p>
      )}
      {!searchQuery && filteredProducts.length === 0 && (
        <p className="error-message">No products available &#9785;</p>
      )}

      <div className="product-list">
        {filteredProducts.slice(0, visibleCount).map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>

      {visibleCount < filteredProducts.length && (
        <div className="show-btn-cont">
          <button onClick={showMoreProducts} className="show-btn">
            show more
          </button>
        </div>
      )}
    </>
  );
};

export default ProductsContainer;
