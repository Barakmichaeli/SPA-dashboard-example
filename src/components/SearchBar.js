/**
 * Created by barak on 15/08/2017.
 */
import React, {Component} from 'react';
import FilterBar from './FilterBar';
import AddBar from './AddUserBar';

class SearchBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            filter: true
        }
    }

    changeBar() {
        //Our filter bar has 2 states - adding user or filter users.
        // changing the state by boolean flag.
        this.setState({
            filter: !this.state.filter
        })
    }

    render() {
        console.log("render search bar")
        return (
            <div>
                {(this.state.filter) ?
                    <FilterBar changeBar={this.changeBar.bind(this)}
                               updatePerson={this.props.updatePerson}
                               preFilter={this.props.preFilter}/> :
                    <AddBar changeBar={this.changeBar.bind(this)} addPerson={this.props.addPerson}/>
                }
            </div>
        )
    }
}
export default SearchBar;
