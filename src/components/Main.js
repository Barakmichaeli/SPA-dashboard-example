import React, {Component} from 'react';
import SearchBar from './SearchBar';
import GridTable from './GridTable';
import Pagination from './Pagination';
import Details from './Details';
import '../styles/nav.css'
let data = require('./Data');


class Main extends Component {

    constructor(props) {
        super(props);

        // let stateData = (sessionStorage.getItem("currentIndex")) ? JSON.parse(sessionStorage.getItem("data")) : data;

        let obj = (sessionStorage.getItem("currentPage")) ?
            {
                //initialize by session
                person: JSON.parse(sessionStorage.getItem("person")),
                filter: sessionStorage.getItem("filter"),
                currentPage: JSON.parse(sessionStorage.getItem("currentPage")),
            } : {
                //First login = session not initialized
                person: '',
                filter: '',
                currentPage: 0
            };

        this.state = obj;
    }

    addPerson(person) {

        //Assume no duplicate ID - May cause problems.
        let newData = [person];
        data = newData.concat(data);

        //STAY IN THE SAME PAGE !!
        this.setState({
            filter: '',
            person: '',
        });
    }

    updateFilter(str) {

        this.setState({
            filter: str,
            currentPage: 0
        });
    }

    viewPerson(person) {
        this.setState({
            person: person
        })
    }


    deletePerson() {
        // Delete instances from the original data!
        data = data.filter((value) => {
            return value.id !== this.state.person.id;
        });


        let usedData = this.getData();
        let page = this.state.currentPage;

        // empty
        if (usedData.length === 0) {
            this.setState({
                person: '',
                filter: this.state.filter,
                currentPage: 0
            });
            return;
        }

        // jump back in page
        // page >= 1
        if (usedData.length === (page * 10)) {
            document.getElementById(this.state.currentPage + 1).style.borderColor = "";
            this.setState({
                person: '',
                filter: this.state.filter,
                currentPage: page - 1
            });
            return;
        }


        //just remove and same page
        this.setState({
            person: '',
            filter: this.state.filter
            //current page the same
        })


    }


    setPage(str, pageBorder) {

        let usedData = this.getData();
        let page = this.state.currentPage;


        if (str === "next") {
            if (((page * 10) + 10 ) > usedData.length) {
                return;
            }
            document.getElementById(pageBorder).style.borderColor = "";

            this.setState({
                person: '',
                filter: this.state.filter,
                currentPage: this.state.currentPage + 1
            })
        } else {
            // Previous page
            if (page === 0)
                return;

            document.getElementById(pageBorder).style.borderColor = "";
            this.setState({
                person: '',
                filter: this.state.filter,
                currentPage: this.state.currentPage - 1
            })
        }
    }


    getData() {

        if (this.state.filter.length > 0) {
            return data.filter(person => {
                let str = String(person.id);
                return str.startsWith(this.state.filter);
            })
        }
        return data;
    }

    editPerson(person){






    }

    componentDidUpdate() {

        sessionStorage.setItem("person", JSON.stringify(this.state.person));
        sessionStorage.setItem("filter", this.state.filter);
        sessionStorage.setItem("currentPage", JSON.stringify(this.state.currentPage));
    }

    render() {

        let renderData = this.getData();

        return (
            <div className="container">
                <SearchBar preFilter={this.state.filter} addPerson={this.addPerson.bind(this)}
                           updatePerson={this.updateFilter.bind(this)}/>
                <GridTable currentPage={this.state.currentPage}
                           data={renderData}
                           viewPerson={this.viewPerson.bind(this)}/>
                <Details currentPerson={this.state.person}
                         deletePerson={this.deletePerson.bind(this)}
                         editPerson={this.editPerson.bind(this)}/>
                <Pagination currentPage={this.state.currentPage}
                            numOfdata={renderData.length}
                            setPage={this.setPage.bind(this)}/>
            </div>
        );
    }
}

export default Main;
