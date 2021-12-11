import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useGlobalContext } from "./context";

export default function Navbar() {
  const { amount } = useGlobalContext();

  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <h1>Cart</h1>
        </div>
        <div className="nav-cart">
          <FaShoppingCart />
          <span>{amount}</span>
        </div>
      </div>
    </nav>
  );
}
