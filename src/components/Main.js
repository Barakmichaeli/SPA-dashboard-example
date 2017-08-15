import React, {Component} from 'react';
import NavigationBar from './NavigationBar';
import SearchBar from './SearchBar';
import GridTable from './GridTable';
import Details from './Details';
import './nav.css'
class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            person: '',
            filter :''
        }
    }

    updateFilter(str) {
        this.setState({
            filter: str
        });
    }

    viewPerson(person){
        this.setState({
        person : person
        })
    }

    render() {
        return (
            <div className="container">
                <NavigationBar/>
                <SearchBar updatePerson={this.updateFilter.bind(this)}/>
                <GridTable currentFilter={this.state.filter} viewPerson={this.viewPerson.bind(this)}/>
                <Details currentPerson = {this.state.person} />
                <div className="lower">
                    <button type="button" className="btn btn-secondary btn-lg">Previous</button>
                    <button type="button" className="btn btn-secondary btn-lg">Next</button>
                </div>
            </div>
        );
    }
}

export default Main;
