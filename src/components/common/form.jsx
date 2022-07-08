import { Component } from "react";

class Form extends Component {
  state = {
    data: {},
  };

  handleChange = ({ currentTarget: input }) => {
    const data = { ...this.state.data };
    data[input.name] = input.value;

    this.setState({ data });
  };
}

export default Form;
