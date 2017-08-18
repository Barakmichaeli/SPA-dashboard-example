/**
 * Created by barak on 15/08/2017.
 */

import React, {Component} from 'react';

class PersonRow extends Component {

    render() {
        return (
            <tr id={this.props.person.id} className="table-row" onClick={() => {
                this.props.viewPerson(this.props.person);
            }}>
                <td>{this.props.person.id}</td>
                <td>{this.props.person.name}</td>
                <td>{this.props.person.date}</td>
                <td>{this.props.person.grade}</td>
                <td>{this.props.person.subject}</td>
            </tr>
        )
    }
}

export default PersonRow;

