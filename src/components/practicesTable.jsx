import React, { Component } from "react";
import auth from "../services/authService";
import Table from "./common/table";
import Button from "./common/button";

const Spots = () => {
  return (
    <div>
      <p>3/16</p>
    </div>
  );
};

class PracticesTable extends Component {
  columns = [
    {
      path: "title",
      label: "Location",
    },
    { path: "discipline.name", label: "Disciplin" },
    {
      key: "hej",
      label: "Spots",
      content: () => <Spots />,
    },
    {
      key: "like",
      label: "Sign up",
      content: () => <Button text={"Sign Up"} />,
    },
  ];

  constructor() {
    super();
    const user = auth.getCurrentUser();
    if (user && user.isAdmin) this.columns.push(this.deleteColumn);
  }

  render() {
    const { practices, onSort, sortColumn } = this.props;

    return (
      <Table
        columns={this.columns}
        data={practices}
        sortColumn={sortColumn}
        onSort={onSort}
      />
    );
  }
}

export default PracticesTable;
