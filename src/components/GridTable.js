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
        let startIndex = this.props.currentIndex - 1;
        let end = this.props.stopIndex;
        let dataArr = this.props.data.slice(startIndex, end);

        return dataArr.map(person => {
            return <PersonRow person={person}
                              viewPerson={this.props.viewPerson}/>
        });
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