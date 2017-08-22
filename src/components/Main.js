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

        let localData = (sessionStorage.getItem("currentIndex")) ? JSON.parse(sessionStorage.getItem("data")) : data;
        let size = (localData.length < 10) ? localData.length : 10;
        //Check if our session objecr is defined , if it does
        let obj = (sessionStorage.getItem("currentIndex")) ?
            {
                person: JSON.parse(sessionStorage.getItem("person")),
                filter: sessionStorage.getItem("filter"),
                data: JSON.parse(sessionStorage.getItem("data")),
                currentIndex: JSON.parse(sessionStorage.getItem("currentIndex")),
                stopIndex: JSON.parse(sessionStorage.getItem("stopIndex")),
                currentPage: JSON.parse(sessionStorage.getItem("currentPage")),
            } : {
                person: '',
                filter: '',
                data: data,
                currentIndex: 1,
                stopIndex: size,
                currentPage: 1
            };

        this.state = obj;
    }


    updateFilter(str) {
        //In case user entered filter id - filter our data
        let dataArr = data.filter(person => {
            let num1 = String(person.id);
            let num2 = String(str);
            return num1.startsWith(num2)
        });

        let start = (dataArr.length !== 0) ? 1 : 0;
        let stop = (dataArr.length > 10) ? 10 : dataArr.length;

        console.log(start)
        console.log(stop)

        this.setState({
            filter: str,
            currentIndex: start,
            stopIndex: stop,
            data: dataArr
        });
    }

    viewPerson(person) {
        this.setState({
            person: person
        })
    }

    deletePerson() {

        //Delete of i
        // instances of selected person
        data = data.filter((value) => {
            return value.id !== this.state.person.id;
        });

        //If current index and stop index are equals and we need to jump back in table
        if (this.state.stopIndex === (this.state.currentIndex)) {
            //after deleting we got an empty table
            if (this.state.stopIndex === 1) {
                this.setState({
                    data: [],
                    person: '',
                    currentIndex: 0,
                    stopIndex: 0,
                    currentPage: 1
                })
            }
            else {
                //Jump one page back automaticlly
                console.log("here" + this.state.currentPage);
                this.setState({
                    data: data,
                    person: '',
                    currentIndex: this.state.currentIndex - 10,
                    stopIndex: this.state.stopIndex - 1,
                    currentPage: (this.state.currentPage === 1) ?
                        1 :
                        this.state.currentPage - 1
                });
            }
        }
        else {
            //re render the same page without the deleted person
            let len = data.length;
            let index = this.state.stopIndex;
            let num = (len >= index) ?
                this.state.stopIndex : this.state.stopIndex - 1;


            this.setState({
                data: data,
                person: '',
                stopIndex: num,
                currentPage: this.state.currentPage
            });
        }
    }

    addPerson(person) {

        //Assume no duplicate ID - May cause problems.
        let newData = [person];

        //Add the new member at the beggining of the data;
        if (this.state.data.length !== 0)
            data = newData.concat(data);

        //Case of inserting first member
        if (this.state.stopIndex === 0)
            this.setState({
                data: data,
                filter: '',
                currentIndex: 1,
                stopIndex: 1
            });
        else {
            let num = (this.state.stopIndex - this.state.currentIndex === 9) ?
                this.state.stopIndex : (this.state.stopIndex + 1);
            this.setState({
                data: data,
                filter: '',
                stopIndex: num
            });
        }
    }

    setPage(str) {

        //Move to next page
        if (str === "next") {
            let num = (this.state.currentIndex + 19 > this.state.data.length) ?
                this.state.data.length :
                this.state.currentIndex + 19;

            this.setState({
                currentIndex: this.state.currentIndex + 10,
                stopIndex: num,
                person: '',
                currentPage: this.state.currentPage + 1

            })
        } else {
            //Move to Prev page
            this.setState({
                currentIndex: this.state.currentIndex - 10,
                stopIndex: this.state.currentIndex - 1,
                person: '',
                currentPage: this.state.currentPage - 1
            })
        }
    }

    componentDidUpdate() {
        sessionStorage.setItem("person", JSON.stringify(this.state.person));
        sessionStorage.setItem("filter", this.state.filter);
        sessionStorage.setItem("data", JSON.stringify(this.state.data));
        sessionStorage.setItem("currentIndex", JSON.stringify(this.state.currentIndex));
        sessionStorage.setItem("stopIndex", JSON.stringify(this.state.stopIndex));
        sessionStorage.setItem("currentPage", JSON.stringify(this.state.currentPage));
    }

    render() {
        return (
            <div className="container">
                <SearchBar preFilter={this.state.filter} addPerson={this.addPerson.bind(this)}
                           updatePerson={this.updateFilter.bind(this)}/>
                <GridTable currentIndex={this.state.currentIndex}
                           stopIndex={this.state.stopIndex}
                           data={this.state.data}
                           currentFilter={this.state.filter}
                           viewPerson={this.viewPerson.bind(this)}/>
                <Details currentPerson={this.state.person} deletePerson={this.deletePerson.bind(this)}/>
                <Pagination currentIndex={this.state.currentIndex}
                            lastIndex={this.state.stopIndex}
                            currentPage={this.state.currentPage}
                            numOfdata={this.state.data.length}
                            setPage={this.setPage.bind(this)}/>
            </div>
        );
    }
}

export default Main;
