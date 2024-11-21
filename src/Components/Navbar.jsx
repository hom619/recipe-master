// eslint-disable-next-line no-unused-vars
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { RecipeContext } from "./RecipeState";

export const Navbar = () => {
  const { recipeParam, setRecipeParam, handleOnSubmit } =
    useContext(RecipeContext);
  const handleOnChange = (e) => {
    setRecipeParam(e.target.value);
  };
  console.log(recipeParam);
  return (
    <div style={{ padding: "15px" }}>
      <nav className="d-flex justify-content-between mx-auto">
        <h2 className="" href="#">
          Recipe Finder
        </h2>
        <form onSubmit={handleOnSubmit}>
          <div className="header mt-2 p-2 position-relative">
            <i className="bi bi-search-heart-fill"></i>
            <input
              className="form-control mr-sm-2 rounded-pill"
              type="text"
              name="search"
              value={recipeParam}
              placeholder="Enter Items ..."
              aria-label="Search"
              onChange={handleOnChange}
            />
          </div>
        </form>
        <div className="">
          <ul className="d-flex gap-4" style={{ listStyle: "none" }}>
            <li className="nav-item">
              <Link to={"/"}>Home</Link>
            </li>

            <li className="nav-item">
              <Link to={"/favourites"}>Favourites</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
