import React, { Component } from "react";

class Form extends Component {
  state = {
    data: {},
  };

  handleChange = ({ currentTarget: input }) => {
    const data = { ...this.state.data };
    data[input.name] = input.value;

    this.setState({ data });
  };

  renderButton(label) {
    return (
      <button id="pagination-icons" className="btn btn-primary">
        {label}
      </button>
    );
  }
}

export default Form;
