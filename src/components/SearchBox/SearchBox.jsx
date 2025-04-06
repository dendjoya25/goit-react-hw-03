import React from "react";
import s from "./SearchBox.module.css";

const SearchBox = ({ value, onChange }) => {
  const handleChange = (event) => {
    onChange(event.target.value);
  };
  return (
    <div className={s.inputWrapper}>
      <span> Search by the name: </span>
      <label>
        <input
          type="text"
          value={value}
          onChange={handleChange}
          placeholder="Enter name"
        />
      </label>
    </div>
  );
};

export default SearchBox;
