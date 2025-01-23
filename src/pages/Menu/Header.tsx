import React, { memo, useContext } from "react";
import "./Header.css";
import logo from "../../images/halal_logo.png";
import { ContextForFilter } from "../../Context/FilterContext";

function Header() {
  const context = useContext(ContextForFilter);
  if (!context) {
    throw new Error("oops");
  }
  const { setCategory } = context;

  const filterPage = () => {
    const input = document.querySelector(".filter_input") as HTMLInputElement;
    setCategory(input.value);
  };

  const ShowAll = (): void => {
    setCategory("all");
  };

  const ShowBeauty = (): void => {
    setCategory("beauty");
  };

  const ShowParfume = (): void => {
    setCategory("fragrances");
  };

  const ShowGroceries = (): void => {
    setCategory("groceries");
  };

  return (
    <header className="header">
      <div className="wrapper_img">
        <img className="header_logo" alt="store logo" src={logo}></img>
      </div>
      <div className="center_buttons">
        <button className="filter_button" onClick={ShowBeauty}>
          Beauty
        </button>
        <button className="filter_button" onClick={ShowGroceries}>
          Men's Chill
        </button>
        <button className="filter_button" onClick={ShowParfume}>
          Fragrances
        </button>
        <button className="filter_button" onClick={ShowAll}>
          Show all
        </button>
      </div>
      <div className="search_section">
        <input className="filter_input" placeholder="Search..." />
        <button className="search_button" onClick={filterPage}>
          Search
        </button>
      </div>
    </header>
  );
}

export default memo(Header);
