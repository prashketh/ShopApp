import React, { Component } from 'react'
import './nominations.css'

class Nominations extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <React.Fragment>
                <div class="d-flex flex-row">
                    <div class="card pt-2 pl-2 pr-2 card-set-width">
                        <div class="card-body">
                            <h5 class="card-title">Nominations</h5>
                            <ul class="list-group">
                            {this.props.noms ? this.props.noms.map(
                                (nom) =>
                                    nom ?
                                        <li class="list-group-item list-group-item-light">
                                            <form class="d-flex flex-column m-1">
                                            <p>{nom.key}</p>
                                            <button type="button" class="btn btn-secondary btn-set-width">Remove</button>
                                            </form>
                                        </li>

                                        : null
                            ) : null}
                            </ul>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }

}

export default Nominations;
