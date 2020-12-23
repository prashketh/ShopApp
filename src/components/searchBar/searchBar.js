import React, { Component } from 'react';
import './searchBar.css'
import DisplayMovies from '../displayMovies/displayMovies';

const APIkey = 42661839;

class SearchBar extends Component {

    constructor(props) {

        super(props);

        this.state = {
            searchTerm: '',
            finalTerm: '',
            movies: null,
            loading: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.submit = this.submit.bind(this);
    };

    handleChange(event) {
        this.setState({ searchTerm: event.target.value });
    }

    changeFinalTerm() {
        // Sets state of finalTerm to the search term
        this.setState({ finalTerm: this.state.searchTerm });
    }

    getMoviesOnly(movies) {
        // Shows only movies
        let listOfMovies = [];
        if (movies) {
        movies.forEach(movie => {
            if (movie.Type === "movie") {
                listOfMovies.push(movie);
            }
        });
        return listOfMovies;
    }
    return movies;
    }

    submit(e) {
        e.preventDefault(); // prevents the refresh on key enter
        this.setState({ searchTerm: this.state.searchTerm.trim() });
        this.changeFinalTerm();
        this.setState({ loading: true, movies: null });
        fetch(`https://www.omdbapi.com/?s=${this.state.searchTerm}&apikey=${APIkey}`)
            .then(resp => resp.json())
            .then(response => {
                this.setState({ searchTerm: '' })
                this.setState({ loading: false, movies: this.getMoviesOnly(response.Search) });
            })
            .catch((error) =>
                console.log(error)
            )
    }

    render() {

        return (
            <div class="d-flex flex-column p-3 change-width">
                <h1 class="header-color">The Shoppies</h1>
                {/* Search Form */}
                <form class="d-flex flex-column card p-2" onSubmit={this.submit}>
                    <div class="pl-3 pt-3 pr-3">
                        <h5>Movie title</h5>
                    </div>
                    <div class="input-group pt-2 pl-3 pr-3">
                        <input type="text" class="form-control" value={this.state.searchTerm} onChange={this.handleChange} />
                        <div class="input-group-append">
                            <button class="btn btn-outline-secondary" type="submit">Search</button>
                        </div>
                    </div>
                    <div class="pl-3 pt-2 pb-3 pr-3">
                        <small>Press ENTER or click the search button to find a movie</small>
                    </div>
                </form>
                {/* Displays movies and nominations list */}
                <div class="d-flex flex-row pt-2 change-width">
                    <DisplayMovies searchTerm={this.state.finalTerm} movies={this.state.movies} isLoading={this.state.loading} />
                </div>
            </div>
        )

    };
}

export default SearchBar
