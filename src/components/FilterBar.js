/**
 * Created by barak on 15/08/2017.
 */
import React, {Component} from 'react';


class FilterBar extends Component {

    searchForUser(e) {
        this.props.updatePerson(e.target.value);
    }

    render() {
        return (
            <div className="search-container">
                <p className="filter-text">Filter:</p>
                <input className="filter-text searchBox" type="text" placeholder="ID:###"
                       onKeyUp={this.searchForUser.bind(this)}/>
                <button type="button" className="btn btn-secondary add-button" onClick={() => {
                    this.props.changeBar()
                }}>Add another user
                </button>


            </div>
        );
    }
}
export default FilterBar;
