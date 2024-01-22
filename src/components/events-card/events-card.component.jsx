import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faCalendar } from "@fortawesome/free-solid-svg-icons";
import "./events-card.styles.scss";

const EventsCard = ({ product }) => {
  const { name, price, imageUrl, location, date } = product;
  const { addItemToCart } = useContext(CartContext);

  const addProductToCart = () => addItemToCart(product);

  return (
    <div className='ProductCartContainer'>
      <div className='event-cards-images'>
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <div className='event-card-wrapper'>
        <h5>{name}</h5>
      </div>
      <div className='event-card-content'>
        <span>
          <FontAwesomeIcon icon={faLocationDot} />
          &nbsp;
          {location}
        </span>
        <span>
          <FontAwesomeIcon icon={faCalendar} />
          &nbsp;
          {date}
        </span>
        <span>{`${price}лв`}</span>
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

export default EventsCard;
