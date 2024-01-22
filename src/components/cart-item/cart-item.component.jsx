// import React from "react";
import "./cart-item.styles.scss";

const CartItem = ({ cartItem }) => {
    const { name, imageUrl, price, quantity } = cartItem;
    return (
        <div className="CartItemContainer">
            <img src={imageUrl} alt={`${name}`} />
            <div className="ItemDetails">
                <span>{name}</span>
                <span>
                    {quantity} x {`${price}лв`}
                </span>
            </div>
        </div>
    );
};

export default CartItem;
