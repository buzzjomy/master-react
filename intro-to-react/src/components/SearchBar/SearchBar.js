import React, { useState } from "react";
import "./SearchBar.css";

const SearchBar = (props) => {
  const [searchText, setSearchText] = useState("");
  console.log(props.children);
  const handleSetSearchText = (event) => {
    console.log(event.target.value);
    setSearchText(event.target.value);
  };
  const isSearchTextNotEmpty = searchText.length > 0;

  const productFilter = props.productList.filter((product) =>
    product.toLowerCase().includes(searchText)
  );
  console.log(productFilter);

  return (
    <div>
      <input
        type="text"
        onChange={handleSetSearchText}
        value={searchText}
      ></input>
      <div>
        {isSearchTextNotEmpty && (
          <button
            onClick={() => {
              setSearchText("");
            }}
          >
            clear
          </button>
        )}
      </div>
      <ul>
        {productFilter.map((product) => (
          <li>{product}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchBar;
