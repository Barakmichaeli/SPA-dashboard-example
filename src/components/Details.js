import React, {Component} from 'react';

class Details extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props);
        return (
            <div className="details-box">
                <p><u>ID:</u> {this.props.currentPerson.id}</p>
                <p><u>Name:</u> {this.props.currentPerson.name}</p>
                <p><u>Grade:</u>{this.props.currentPerson.grade}</p>
                <p><u>Date joined:</u> {this.props.currentPerson.date}</p>
                <p><u>class:</u> {this.props.currentPerson.class}</p>
                <p><u>Email:</u> {this.props.currentPerson.email}</p>
            </div>
        );
    }
}
export default Details;
