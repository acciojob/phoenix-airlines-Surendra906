import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import './../styles/App.css';

// Import or define your page components below or in separate files
import LandingPage from "./LandingPage";
import FlightSearch from "./FlightSearch";
import FlightBooking from "./FlightBooking";
import Confirmation from "./Confirmation";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div id="main">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/flight-search" element={<FlightSearch />} />
            <Route path="/flight-booking" element={<FlightBooking />} />
            <Route path="/confirmation" element={<Confirmation />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
