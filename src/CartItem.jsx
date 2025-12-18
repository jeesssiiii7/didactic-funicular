import React from "react";

const CartItem = ({ item, onRemove, onUpdate }) => {
  return (
    <div className="cart-item">
      <h3>{item.name}</h3>
      <p>Price: ${item.price}</p>
      <p>Quantity: {item.quantity}</p>

      <button onClick={() => onUpdate(item.id, item.quantity + 1)}>
        +
      </button>
      <button onClick={() => onUpdate(item.id, item.quantity - 1)}>
        -
      </button>
      <button onClick={() => onRemove(item.id)}>
        Remove
      </button>
    </div>
  );
};

export default CartItem;
