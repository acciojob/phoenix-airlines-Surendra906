import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

export default function FlightBooking() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const selectedFlight = useSelector((state) => state.selectedFlight);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !phone) {
      setError("All fields are required.");
      return;
    }
    
    dispatch({
      type: "SET_BOOKING_DETAILS",
      payload: { name, email, phone }
    });
    navigate("/confirmation");
  };

  return (
    <div className="flight-booking">
      <h2>Passenger Details</h2>
      {selectedFlight && (
        <p>Selected: {selectedFlight.airline} ({selectedFlight.source} to {selectedFlight.destination})</p>
      )}
      {error && <p className="error" style={{ color: "red" }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <input 
            type="text" 
            placeholder="Full Name" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
          />
        </div>
        <div>
          <input 
            type="email" 
            placeholder="Email Address" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
          />
        </div>
        <div>
          <input 
            type="text" 
            placeholder="Phone Number" 
            value={phone} 
            onChange={(e) => setPhone(e.target.value)} 
          />
        </div>
        <button type="submit">Confirm Booking</button>
      </form>
    </div>
  );
}
