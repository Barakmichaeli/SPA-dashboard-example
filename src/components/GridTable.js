/**
 * Created by barak on 15/08/2017.
 */
import React, {Component} from 'react';
import PersonRow from './PersonRow'

class GridTable extends Component {

    constructor(props) {
        super(props);
        this.generateTable.bind(this);
    }

    generateTable() {
        let flag = (this.props.currentFilter.length === 0);
        let startIndex = this.props.currentIndex - 1;
        let end = this.props.stopIndex;
        let dataArr = this.props.data;

        //In case user entered filter id - filter our data
        if (!flag) {
            dataArr = dataArr.filter(person => {
                let num1 = String(person.id);
                let num2 = String(this.props.currentFilter);
                return num1.startsWith(num2)
            })
        } else
            dataArr = this.props.data.slice(startIndex, end);

        let rowsList = dataArr.map(person => {
            return <PersonRow person={person}
                              viewPerson={this.props.viewPerson}/>
        });

        return rowsList;
    }


    render() {

        return (
            <div className="table-container">
                <table className="table table-hover">
                    <thead style={{backgroundColor: "#252525", color: "white"}}>
                    <tr>
                        <td>ID</td>
                        <td>Name</td>
                        <td>Date joined</td>
                        <td>Average Grade</td>
                        <td>Subject</td>
                    </tr>
                    </thead>
                    <tbody className="data-rows">
                    {this.generateTable()}
                    </tbody>
                </table>
            </div>
        )
    }
}
export default GridTable;