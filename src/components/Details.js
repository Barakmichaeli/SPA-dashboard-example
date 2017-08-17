import React, {Component} from 'react';

class Details extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="details-box">
                <p><u>ID:</u> {this.props.currentPerson.id}</p>
                <p><u>Name:</u> {this.props.currentPerson.name}</p>
                <p><u>Grade:</u>{this.props.currentPerson.grade}</p>
                <p><u>Birth Date:</u> {this.props.currentPerson.date}</p>
                <p><u>class:</u> {this.props.currentPerson.class}</p>
                <p><u>Email:</u> {this.props.currentPerson.email}</p>
                <p><u>Student ID:</u> {this.props.currentPerson.studentID}</p>
                <p><u>Password:</u> {this.props.currentPerson.pass}</p>
                {(this.props.currentPerson) ?
                    <button type="button" className="btn btn-secondary btn-lg" onClick={() => {
                        this.props.deletePerson()
                    }
                    }>Remove user</button>
                    : ""
                }
            </div>
        );
    }
}
export default Details;
