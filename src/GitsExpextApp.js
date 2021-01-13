import React, { useState } from "react";
// import PropTypes from "prop-types";
import { AddCategory } from "./components/AddCategory";
import GridGifs from "./components/GridGifs";

const GitsExpextApp = (props) => {
  //create a array of categories using usestat
  const [categories, setCategories] = useState(["One Punch"]);
  // //create the function to add a element to my array
  // const handleAdd = () => {
  //   // add the element
  //   // setCategories([...categories, "other"]);
  //   // other form to that
  //   setCategories((cats) => [...cats, "Hilaire"]);
  // };
  return (
    <>
      <h2>Gifs Expexts App</h2>
      <AddCategory setCategories={setCategories} />
      <hr />
      {/* <button onClick={handleAdd}>Add</button> */}
      <ol>
        {categories.map((category) => (
          // <li key={category}>{category}</li>
          <GridGifs key={category} category={category} />
        ))}
      </ol>
    </>
  );
};

// GitsExpextApp.propTypes = {};

export default GitsExpextApp;
