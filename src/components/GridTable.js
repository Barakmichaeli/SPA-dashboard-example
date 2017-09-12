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

        let page = this.props.currentPage; //1
        let startSlice = page * 10; // 10
        let end = startSlice + 10; // 20
        if(this.props.data.length < end)
            end = this.props.data.length; // end = 17

        let dataArr = this.props.data.slice(startSlice, end);

        return dataArr.map(person => {
            return <PersonRow person={person}
                              key={person.id}
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