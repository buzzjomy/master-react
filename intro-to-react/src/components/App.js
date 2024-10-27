import React, { useState, useEffect } from "react";
//import CountButton from "./CountButton/CountButton";
import SearchBar from "./SearchBar/SearchBar";

const App = () => {
  const [productList, setProductList] = useState([]);
  let prodListArr = [];

  console.log(prodListArr);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        setProductList(
          json.map((item) => {
            return item.title;
          })
        );
      });
  }, []);
  const isProdListEmpty = productList.length === 0;

  return (
    <div>
      {isProdListEmpty ? (
        "Loading..."
      ) : (
        <SearchBar productList={productList}>testchizldren</SearchBar>
      )}
    </div>
  );
};

export default App;
