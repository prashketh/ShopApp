import React, { Component } from 'react'
import './displayMovies.css'
import loading from '../../assets/loading.gif'

let nomIndexes = [];
let nomMovies = [];
let search;

class DisplayMovies extends Component {
    constructor(props) {

        super(props);
        this.state = {
            nomOne: null,
            nomTwo: null,
            nomThree: null,
            nomFour: null,
            nomFive: null,
            alreadyExists: false,
            showPoster: false,
        }
        this.handleNomChange = this.handleNomChange.bind(this);
        this.handleNomRemove = this.handleNomRemove.bind(this);
        this.handleToggle = this.handleToggle.bind(this);
        this.handleClearNoms = this.handleClearNoms.bind(this);
    }

    componentDidMount() {
        search = this.props.lowerCaseSearch;
    }

    componentDidUpdate() {
        if (search !== this.props.lowerCaseSearch) {
            search = this.props.lowerCaseSearch;
            nomIndexes = [];
        }
    }

    handleNomChange(event) {
        if (!this.state.nomOne && nomMovies.includes(event.target.value) == false) {
            this.setState({ nomOne: { key: event.target.value, index: event.target.id, query: search } });
            nomIndexes.push(event.target.id);
            nomMovies.push(event.target.value);
            this.setState({ alreadyExists: false });
        }
        else if (!this.state.nomTwo && nomMovies.includes(event.target.value) == false) {
            this.setState({ nomTwo: { key: event.target.value, index: event.target.id, query: search } });
            nomIndexes.push(event.target.id);
            nomMovies.push(event.target.value);
            this.setState({ alreadyExists: false });
        }
        else if (!this.state.nomThree && nomMovies.includes(event.target.value) == false) {
            this.setState({ nomThree: { key: event.target.value, index: event.target.id, query: search } });
            nomIndexes.push(event.target.id);
            nomMovies.push(event.target.value);
            this.setState({ alreadyExists: false });
        }
        else if (!this.state.nomFour && nomMovies.includes(event.target.value) == false) {
            this.setState({ nomFour: { key: event.target.value, index: event.target.id, query: search } });
            nomIndexes.push(event.target.id);
            nomMovies.push(event.target.value);
            this.setState({ alreadyExists: false });
        }
        else if (!this.state.nomFive && nomMovies.includes(event.target.value) == false) {
            this.setState({ nomFive: { key: event.target.value, index: event.target.id, query: search } });
            nomIndexes.push(event.target.id);
            nomMovies.push(event.target.value);
            this.setState({ alreadyExists: false });
        }
        else if (nomMovies.includes(event.target.value)) {
            this.setState({ alreadyExists: true });
            nomIndexes.push(event.target.id);
        }
        else {
            this.setState({ alreadyExists: false });
        }
    }

    handleNomRemove(event) {
        let tempQuery;
        let tempSearch;

        if (this.state.nomOne && event.target.value === this.state.nomOne.key) {
            tempQuery = this.state.nomOne.query.length.toString();
            tempSearch = search.length.toString();
            if (search === this.state.nomOne.query && tempSearch.includes(tempQuery)) {
                if (nomIndexes.indexOf(this.state.nomOne.index) > -1) {
                    nomIndexes.splice(nomIndexes.indexOf(this.state.nomOne.index), 1);
                }
            }
            this.setState({ nomOne: null });
            nomMovies.splice(nomMovies.indexOf(event.target.value), 1);
        }
        else if (this.state.nomTwo && event.target.value === this.state.nomTwo.key) {
            tempQuery = this.state.nomTwo.query.length.toString();
            tempSearch = search.length.toString();
            if (search === this.state.nomTwo.query && tempSearch.includes(tempQuery)) {
                if (nomIndexes.indexOf(this.state.nomTwo.index) > -1) {
                    nomIndexes.splice(nomIndexes.indexOf(this.state.nomTwo.index), 1);
                }
            }
            this.setState({ nomTwo: null });
            nomMovies.splice(nomMovies.indexOf(event.target.value), 1);
        }
        else if (this.state.nomThree && event.target.value === this.state.nomThree.key) {
            tempQuery = this.state.nomThree.query.length.toString();
            tempSearch = search.length.toString();
            if (search === this.state.nomThree.query && tempSearch.includes(tempQuery)) {
                if (nomIndexes.indexOf(this.state.nomThree.index) > -1) {
                    nomIndexes.splice(nomIndexes.indexOf(this.state.nomThree.index), 1);
                }
            }
            this.setState({ nomThree: null });
            nomMovies.splice(nomMovies.indexOf(event.target.value), 1);
        }
        else if (this.state.nomFour && event.target.value === this.state.nomFour.key) {
            tempQuery = this.state.nomFour.query.length.toString();
            tempSearch = search.length.toString();
            if (search === this.state.nomFour.query && tempSearch.includes(tempQuery)) {
                if (nomIndexes.indexOf(this.state.nomFour.index) > -1) {
                    nomIndexes.splice(nomIndexes.indexOf(this.state.nomFour.index), 1);
                }
            }
            this.setState({ nomFour: null });
            nomMovies.splice(nomMovies.indexOf(event.target.value), 1);
        }
        else if (this.state.nomFive && event.target.value === this.state.nomFive.key) {
            tempQuery = this.state.nomFive.query.length.toString();
            tempSearch = search.length.toString();
            if (search === this.state.nomFive.query && tempSearch.includes(tempQuery)) {
                if (nomIndexes.indexOf(this.state.nomFive.index) > -1) {
                    nomIndexes.splice(nomIndexes.indexOf(this.state.nomFive.index), 1);
                }
            }
            this.setState({ nomFive: null });
            nomMovies.splice(nomMovies.indexOf(event.target.value), 1);
        }
        this.setState({ alreadyExists: false });
    }

    handleToggle() {
        this.setState({ showPoster: !this.state.showPoster });
    }

    handleClearNoms() {
        this.setState({ nomOne: null, nomTwo: null, nomThree: null, nomFour: null, nomFive: null, alreadyExists: false });
        nomMovies = [];
        nomIndexes = [];
    }

    render() {
        return (
            <React.Fragment>
                {console.log(this.props.isLoading)}
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
                                        (movie, index) =>
                                            nomIndexes.includes(index.toString()) ?
                                                <li class="list-group-item list-group-item-light" key={movie.Title}>
                                                    <form class="d-flex flex-column m-1">
                                                        <h6>{movie.Title} ({movie.Year})</h6>
                                                        {this.state.showPoster ? <img alt="" src={movie.Poster} /> : null}
                                                        <button type="button" class="btn btn-secondary btn-set-width mt-2" disabled={true}>Nominate</button>
                                                    </form>
                                                </li> :
                                                <li class="list-group-item list-group-item-light" key={movie.Title}>
                                                    <form class="d-flex flex-column m-1">
                                                        <h6>{movie.Title} ({movie.Year})</h6>
                                                        {this.state.showPoster ? <img alt="" src={movie.Poster} /> : null}
                                                        <button type="button" class="btn btn-secondary btn-set-width mt-2" id={index} value={movie.Title + " (" + movie.Year + ")"} onClick={this.handleNomChange}>Nominate</button>
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
                                        {!this.state.alreadyExists ? null : <div class="alert alert-info" role="alert">
                                            Nomination already exists
                            </div>}
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
            </React.Fragment>
        )
    };
}

export default DisplayMovies;
