import React, { Component } from 'react'
import './displayMovies.css'
import loading from '../../assets/loading.gif'

let nomIDs = [];
let nomMovies = [];

class DisplayMovies extends Component {
    constructor(props) {

        super(props);
        this.state = {
            nomOne: null,
            nomTwo: null,
            nomThree: null,
            nomFour: null,
            nomFive: null,
            showPoster: false,
        }
        this.handleNomChange = this.handleNomChange.bind(this);
        this.handleNomRemove = this.handleNomRemove.bind(this);
        this.handleToggle = this.handleToggle.bind(this);
        this.handleClearNoms = this.handleClearNoms.bind(this);
    }

    handleNomChange(event) {
        if (!this.state.nomOne && nomIDs.includes(event.target.id) == false) {
            this.setState({ nomOne: { key: event.target.value, movieID: event.target.id } });
            nomIDs.push(event.target.id);
            nomMovies.push(event.target.value);
        }
        else if (!this.state.nomTwo && nomIDs.includes(event.target.id) == false) {
            this.setState({ nomTwo: { key: event.target.value, movieID: event.target.id } });
            nomIDs.push(event.target.id);
            nomMovies.push(event.target.value);
        }
        else if (!this.state.nomThree && nomIDs.includes(event.target.id) == false) {
            this.setState({ nomThree: { key: event.target.value, movieID: event.target.id } });
            nomIDs.push(event.target.id);
            nomMovies.push(event.target.value);
        }
        else if (!this.state.nomFour && nomIDs.includes(event.target.id) == false) {
            this.setState({ nomFour: { key: event.target.value, movieID: event.target.id } });
            nomIDs.push(event.target.id);
            nomMovies.push(event.target.value);
        }
        else if (!this.state.nomFive && nomIDs.includes(event.target.id) == false) {
            this.setState({ nomFive: { key: event.target.value, movieID: event.target.id } });
            nomIDs.push(event.target.id);
            nomMovies.push(event.target.value);
        }
    }

    handleNomRemove(event) {
        if (this.state.nomOne && event.target.value === this.state.nomOne.key) {
            this.setState({ nomOne: null });
            nomIDs.splice(nomIDs.indexOf(this.state.nomOne.movieID), 1);
            nomMovies.splice(nomMovies.indexOf(event.target.value), 1);
        }
        else if (this.state.nomTwo && event.target.value === this.state.nomTwo.key) {
            this.setState({ nomTwo: null });
            nomIDs.splice(nomIDs.indexOf(this.state.nomTwo.movieID), 1);
            nomMovies.splice(nomMovies.indexOf(event.target.value), 1);
        }
        else if (this.state.nomThree && event.target.value === this.state.nomThree.key) {
            this.setState({ nomThree: null });
            nomIDs.splice(nomIDs.indexOf(this.state.nomThree.movieID), 1);
            nomMovies.splice(nomMovies.indexOf(event.target.value), 1);
        }
        else if (this.state.nomFour && event.target.value === this.state.nomFour.key) {
            this.setState({ nomFour: null });
            nomIDs.splice(nomIDs.indexOf(this.state.nomFour.movieID), 1);
            nomMovies.splice(nomMovies.indexOf(event.target.value), 1);
        }
        else if (this.state.nomFive && event.target.value === this.state.nomFive.key) {
            this.setState({ nomFive: null });
            nomIDs.splice(nomIDs.indexOf(this.state.nomFive.movieID), 1);
            nomMovies.splice(nomMovies.indexOf(event.target.value), 1);
        }
    }

    handleToggle() {
        this.setState({ showPoster: !this.state.showPoster });
    }

    handleClearNoms() {
        this.setState({ nomOne: null, nomTwo: null, nomThree: null, nomFour: null, nomFive: null });
        nomMovies = [];
        nomIDs = [];
    }

