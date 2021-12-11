import React from "react";
import CartItem from "./CartItem";
import { useGlobalContext } from "./context";

export default function Cart() {
  const { cart, total, clearItem } = useGlobalContext();

  if (cart.length === 0) {
    return (
      <div className="cart-empty">
        <h1>No Item in Cart</h1>
      </div>
    );
  }

  return (
    <main>
      <div className="cart-center">
        <h2>Shopping Cart</h2>
        <div className="cart-container">
          {cart.map((item) => {
            return <CartItem key={item.id} {...item} />;
          })}
        </div>
        <div className="cart-total">
          <p>total: ${total}</p>
        </div>

        <button className="btn cart-btn" onClick={clearItem}>
          clear all
        </button>
      </div>
    </main>
  );
}
