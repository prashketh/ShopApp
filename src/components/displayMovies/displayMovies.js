import React, { Component } from 'react'
import './displayMovies.css'

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
            allNoms: null,
            maxNoms: false,
            alreadyExists: false
        }
        this.handleNomChange = this.handleNomChange.bind(this);
        this.handleNomRemove = this.handleNomRemove.bind(this);
    }

    componentDidMount() {
        search = this.props.searchTerm;
    }

    componentDidUpdate() {
        if (search === this.props.searchTerm) {
            // TODO add index to nomIndexes for cleaner view
        }
        else {
            search = this.props.searchTerm;
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
            this.setState({ maxNoms: true });
            this.setState({ alreadyExists: false });
        }
    }

    handleNomRemove(event) {

        let tempQuery; // was having issues comparing query so came up with an alternative edit: Definitely not fool-proof so need to fix
        let tempSearch;

        if (this.state.nomOne && event.target.value === this.state.nomOne.key) {
            tempQuery = this.state.nomOne.query.length.toString();
            tempSearch = search.length.toString();
            if (search.includes(this.state.nomOne.query) && tempSearch.includes(tempQuery)) {
                if (nomIndexes.indexOf(this.state.nomOne.index) > -1) {
                    nomIndexes.splice(nomIndexes.indexOf(this.state.nomOne.index), 1);
                }
                this.setState({ nomOne: null });
                nomMovies.splice(nomMovies.indexOf(event.target.value), 1);
                this.setState({ maxNoms: false });
            } else {
                this.setState({ nomOne: null });
                nomMovies.splice(nomMovies.indexOf(event.target.value), 1);
                this.setState({ maxNoms: false });
            }
        }
        else if (this.state.nomTwo && event.target.value === this.state.nomTwo.key) {
            tempQuery = this.state.nomTwo.query.length.toString();
            tempSearch = search.length.toString();
            if (search === this.state.nomTwo.query && tempSearch.includes(tempQuery)) {
                if (nomIndexes.indexOf(this.state.nomTwo.index) > -1) {
                    nomIndexes.splice(nomIndexes.indexOf(this.state.nomTwo.index), 1);
                }
                this.setState({ nomTwo: null });
                nomMovies.splice(nomMovies.indexOf(event.target.value), 1);
                this.setState({ maxNoms: false });
            } else {
                this.setState({ nomTwo: null });
                nomMovies.splice(nomMovies.indexOf(event.target.value), 1);
                this.setState({ maxNoms: false });
            }
        }
        else if (this.state.nomThree && event.target.value === this.state.nomThree.key) {
            tempQuery = this.state.nomThree.query.length.toString();
            tempSearch = search.length.toString();
            if (search === this.state.nomThree.query && tempSearch.includes(tempQuery)) {
                if (nomIndexes.indexOf(this.state.nomThree.index) > -1) {
                    nomIndexes.splice(nomIndexes.indexOf(this.state.nomThree.index), 1);
                }
                this.setState({ nomThree: null });
                nomMovies.splice(nomMovies.indexOf(event.target.value), 1);
                this.setState({ maxNoms: false });
            } else {
                this.setState({ nomThree: null });
                nomMovies.splice(nomMovies.indexOf(event.target.value), 1);
                this.setState({ maxNoms: false });
            }
        }
        else if (this.state.nomFour && event.target.value === this.state.nomFour.key) {
            tempQuery = this.state.nomFour.query.length.toString();
            tempSearch = search.length.toString();
            if (search === this.state.nomFour.query && tempSearch.includes(tempQuery)) {
                if (nomIndexes.indexOf(this.state.nomFour.index) > -1) {
                    nomIndexes.splice(nomIndexes.indexOf(this.state.nomFour.index), 1);
                }
                this.setState({ nomFour: null });
                nomMovies.splice(nomMovies.indexOf(event.target.value), 1);
                this.setState({ maxNoms: false });
            } else {
                this.setState({ nomFour: null });
                nomMovies.splice(nomMovies.indexOf(event.target.value), 1);
                this.setState({ maxNoms: false });
            }
        }
        else if (this.state.nomFive && event.target.value === this.state.nomFive.key) {
            tempQuery = this.state.nomFive.query.length.toString();
            tempSearch = search.length.toString();
            if (search === this.state.nomFive.query && tempSearch.includes(tempQuery)) {
                if (nomIndexes.indexOf(this.state.nomFive.index) > -1) {
                    nomIndexes.splice(nomIndexes.indexOf(this.state.nomFive.index), 1);
                }
                this.setState({ nomFive: null });
                nomMovies.splice(nomMovies.indexOf(event.target.value), 1);
                this.setState({ maxNoms: false });
            } else {
                this.setState({ nomFive: null });
                nomMovies.splice(nomMovies.indexOf(event.target.value), 1);
                this.setState({ maxNoms: false });
            }
        }
        this.setState({ alreadyExists: false });
    }

    render() {
        return (
            <React.Fragment>
                <div class="d-flex flex-row">

                    <div class="card pt-2 pl-2 pr-2 card-set-width">
                        <div class="card-body">
                            {!this.state.maxNoms ? null : <div class="alert alert-info" role="alert">
                                Nominations limit reached (Max 5)
                            </div>}
                            {!this.state.alreadyExists ? null : <div class="alert alert-info" role="alert">
                                Nomination already exists
                            </div>}
                            <h5 class="card-title">{this.props.searchTerm ? 'Results for "' + this.props.searchTerm + '"' : "Nothing has been searched yet..."}</h5>
                            <ul class="list-group">
                                {this.props.movies ? this.props.movies.map(
                                    (movie, index) =>
                                        nomIndexes.includes(index.toString()) ?
                                            <li class="list-group-item list-group-item-light" key={movie.Title}>
                                                <form class="d-flex flex-column m-1">
                                                    <p>{movie.Title} ({movie.Year})</p>
                                                    <button type="button" class="btn btn-secondary btn-set-width" disabled={true}>Nominate</button>
                                                </form>
                                            </li> :
                                            <li class="list-group-item list-group-item-light" key={movie.Title}>
                                                <form class="d-flex flex-column m-1">
                                                    <p>{movie.Title} ({movie.Year})</p>
                                                    <button type="button" class="btn btn-secondary btn-set-width" id={index} value={movie.Title + " (" + movie.Year + ")"} onClick={this.handleNomChange}>Nominate</button>
                                                </form>
                                            </li>
                                ) : null}
                            </ul>
                        </div>
                    </div>
                    <div class="pl-2">
                        <div class="d-flex flex-row">
                            <div class="card pt-2 pl-2 pr-2 card-set-width">
                                <div class="card-body">
                                    <h5 class="card-title">Nominations</h5>
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
                                                    : null
                                        ) : null}
                                    </ul>
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
