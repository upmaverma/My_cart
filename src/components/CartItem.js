import React from "react";
import { FaPlus, FaMinus } from "react-icons/all";
import { useGlobalContext } from "../context";
const CartItem = ({ id, title, img, amount, price }) => {
  const { remove, increase, decrease } = useGlobalContext();
  return (
    <div className="cart-item flex items-center justify-between p-2 m-4">
      <div className="image-details flex w-full">
        <div className="image-container">
          <img src={img} alt={title} />
        </div>
        <div className="info ml-2 text-xs leading-5">
          <h1 className="text-sm">{title}</h1>
          <p>₹ {price}</p>
          <button className="text-blue-400" onClick={() => remove(id)}>
            remove
          </button>
        </div>
      </div>
      <div className="cart-handler grid place-items-center">
        <button onClick={() => increase(id)}>
          <FaPlus />
        </button>
        <div>
          <p>{amount}</p>
        </div>
        <button onClick={() => decrease(id)}>
          <FaMinus />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
