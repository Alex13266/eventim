import { Fragment } from "react";
import EventsCategory from "../events-card-category/events-category.component";
import StatsCounter from "../stats-counter/stats-counter.component";
import CategoryEntertainment from "../category-entertainment/category-entertainment.component";
import "./directory.styles.scss";
import Carousel from "react-bootstrap/Carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCheck,
    faCartShopping,
    faTicket,
    faCalendar,
} from "@fortawesome/free-solid-svg-icons";

const Directory = () => {
    return (
        <Fragment>
            <Carousel className="carousel-container" fade>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://images.unsplash.com/photo-1506157786151-b8491531f063?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
            <div className="offers-container my-5">
                <div className="row">
                    <div className="col-lg-4 col-sm-12">
                        <div className="offers-icon-container">
                            <FontAwesomeIcon
                                icon={faCheck}
                                className="offers-icon"
                            />
                        </div>
                        <div className="offers-text">
                            <h5>Избери евент и билети</h5>
                            <p>само с няколко клика</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-12">
                        <div className="offers-icon-container">
                            <FontAwesomeIcon
                                icon={faCartShopping}
                                className="offers-icon"
                            />
                        </div>
                        <div className="offers-text">
                            <h5>Купете директно от организаторите</h5>
                            <p>платете онлайн или в брой</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-12">
                        <div className="offers-icon-container">
                            <FontAwesomeIcon
                                icon={faTicket}
                                className="offers-icon"
                            />
                        </div>
                        <div className="offers-text">
                            <h5>Получете билети</h5>
                            <p>през имейл или еконт</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="cards-container">
                <div className="cards-wrapper">
                    <h2>Предстоящи евенти</h2>
                    <div className="cards-icon-container">
                        <span className="cards-icon-lines"></span>
                        <FontAwesomeIcon
                            icon={faCalendar}
                            className="cards-icon"
                        />
                        <span className="cards-icon-lines"></span>
                    </div>
                </div>
                <EventsCategory />
            </div>
            <div className="Counter-Countainer">
                <div className="Counter-Wrapper">
                    <StatsCounter min={10} max={50} />
                    <span>Продадени билети</span>
                </div>
                <div className="Counter-Wrapper">
                    <StatsCounter min={5} max={35} />
                    <span>Концерта</span>
                </div>
                <div className="Counter-Wrapper">
                    <StatsCounter min={10} max={45} />
                    <span>Доволни клиенти</span>
                </div>
                <div className="Counter-Wrapper">
                    <StatsCounter min={0} max={3} />
                    <span>Спонсорства</span>
                </div>
            </div>
            <div className="Directory-Categories">
                <div className="Directory-Categories-Wrapper">
                    <h2>Категории</h2>
                    <div className="Directory-Categories-IconCont">
                        <span className="Directory-Categories-Lines"></span>
                        <FontAwesomeIcon
                            icon={faCalendar}
                            className="Directory-Categories-Icon"
                        />
                        <span className="Directory-Categories-Lines"></span>
                    </div>
                </div>
                <CategoryEntertainment />
            </div>
        </Fragment>
    );
};

export default Directory;
