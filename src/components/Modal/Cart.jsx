import React from "react";
import CartModal from "./CartModal";
import Item from "./Item";
import { RiShoppingCartLine } from "react-icons/ri";

const Cart = (props) => {
  const { cart, deleteFromCart, clearCart } = props;

  return (
    <div className="cart d-flex justify-content-center">
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#cartModal"
      >
        <RiShoppingCartLine /> ({cart.length})
      </button>
      <CartModal>
        {cart.map((item, index) => (
          <Item key={index} data={item} deleteFromCart={deleteFromCart} />
        ))}
        <button onClick={() => clearCart()} className="btn btn-warning btn-sm">
          Limpiar Carrito
        </button>
      </CartModal>
    </div>
  );
};

export default Cart;
