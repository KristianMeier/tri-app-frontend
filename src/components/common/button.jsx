import React from "react";

const Button = ({ text }) => {
  return (
    <button
      type="button"
      id="pagination-icons"
      class="btn btn-outline-secondary btn-sm"
      style={{ cursor: "pointer" }}
    >
      {text}
    </button>
  );
};

export default Button;
