import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavigationContainer = styled.div`
    height: 70px;
    width: 100%;
`;

export const LogoContainer = styled(Link)`
    height: 100%;
    width: auto;
`;

export const NavLinks = styled.div`
    width: auto;
    height: 100%;
    display: flex;
    margin: 0 auto;
`;

export const NavLink = styled(Link)`
    padding: 0 2rem;
    text-decoration: none;
    font-family: "Playfair Display", serif;
    font-size: 18px;
    font-weight: 500;
    color: black;
    transition: 0.2s ease;

    :hover {
        color: #dc143c;
        transition: 0.2s ease-in;
    }
`;

export const ProfileIconContainer = styled.div`
    position: relative;
`;

export const CartIconContainer = styled.div`
    position: relative;
`;
