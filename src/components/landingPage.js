import React from "react";
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div className="landing-page">
      <h1>Welcome to Phoenix Airlines</h1>
      <Link to="/flight-search">
        <button>Get Started</button>
      </Link>
    </div>
  );
}
