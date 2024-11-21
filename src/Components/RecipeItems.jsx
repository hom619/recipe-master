/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";

export const RecipeItems = (item) => {
  return (
    <div className="p-20 container mx-auto d-flex justify-content-between g-2">
      <div>
        <img src={item?.items?.strMealThumb} alt="recipe item" />
        <p>{item?.items?.strCategory}</p>
        <h2>{item?.items?.strMeal}</h2>
        <Link
          to={`/recipe-item/${item.items.idMeal}`}
          className="rounded-lg bg-black"
        >
          Recipe Details
        </Link>
      </div>
    </div>
  );
};
