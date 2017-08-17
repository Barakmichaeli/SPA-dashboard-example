/**
 * Created by barak on 15/08/2017.
 */
import React, {Component} from 'react';
import PersonRow from './PersonRow'

class GridTable extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user: props.currentPerson,
        };

        console.log("Build");
        this.generateTable.bind(this);
    }

    generateTable() {

        let flag = (this.props.currentFilter.length === 0) ? true : false;

        let dataArr = this.props.data;
        console.log("ARR IS");
        console.log(dataArr);

        if (!flag) {
            dataArr = dataArr.filter(person => {
                let num1 = String(person.id);
                let num2 = String(this.props.currentFilter);
                return num1.startsWith(num2)
            })
        }



        //Return an array
        let rowsList = dataArr.map(person => {
            return <PersonRow id={person.id}
                              name={person.name}
                              date={person.date}
                              grade={person.grade}
                              class={person.class}
                              email={person.email}
                              studentID={person.studentID}
                              pass={person.pass}
                              viewPerson={this.props.viewPerson}/>
        });
        return rowsList;
    }

    render() {
        return (
            <div className="table-container">
                <table className="table table-hover">
                    <thead>
                    <tr>
                        <td>ID</td>
                        <td>Name</td>
                        <td>Birth Date</td>
                        <td>Grade</td>
                        <td>Class</td>
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