import React, { Component } from "react";
import PracticesTable from "./practicesTable";
import Pagination from "./common/pagination";
import { getDisciplines, getPractices } from "../services/apiService";
import { paginate } from "./common/pagination";
import _ from "lodash";
import SearchBox from "./searchBox";
import RadioInput from "./common/radioInput";

class Practices extends Component {
  state = {
    practices: [],
    disciplines: [],
    currentPage: 1,
    pageSize: 10,
    searchQuery: "",
    selectedDisciplines: null,
    sortColumn: { path: "practices", order: "asc" },
  };

  async componentDidMount() {
    const { data } = await getDisciplines();
    const disciplines = [{ _id: "", name: "All Discipliness" }, ...data];

    const { data: practices } = await getPractices();
    this.setState({ practices, disciplines });
  }

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  handleSearch = (query) => {
    this.setState({
      searchQuery: query,
      selectedDisciplines: null,
      currentPage: 1,
    });
  };

  handleSort = (sortColumn) => {
    this.setState({ sortColumn });
  };

  getPagedData = () => {
    const {
      pageSize,
      currentPage,
      sortColumn,
      selectedDisciplines,
      searchQuery,
      practices: allPactices,
    } = this.state;

    let filtered = allPactices;
    if (searchQuery)
      filtered = allPactices.filter((m) =>
        m.practices.toLowerCase().startsWith(searchQuery.toLowerCase())
      );
    else if (selectedDisciplines && selectedDisciplines._id)
      filtered = allPactices.filter(
        (m) => m.discipline._id === selectedDisciplines._id
      );

    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

    const practices = paginate(sorted, currentPage, pageSize);

    return { totalCount: filtered.length, data: practices };
  };

  render() {
    const { length: count } = this.state.practices;
    const { pageSize, currentPage, sortColumn, searchQuery } = this.state;

    if (count === 0) return <p>There are no practices in the database.</p>;

    const { totalCount, data: practices } = this.getPagedData();

    return (
      <div className="row">
        <div className="col">
          <br />
          <br />
          <br />
          <h2 id="link-for-footer">Book a practice - wow</h2>
          <SearchBox value={searchQuery} onChange={this.handleSearch} />

          <RadioInput />
          <PracticesTable
            practices={practices}
            sortColumn={sortColumn}
            onSort={this.handleSort}
          />
          <Pagination
            itemsCount={totalCount}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={this.handlePageChange}
          />
        </div>
      </div>
    );
  }
}

export default Practices;
