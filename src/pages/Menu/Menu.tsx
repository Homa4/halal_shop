import React, { useContext, useState } from "react";
// import data from "../../logic/data";
import useFetch from "../../Hooks/useFetch";

import Item from "./Item";
import Product from "../../InfoType/infotype";
import Header from "./Header";
import "./Menu.css";
import Button from "../../components/Button";
import { ContextForFilter } from "../../Context/FilterContext";
const url: string = "https://dummyjson.com/products";

function Menu(): React.ReactElement {
  const { data } = useFetch(url);
  console.log(data);
  const context = useContext(ContextForFilter);
  const { settingObj } = context;
  const [itemNumber, setItemNumber] = useState(8);

  let products: Product[];

  if (settingObj.category === "all") {
    products = data?.products.slice(0, itemNumber) || [];
  } else {
    products =
      data?.products
        .filter((element: Product) => {
          return element.category === settingObj.category;
        })
        .slice(0, itemNumber) || [];
    console.log(settingObj);
  }

  const addItems = () => {
    setItemNumber((prev) => prev + 8);
  };

  return (
    <div className="menu_wrapper">
      <Header />
      <div className="item_wrapper">
        {products.length > 0 ? (
          products.map((element: Product) => (
            <Item key={element.id} element={element} />
          ))
        ) : (
          <p>Oops, something went wrong</p>
        )}
      </div>
      <Button className="show_more_btn" onClick={addItems}>
        Show more
      </Button>
    </div>
  );
}

export default Menu;
