import React, { useEffect, useState } from "react";
import "./product-categories.styles.scss";
import axios from "axios";
import { useDispatch } from "react-redux";
import { selectCategory } from "../../../features/products/productsSlice";

const ProductCategories = () => {
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState("All");
  const dispatch = useDispatch();

  const handleCategoryClick = (categoryName) => {
    setActiveCategory(categoryName);
    dispatch(selectCategory(categoryName));
  };

  useEffect(() => {
    axios
      .get("http://localhost:1337/api/categories")
      .then((response) => {
        setCategories(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
      });
  }, []);

  return (
    <div className="product-categories">
      {categories.map((category) => (
        <span
          key={category.id}
          className={`category ${
            activeCategory === category.name ? "active" : ""
          }`}
          onClick={() => handleCategoryClick(category.name)}
        >
          {category.name}
        </span>
      ))}
    </div>
  );
};

export default ProductCategories;
