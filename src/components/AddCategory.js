import React, { useState } from "react";
import PropTypes from "prop-types";
export const AddCategory = ({ setCategories }) => {
  //create a a state form the value input
  const [inputValue, setinputValue] = useState("");
  //add a category
  const addCate = (e) => {
    e.preventDefault();
    if (inputValue.trim().length > 2) {
      setCategories((cats) => [inputValue, ...cats]);
      setinputValue("");
    }
  };
  // change the value of the input
  const handleInput = (e) => {
    setinputValue(e.target.value);
  };
  return (
    <form onSubmit={addCate}>
      <input
        type="text"
        onChange={handleInput}
        value={inputValue}
        className="form-control"
      />
    </form>
  );
};

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
};
