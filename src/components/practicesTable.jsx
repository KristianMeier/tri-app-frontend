import React, { Component } from "react";
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
      path: "practices",
      label: "Location",
    },
    //discipline laves i seed i bunden, kan ikke let ændres.
    { path: "discipline.name", label: "Disciplin" },
    {
      key: "hej",
      label: "Spots",
      content: () => <Spots />,
    },
    {
      key: "like",
      label: "Book",
      content: () => <Button text={"Book"} />,
    },
  ];

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
