/* eslint-disable no-unused-vars */

import React, { useContext } from "react";
import { RecipeContext, useRecipe } from "./RecipeState";
import { RecipeItems } from "./RecipeItems";

export const Home = () => {
  const { recipeList, loadingState } = useRecipe();
  if (loadingState) return <div> Loading.. Please wait</div>;
  return (
    <div>
      {recipeList && recipeList.length > 0 ? (
        recipeList.map((item) => <RecipeItems key={item.idMeal} items={item} />)
      ) : (
        <div>Nothing to show. Please search something</div>
      )}
    </div>
  );
};
