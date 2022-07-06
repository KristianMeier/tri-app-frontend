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
          <NavLink className="w3-button w3-block" to="/rentals">
            My Bookings
          </NavLink>
        </div>
        <div class="w3-col s3">
          <a href="#about" class="w3-button w3-block">
            About
          </a>
        </div>
        <div class="w3-col s3">
          <a href="#contact" class="w3-button w3-block">
            Contact
          </a>
        </div>
      </div>
    </div>

    //
    //
    //       {!user && (
    //         <React.Fragment>
    //           <NavLink className="nav-item nav-link" to="/login">
    //             Login
    //           </NavLink>
    //           <NavLink className="nav-item nav-link" to="/register">
    //             Register
    //           </NavLink>
    //         </React.Fragment>
    //       )}
    //       {user && (
    //         <React.Fragment>
    //           <NavLink className="nav-item nav-link" to="/profile">
    //             {user.name}
    //           </NavLink>
    //           <NavLink className="nav-item nav-link" to="/logout">
    //             Logout
    //           </NavLink>
    //         </React.Fragment>
    //       )}
    //     </div>
    //   </div>
    // </nav>
  );
};

export default NavBar;
