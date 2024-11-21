/* eslint-disable no-unused-vars */
import { React, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { RecipeContext, useRecipe } from "./RecipeState";

export const RecipeDetails = () => {
  let isSubscribed = true;
  const { id } = useParams();
  const [recipeDetails, setRecipeDetails] = useState([]);
  useEffect(() => {
    const getRecipeDetails = async () => {
      const response = await fetch(
        `https://themealdb.com/api/json/v1/1/lookup.php?i=${id}`
      );
      const data = await response.json();
      if (data?.meals) {
        setRecipeDetails(data?.meals[0]);
        console.log(recipeDetails);
      }
    };

    getRecipeDetails().catch(console.error);
  }, [id]);
  return (
    <div className="container mx-auto p-10">
      <div>
        <img src={recipeDetails?.strMealThumb}></img>
        <h2>{recipeDetails?.strMeal}</h2>
        <p>{recipeDetails?.strInstructions}</p>
      </div>
      Hello
    </div>
  );
};