    checkIfIDExists(movie) {
        if (nomIDs.includes(movie.imdbID)) {
            return true;
        }
        return false;
    }

    render() {
        return (
            <div class="d-flex flex-column">
                <div class="card mb-2 pt-1">
                    <div class="d-flex justify-content-around">
                        <div class="m-2 p-1">
                            <h5>Options:</h5>
                        </div>
                        <div class="custom-control custom-switch m-2 p-2">
                            <input type="checkbox" class="custom-control-input" id="switchPoster" onChange={this.handleToggle} />
                            <label class="custom-control-label switch-align" for="switchPoster">Show posters</label>
                        </div>
                        <div class="m-2 p-1">
                            <button type="button" class="btn btn-outline-secondary" onClick={this.handleClearNoms}>Clear all nominations</button>
                        </div>
                    </div>
                </div>
                <div class="d-flex flex-row">
                    <div class="card pt-2 pl-2 pr-2 card-set-width">
                        <div class="card-body">
                            <div class="d-flex flex-row">
                                <div>
                                    <h5 class="card-title">{this.props.searchTerm ? 'Results for "' + this.props.searchTerm + '"' : "Results"}</h5>
                                </div>
                            </div>
                            <ul class="list-group">
                                {this.props.movies ? this.props.movies.map(
                                    (movie) =>
                                        this.checkIfIDExists(movie) ?
                                            <li class="list-group-item list-group-item-light">
                                                <form class="d-flex flex-column m-1">
                                                    <h6>{movie.Title} ({movie.Year})</h6>
                                                    {this.state.showPoster ? <img alt="" src={movie.Poster} /> : null}
                                                    <button type="button" class="btn btn-secondary btn-set-width mt-2" disabled={true}>Nominate</button>
                                                </form>
                                            </li> :
                                            <li class="list-group-item list-group-item-light">
                                                <form class="d-flex flex-column m-1">
                                                    <h6>{movie.Title} ({movie.Year})</h6>
                                                    {this.state.showPoster ? <img alt="" src={movie.Poster} /> : null}
                                                    <button type="button" class="btn btn-secondary btn-set-width mt-2" id={movie.imdbID} value={movie.Title + " (" + movie.Year + ")"} onClick={this.handleNomChange}>Nominate</button>
                                                </form>
                                            </li>
                                ) :
                                    <li class="list-group-item list-group-item-light">
                                        {this.props.isLoading ?
                                            <div class="text-center">
                                                <img class="loadingGIF" src={loading} alt="loading..." />
                                            </div>
                                            : "No Results"}
                                    </li>
                                }
                            </ul>
                        </div>
                    </div>
                    <div class="pl-2">
                        <div class="d-flex flex-row">
                            <div class="card pt-2 pl-2 pr-2 card-set-width">
                                <div class="card-body">
                                    <h5 class="card-title">Nominations (Top 5)</h5>
                                    {this.state.nomOne && this.state.nomTwo && this.state.nomThree && this.state.nomFour && this.state.nomFive ? <div class="alert alert-info" role="alert">
                                        Nominations limit reached (Max 5)
                            </div> : null}
                                    <ul class="list-group">
                                        {[this.state.nomOne, this.state.nomTwo, this.state.nomThree, this.state.nomFour, this.state.nomFive] ? [this.state.nomOne, this.state.nomTwo, this.state.nomThree, this.state.nomFour, this.state.nomFive].map(
                                            (nom) =>
                                                nom ?
                                                    <li class="list-group-item list-group-item-light">
                                                        <form class="d-flex flex-column m-1">
                                                            <p>{nom.key}</p>
                                                            <button type="button" class="btn btn-secondary btn-set-width" value={nom.key} onClick={this.handleNomRemove}>Remove</button>
                                                        </form>
                                                    </li>
                                                    : <li class="list-group-item list-group-item-light">
                                                        Choose a movie
                                                </li>
                                        ) : null}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    };
}

export default DisplayMovies;
