import React from "react";
// import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { CategoriesProvider } from "./contexts/categories.context";
import { CartProvider } from "./contexts/cart.context";
import { UserProvider } from "./contexts/user.context";
import { ConcertsProvider } from "./contexts/concerts.context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <UserProvider>
                <ConcertsProvider>
                    <CategoriesProvider>
                        <CartProvider>
                            <App />
                        </CartProvider>
                    </CategoriesProvider>
                </ConcertsProvider>
            </UserProvider>
        </BrowserRouter>
    </React.StrictMode>
);
