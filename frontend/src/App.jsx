import Navbar from "/src/Components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "/src/Routes/Homepage/Home";
import About from "/src/Routes/About/About";
import Contact from "/src/Routes/Contact/Contact";
import Service from "/src/Routes/Service/Service";
import Commodities from "./Routes/Inner/Commodities";
import CreateAccount from "./Routes/Inner/Account/CreateAccount";
import Login from "/src/Profile/Login";

import "./index.css";
import Sell from "/src/Routes/Inner/Sell/Sell";
import Buy from "/src/Routes/Inner/Products/Buy";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/buy/commodities" element={<Commodities />} />
        <Route path="/sell" element={<Sell />} />
        <Route path="/createaccount" element={<CreateAccount />} />
        <Route path="/buy" element={<Buy />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}
