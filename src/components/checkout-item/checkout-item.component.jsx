import { useState, useContext } from "react";

import { CartContext } from "../../contexts/cart.context";
import { notification } from "antd";

import "./checkout-item.styles.scss";

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;

  const { clearItemFromCart, addItemToCart, removeItemToCart } =
    useContext(CartContext);

  const clearItemHandler = () => {
    clearItemFromCart(cartItem);
    removedItemNotification();
  };
  const addItemHandler = () => addItemToCart(cartItem);
  const removeItemHandler = () => {
    removeItemToCart(cartItem);
  };

  const removedItemNotification = () => {
    notification.success({
      message: "Product Removed",
      description: `${name} has been removed from your cart.`,
    });
  };

  return (
    <div className='CheckoutItemContainer'>
      <div className='ImageContainer'>
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <div className='BaseSpan'>{name}</div>
      <div className='Quantity'>
        <div className='Arrow' onClick={removeItemHandler}>
          &#10094;
        </div>
        <div className='Value'>{quantity}</div>
        <div className='Arrow' onClick={addItemHandler}>
          &#10095;
        </div>
      </div>
      <div className='Price'> {`${price}лв`}</div>
      <div className='RemoveButton' onClick={clearItemHandler}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
