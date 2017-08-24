/**
 * Created by barak on 15/08/2017.
 */
import React, {Component} from 'react';
let firstLoad = true;

class FilterBar extends Component {

    constructor(props){
        super(props);
        firstLoad = true;
    }


    searchForUser(e) {
        this.props.updatePerson(e.target.value);
    }

    componentDidMount(){
        console.log("here!");
        firstLoad = false;
    }

    render() {

        console.log("BAT ZONA")
        console.log(firstLoad);
        console.log(sessionStorage.getItem("filter"));
        return (
            <div className="search-container">
                <p className="filter-text">Filter:</p>

                {(firstLoad && sessionStorage.getItem("filter"))?
                    <input className="filter-text searchBox" type="text"
                           onKeyUp={this.searchForUser.bind(this)}
                           value={(sessionStorage.getItem("filter"))}
                    /> :
                    <input className="filter-text searchBox" type="text" placeholder="ID:###"
                           onKeyUp={this.searchForUser.bind(this)}
                    />
                }

                <button type="button" className="btn btn-secondary add-button" onClick={() => {
                    this.props.changeBar()
                }}>Add

                </button>
            </div>
        );
    }
}
export default FilterBar;
