import React from "react";

const RadioInput = () => {
  return (
    <div>
      <div>
        <input className="radio" type="radio" value="Biking" name="disc" />{" "}
        Biking
        <input
          className="radio"
          type="radio"
          value="Cycling"
          name="disc"
        />{" "}
        Cyckling
        <input
          className="radio"
          type="radio"
          value="Running"
          name="disc"
        />{" "}
        Running
        <input className="radio" type="radio" value="Event" name="disc" /> Event
      </div>
      <div>
        <input className="radio" type="radio" value="Booked" name="isBooked" />{" "}
        Booked
        <input
          className="radio"
          type="radio"
          value="Not Booked"
          name="isBooked"
        />{" "}
        Not Booked
      </div>
    </div>
  );
};

export default RadioInput;
