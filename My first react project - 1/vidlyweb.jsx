import React, { Component } from "react";
import { getMovies } from "./services/fakeMovieService";
import { deleteMovie } from "./services/fakeMovieService";

class Movies extends Component {
  state = {
    movies: getMovies(),
  };

  handleDelete = (id) => {
    deleteMovie(this.state.movies._id);
    this.setState({ movies: getMovies() });
  };
  handleRender = () => {
    if (this.state.movies.length === 0)
      return <h2 className="m-5">There are no movies in Database</h2>;
    return (
      <>
        <h2 className="m-5">
          Showing {this.state.movies.length} movies in the database.
        </h2>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Genre</th>
              <th scope="col">Stock</th>
              <th scope="col">Rate</th>
              <th scope="col"></th>
            </tr>
          </thead>
          {this.state.movies.map((movie) => (
            <tbody>
              <tr>
                <td>{movie.title}</td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td>
                  <button
                    onClick={this.handleDelete}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </>
    );
  };
  render() {
    return <main className="container">{this.handleRender()}</main>;
  }
}

export default Movies;
