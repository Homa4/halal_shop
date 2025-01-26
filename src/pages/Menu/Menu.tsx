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
  const data = useFetch<{ products: Product[] }>(url);
  console.log(data);

  const context = useContext(ContextForFilter);

  if (!context) {
    throw new Error(
      "ContextForFilter must be used within a FilterContext provider."
    );
  }

  const { settingObj } = context;
  const [itemNumber, setItemNumber] = useState(8);

  let product: Product[] = [];

  if (settingObj.category === "all") {
    product = data?.products.slice(0, itemNumber) || [];
  } else {
    product =
      data?.products
        .filter((element: Product) => element.category === settingObj.category)
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
        {product.length > 0 ? (
          product.map((element: Product) => (
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
