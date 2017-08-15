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
        let arr = [
            {
                id: 204386882,
                name: "Barak",
                date: "1.1.2020",
                grade: 85,
                class: "Algebra",
                email: "Barak@gmail.com"
            }, {
                id: 204685882,
                name: "Guy",
                date: "1.1.1992",
                grade: 80,
                class: "Singing",
                email: "guy@gmail.com"
            }, {
                id: 204548223,
                name: "Alon",
                date: "3.2.1992",
                grade: 82,
                class: "Visual reality",
                email: "Alon@gmail.com"
            }
        ];

        let flag = (this.props.currentFilter.length === 0) ? true : false;

        if (!flag) {
            arr = arr.filter(person => {
                let num1 = String(person.id);
                let num2 = String(this.props.currentFilter);
                return num1.startsWith(num2)
            })
        }

        //Return an array
        let rowsList = arr.map(person => {
            return <PersonRow id={person.id}
                              name={person.name}
                              date={person.date}
                              grade={person.grade}
                              class={person.class}
                              email={person.email}
                              viewPerson={this.props.viewPerson}/>
        });
        console.log(rowsList);
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
                        <td>Date</td>
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