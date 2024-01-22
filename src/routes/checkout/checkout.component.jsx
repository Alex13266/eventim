import "./checkout.styles.scss";
import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";

const Checkout = () => {
    const { cartItems, cartTotal } = useContext(CartContext);

    return (
        <div className="CheckoutContainer">
            <div className="CheckoutHeader">
                <div className="HeaderBlock">
                    <span>Продукт</span>
                </div>
                <div className="HeaderBlock">
                    <span>Име</span>
                </div>
                <div className="HeaderBlock">
                    <span>Количество</span>
                </div>
                <div className="HeaderBlock">
                    <span>Цена</span>
                </div>
                <div className="HeaderBlock">
                    <span>Премахни</span>
                </div>
            </div>
            {cartItems.map((cartItem) => (
                <CheckoutItem key={cartItem.id} cartItem={cartItem} />
            ))}
            <div className="Total">Общо: {`${cartTotal}лв`}</div>
        </div>
    );
};

export default Checkout;
