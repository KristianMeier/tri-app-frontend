import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = ({ user }) => {
  return (
    <div class="w3-top">
      <div class="w3-row w3-large w3-light-grey">
        <div class="w3-col s4">
          <NavLink className="w3-button w3-block" to="/about-the-app">
            About the App
          </NavLink>
        </div>
        <div class="w3-col s4">
          <NavLink className="w3-button w3-block" to="/practices">
            Book Practice
          </NavLink>
        </div>
        <div className="w3-col s4">
          <NavLink className="w3-button w3-block" to="/myBookings">
            My Bookings
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
