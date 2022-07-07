import React, { Component } from "react";
import auth from "../services/authService";
import Table from "./common/table";

const Like = () => {
  return (
    <button
      type="button"
      id="pagination-icons"
      class="btn btn-outline-secondary btn-sm"
      style={{ cursor: "pointer" }}
    >
      Sign Up
    </button>
  );
};

class MoviesTable extends Component {
  columns = [
    {
      path: "title",
      label: "Location",
    },
    { path: "genre.name", label: "Disciplin" },
    {
      key: "like",
      label: "Sign up",
      content: () => Like(),
    },
  ];

  constructor() {
    super();
    const user = auth.getCurrentUser();
    if (user && user.isAdmin) this.columns.push(this.deleteColumn);
  }

  render() {
    const { movies, onSort, sortColumn } = this.props;

    return (
      <Table
        columns={this.columns}
        data={movies}
        sortColumn={sortColumn}
        onSort={onSort}
      />
    );
  }
}

export default MoviesTable;
