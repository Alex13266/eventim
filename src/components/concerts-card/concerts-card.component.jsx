import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";

import "./concerts-card.styles.scss";

const ConcertsCard = ({ product }) => {
    // Destruktorirame
    const { name, imageUrl, description, location, hour, date, price } =
        product;

    const { addItemToCart } = useContext(CartContext);
    const addProductToCart = () => addItemToCart(product);

    return (
        <div className="ConcertCardContainer">
            <div className="ConcertCard-Image">
                <img src={imageUrl} alt={`${name}`} />
            </div>
            <div className="ConcertCard-Wrapper">
                <h6 className="Concert-Name">{name}</h6>
                <div className="ConcertCard-Content">
                    <div className="ConcertCard-Info">
                        <h6>Локация</h6>
                        <span>{location}</span>
                    </div>
                    <div className="ConcertCard-Info">
                        <h6>Дата</h6>
                        <span>{date}</span>
                    </div>
                    <div className="ConcertCard-Info">
                        <h6>Час</h6>
                        <span>{hour}</span>
                    </div>
                    <div className="ConcertCard-Info">
                        <h6>Цена</h6>
                        <span>{`${price}лв`}</span>
                    </div>
                </div>
            </div>

            <Button
                buttonType={BUTTON_TYPE_CLASSES.inverted}
                onClick={addProductToCart}
            >
                Купи
            </Button>
        </div>
    );
};

export default ConcertsCard;
