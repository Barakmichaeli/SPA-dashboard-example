import React, {Component} from 'react';
import NavigationBar from './NavigationBar';
import SearchBar from './SearchBar';
import GridTable from './GridTable';
import Details from './Details';
import './nav.css'
let data = require('./Data');


class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            person: '',
            filter: '',
            data: data
        }
    }

    updateFilter(str) {
        this.setState({
            filter: str
        });
    }

    viewPerson(person) {
        this.setState({
            person: person
        })
    }

    deletePerson() {
        let newData = this.state.data.filter((value) => {
            return value.id !== this.state.person.id;
        });

        this.setState({
            data: newData,
            person : ''
        });
    }

    addPerson(person){

        let length = this.state.data.length;
        console.log(length);
        let newData = this.state.data;
        newData[length] = person;

        console.log("Ok in main the arr is");
        console.log(newData)

        this.setState({
            data: newData,
            filter: ''
        });

    }

    render() {
        return (
            <div className="container">
                <NavigationBar/>
                <SearchBar addPerson={this.addPerson.bind(this)} updatePerson={this.updateFilter.bind(this)}/>
                <GridTable data={this.state.data} currentFilter={this.state.filter}
                           viewPerson={this.viewPerson.bind(this)}/>
                <Details currentPerson={this.state.person} deletePerson={this.deletePerson.bind(this)}/>
                <div className="lower">
                    <button type="button" className="btn btn-secondary btn-lg">Previous</button>
                    <button type="button" className="btn btn-secondary btn-lg">Next</button>
                </div>
            </div>
        );
    }
}

export default Main;
