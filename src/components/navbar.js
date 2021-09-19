import React from "react";
import { CgShoppingCart } from "react-icons/all";
import { useGlobalContext } from "../context";

import "./homepage.css";
const Navbar = () => {
  const { amount } = useGlobalContext();
  return (
    <nav className="bg-blue-700 text-white flex justify-around p-4">
      <div className="nav-header">
        <h1 className="uppercase tracking-widest font-black">My Cart</h1>
      </div>
      <div className="cart-bag relative">
        <CgShoppingCart className="text-3xl" />
        <p className="cart-amount absolute text-xs font-semibold flex items-center justify-center">
          {amount}
        </p>
      </div>
    </nav>
  );
};

export default Navbar;
