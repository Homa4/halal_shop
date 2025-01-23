import { ReactElement, useContext } from "react";
import Product from "../../InfoType/infotype";
import "./Item.css";
import { useNavigate } from "react-router-dom";
import { ContextForOverview } from "../../Context/OverviewContext";

interface ItemInfo {
  element: Product;
}

const partDisplayDes = (description: string): string => {
  return description.slice(0, 50).concat(" ...");
};

function Item({ element }: ItemInfo): ReactElement {
  const context = useContext(ContextForOverview);
  if (!context) {
    throw new Error("ContextForOverview is undefined");
  }
  const { state, dispatch } = context;
  const navigate = useNavigate();
  const moveToDetailDescription = (): void => {
    navigate("/overview");
    dispatch({ type: "AddToState", payload: element });
    console.log("Console log from Item:", state);
    console.log("images:", element.images);
  };

  return (
    <>
      <div
        className="item"
        onClick={moveToDetailDescription}
        id={element.id.toString()}
      >
        <h3 className="item_title">{element.title}</h3>
        <img src={element.thumbnail} alt={element.title} className="item_img" />

        <div className="item_price">${element.price.toFixed(2)}</div>
        <div className="discount">{element.discountPercentage} %</div>

        <div className="item_description">
          {partDisplayDes(element.description)}
        </div>
      </div>
    </>
  );
}

export default Item;
