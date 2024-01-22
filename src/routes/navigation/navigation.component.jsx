import { useState, Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import DropDownProfile from "../../components/profile-dropdown/dropdown-profile.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import CartIcon from "../../components/cart-icon/cart-icon.component.jsx";
import { CartContext } from "../../contexts/cart.context";
import {
    NavigationContainer,
    LogoContainer,
    NavLinks,
    NavLink,
    ProfileIconContainer,
    CartIconContainer,
} from "./navigation.styles.jsx";
import "./navigation.typography.scss";
import EventusLogo from "../../assets/Eventus.png";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const Navigation = () => {
    const [openProfile, setOpenProfile] = useState(false);
    const { isCartOpen } = useContext(CartContext);
    return (
        <Fragment>
            <NavigationContainer>
                <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                    <Container>
                        <LogoContainer to="/">
                            <img src={EventusLogo} alt="" />
                        </LogoContainer>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <NavLinks className="me-auto ">
                                <NavLink
                                    className="LinkComponent"
                                    to="concerts"
                                >
                                    Събития
                                </NavLink>
                                <NavLink className="LinkComponent">
                                    Зали
                                </NavLink>
                                <NavLink className="LinkComponent">
                                    Артисти
                                </NavLink>
                                <NavLink className="LinkComponent">
                                    Участия
                                </NavLink>
                            </NavLinks>
                            <ProfileIconContainer>
                                <FontAwesomeIcon
                                    onClick={() =>
                                        setOpenProfile((prev) => !prev)
                                    }
                                    className="mx-2 IconCss"
                                    icon={faUser}
                                />
                                {openProfile && <DropDownProfile />}
                            </ProfileIconContainer>
                            <CartIconContainer>
                                <CartIcon />
                                {isCartOpen && <CartDropdown />}
                            </CartIconContainer>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </NavigationContainer>
            <Outlet />
        </Fragment>
    );
};

export default Navigation;
