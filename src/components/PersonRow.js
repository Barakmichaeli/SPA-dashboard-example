/**
 * Created by barak on 15/08/2017.
 */

import React, {Component} from 'react';

class PersonRow extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <tr onClick={() =>{
                this.props.viewPerson(this.props);
            }}>
                <td>{this.props.id}</td>
                <td>{this.props.name}</td>
                <td>{this.props.date}</td>
                <td>{this.props.grade}</td>
                <td>{this.props.class}</td>
            </tr>
        )
    }
}

export default PersonRow;