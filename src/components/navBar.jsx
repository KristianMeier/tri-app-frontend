import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = ({ user }) => {
  return (
    <div class="w3-top">
      <div class="w3-row w3-large w3-light-grey">
        <div class="w3-col s3">
          <NavLink className="w3-button w3-block" to="/movies">
            Book
          </NavLink>
        </div>
        <div class="w3-col s3">
          <NavLink className="w3-button w3-block" to="/myBookings">
            My Bookings
          </NavLink>
        </div>
        {!user && (
          <div>
            <div class="w3-col s3">
              <NavLink className="w3-button w3-block" to="/login">
                Login
              </NavLink>
            </div>
            <div class="w3-col s3">
              <NavLink className="w3-button w3-block" to="/register">
                Register
              </NavLink>
            </div>
          </div>
        )}
        {user && (
          <div>
            <div className="w3-col s3">
              <NavLink className="w3-button w3-block" to="/profile">
                My Profile
              </NavLink>
            </div>
            <div class="w3-col s3">
              <NavLink className="w3-button w3-block" to="/logout">
                Logout
              </NavLink>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
