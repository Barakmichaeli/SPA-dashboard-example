import React, {Component} from 'react';

class Details extends Component {

    render() {
        return (
            <div className="details-box">
                <p><u>ID:</u> {this.props.currentPerson.id}</p>
                <p><u>Name:</u> {this.props.currentPerson.name}</p>
                <p><u>Grade:</u>{this.props.currentPerson.grade}</p>
                <p><u>Email:</u> {this.props.currentPerson.email}</p>
                <p><u>Date Joined:</u> {this.props.currentPerson.date}</p>
                <p><u>Address:</u> {this.props.currentPerson.address}</p>
                <p><u>City:</u> {this.props.currentPerson.city}</p>
                <p><u>Country:</u> {this.props.currentPerson.country}</p>
                <p><u>ZIP:</u> {this.props.currentPerson.zip}</p>
                <p><u>Subject</u> {this.props.currentPerson.subject}</p>

                {(this.props.currentPerson) ?
                    <div className="details-btn">
                        <button type="button" className="remove-btn btn btn-secondary btn-lg" onClick={() => {
                            this.props.deletePerson()
                        }
                        }>Remove
                        </button>
                    </div>
                    : ""
                }

            </div>
        );
    }
}
export default Details;
