import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/navigation/navigation.component";
import Home from "./routes/home/home.component";
import Authentication from "./routes/authentication/authentication.component";
import Checkout from "./routes/checkout/checkout.component";
import Concerts from "./routes/concerts/concerts.component";
import { Footer } from "./components/footer/footer.component";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Navigation />}>
                    <Route index element={<Home />} />
                    <Route path="auth" element={<Authentication />} />
                    <Route path="checkout" element={<Checkout />} />
                    <Route path="concerts" element={<Concerts />} />
                </Route>
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
