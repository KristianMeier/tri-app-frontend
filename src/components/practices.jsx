import React, { Component } from "react";
import PracticesTable from "./practicesTable";
import Pagination from "./common/pagination";
import { getPractices } from "../services/practiceService";
import { getDisciplines } from "../services/disciplineService";
import { paginate } from "./common/pagination";
import _ from "lodash";
import SearchBox from "./searchBox";

class Practices extends Component {
  state = {
    movies: [],
    genres: [],
    currentPage: 1,
    pageSize: 20,
    searchQuery: "",
    selectedGenre: null,
    sortColumn: { path: "title", order: "asc" },
  };

  async componentDidMount() {
    const { data } = await getDisciplines();
    const genres = [{ _id: "", name: "All Genres" }, ...data];

    const { data: movies } = await getPractices();
    this.setState({ movies, genres });
  }

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  handleDisciplinesSelect = (genre) => {
    this.setState({ selectedGenre: genre, searchQuery: "", currentPage: 1 });
  };

  handleSearch = (query) => {
    this.setState({ searchQuery: query, selectedGenre: null, currentPage: 1 });
  };

  handleSort = (sortColumn) => {
    this.setState({ sortColumn });
  };

  getPagedData = () => {
    const {
      pageSize,
      currentPage,
      sortColumn,
      selectedGenre,
      searchQuery,
      movies: allMovies,
    } = this.state;

    let filtered = allMovies;
    if (searchQuery)
      filtered = allMovies.filter((m) =>
        m.title.toLowerCase().startsWith(searchQuery.toLowerCase())
      );
    else if (selectedGenre && selectedGenre._id)
      filtered = allMovies.filter((m) => m.genre._id === selectedGenre._id);

    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

    const movies = paginate(sorted, currentPage, pageSize);

    return { totalCount: filtered.length, data: movies };
  };

  render() {
    const { length: count } = this.state.movies;
    const { pageSize, currentPage, sortColumn, searchQuery } = this.state;

    if (count === 0) return <p>There are no movies in the database.</p>;

    const { totalCount, data: movies } = this.getPagedData();

    return (
      <div className="row">
        <div className="col">
          <br />
          <br />
          <br />
          <h2 id="link-for-footer">Book a practice</h2>
          <SearchBox value={searchQuery} onChange={this.handleSearch} />
          <PracticesTable
            movies={movies}
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
