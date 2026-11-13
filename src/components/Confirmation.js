import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

export default function Confirmation() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const bookingDetails = useSelector((state) => state.bookingDetails);
  const selectedFlight = useSelector((state) => state.selectedFlight);

  const handleReturnHome = () => {
    dispatch({ type: "RESET_BOOKING" });
    navigate("/");
  };

  return (
    <div className="confirmation">
      <h2>Booking Confirmed!</h2>
      {selectedFlight && (
        <div>
          <p>Flight: {selectedFlight.airline}</p>
          <p>Route: {selectedFlight.source} ➔ {selectedFlight.destination}</p>
          <p>Date: {selectedFlight.date}</p>
        </div>
      )}
      <div>
        <h3>Passenger Info</h3>
        <p>Name: {bookingDetails.name}</p>
        <p>Email: {bookingDetails.email}</p>
        <p>Phone: {bookingDetails.phone}</p>
      </div>
      <button onClick={handleReturnHome}>Return to Home</button>
    </div>
  );
}
