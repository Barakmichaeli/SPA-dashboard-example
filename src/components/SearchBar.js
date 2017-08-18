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
        this.setState({
            filter: !this.state.filter
        })
    }

    render() {
        return (
            <div>
                {(this.state.filter) ?
                    <FilterBar changeBar={this.changeBar.bind(this)}
                               updatePerson={this.props.updatePerson}/> :
                    <AddBar changeBar={this.changeBar.bind(this)} addPerson = {this.props.addPerson}/>
                }
            </div>
        )
    }
}
export default SearchBar;
