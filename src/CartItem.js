import React from "react";
import { useGlobalContext } from "./context";

export default function CartItem({ id, title, price, img, amount }) {
  const { removeItem, decrease, increase } = useGlobalContext();
  return (
    <div className="cart-item">
      <div className="item-info">
        <img src={img} alt="" className="img item-img" />
        <h5>{title}</h5>
        <p>{price}</p>
        <button className="btn" onClick={() => removeItem(id)}>
          remove
        </button>
      </div>
      <div className="item-amount">
        <button className="btn" onClick={() => increase(id)}>
          +
        </button>
        <p>{amount}</p>
        <button className="btn" onClick={() => decrease(id)}>
          -
        </button>
      </div>
    </div>
  );
}
