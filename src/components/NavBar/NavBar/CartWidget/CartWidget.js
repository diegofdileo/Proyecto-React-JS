import React from "react";
import carrito from "./carrito.png";

const CartWidget = () => {
  return (
    <div>
      <img src={carrito} alt="" />
      <p>4</p>
    </div>
  );
};

export default CartWidget;
