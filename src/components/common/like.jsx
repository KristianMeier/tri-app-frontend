import React from "react";

const Like = (props) => {
  return (
    <button
      type="button"
      id="pagination-icons"
      class="btn btn-outline-secondary btn-sm"
      onClick={props.onClick}
      style={{ cursor: "pointer" }}
    >
      Sign Up
    </button>
  );
};

export default Like;
