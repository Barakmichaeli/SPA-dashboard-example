/**
 * Created by barak on 15/08/2017.
 */
import React, {Component} from 'react';
import _ from 'lodash';


class SearchBar extends Component {
    searchForUser(e) {
        this.props.updatePerson(e.target.value);
    }

    render() {
        return (
            <div className="search-container">
                <p className="filter-text">Filter:</p>
                <input className="filter-text searchBox " type="text" placeholder="ID:###" onKeyUp={this.searchForUser.bind(this)}/>
            </div>
        );
    }
}
export default SearchBar;
