import React from "react";
// import CartItems from "../data";
import CartItem from "./CartItem";
import { useGlobalContext } from "../context";

const Heropage = () => {
  const { cart, total, clearCart } = useGlobalContext();
  if (cart.length === 0) {
    return (
      <div className="cart-container">
        <h1 className="text-3xl text-center">Your Bag</h1>
        <p className="text-center my-4">Your cart is empty now...</p>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <h1 className="text-center text-3xl">Your Bag</h1>
      {cart.map((item) => {
        console.log(item);
        return (
          <div key={item.id}>
            <CartItem {...item} />
          </div>
        );
      })}
      <hr className="my-4" />
      <div className="total flex justify-between">
        <p>Total:</p>
        <p> ₹ {total}</p>
      </div>

      <button
        className="clear-btn px-8 py-2 text-sm block my-0 mx-auto bg-blue-400 hover:bg-blue-300"
        onClick={clearCart}
      >
        Clear All{" "}
      </button>
    </div>
  );
};

export default Heropage;
