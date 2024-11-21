/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext, createContext, useState } from "react";

export const RecipeContext = createContext();
export const RecipeState = ({ children }) => {
  const [recipeParam, setRecipeParam] = useState("");
  const [loadingState, setLoadingState] = useState(false);
  const [recipeList, setRecipeList] = useState([]);
  const [RecipeDetails, setRecipeDetails] = useState([]);
  const handleOnSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(
        `https://themealdb.com/api/json/v1/1/search.php?s=${recipeParam}`
      );
      const data = await response.json();
      if (data?.meals) {
        setRecipeList(data?.meals);
        setLoadingState(false);
        setRecipeParam("");
      }
    } catch (e) {
      console.log(e);
      setLoadingState(false);
      setRecipeParam("");
    }
  };

  return (
    <RecipeContext.Provider
      value={{
        recipeParam,
        setRecipeParam,
        handleOnSubmit,
        recipeList,
        setRecipeList,
        RecipeDetails,
        setRecipeDetails,
      }}
    >
      {children}
    </RecipeContext.Provider>
  );
};
export const useRecipe = () => useContext(RecipeContext);
