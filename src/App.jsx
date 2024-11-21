import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./Components/Navbar";
import { Home } from "./Components/Home";
import { Favourites } from "./Components/Favourites";
import { RecipeDetails } from "./Components/RecipeDetails";

const App = () => {
  return (
    <div className="wrapper" style={{ height: "100vh" }}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="favourites" element={<Favourites />} />
        <Route path="recipe-item/:id" element={<RecipeDetails />} />
      </Routes>
    </div>
  );
};

export default App;
