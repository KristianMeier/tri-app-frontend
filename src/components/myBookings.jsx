import React from "react";
import Button from "./common/button";

const MyBookings = () => {
  const buttonText = "Sign Off";

  return (
    <div className="row">
      <div className="col">
        <br />
        <br />
        <br />
        <h2>Your Activity</h2>
        <p>Trianing hours this months: 8</p>
        <p>Average trianing hours per month: 10</p>

        <h2 id="link-for-footer">Your Bookings</h2>
        <table className="table">
          <thead>
            <tr>
              <th>Location</th>
              <th>Discipline</th>
              <th>Spots</th>
              <th>Sign Off</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Parken 14/8 kl. 19.30</td>
              <td>3/16</td>
              <td>Svømning</td>
              <td>
                <Button text={buttonText} />
              </td>
            </tr>
            <tr>
              <td>Parken 14/8 kl. 19.30</td>
              <td>13/6</td>
              <td>Løb</td>
              <td>
                <Button text={buttonText} />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyBookings;
