/**
 * Created by barak on 17/08/2017.
 */

import React, {Component} from 'react';


class AddUserBar extends Component {


    submitNewUser() {
        let id = document.getElementsByClassName('id')[0].value;
        let name = document.getElementsByClassName('name')[0].value;
        let grade = document.getElementsByClassName('grade')[0].value;
        let date = (new Date()).toDateString();
        let subject = document.getElementsByClassName('subject')[0].value;
        let email = document.getElementsByClassName('email')[0].value;
        let address = document.getElementsByClassName('address')[0].value;
        let country = document.getElementsByClassName('country')[0].value;
        let city = document.getElementsByClassName('city')[0].value;
        let zip = document.getElementsByClassName('zip')[0].value;

        let bool = false;

        if (id.length !== 9 || !(/^[0-9]+$/.test(id))) {
            document.getElementsByClassName('id')[0].style.borderColor = "red";
            bool = true;
        } else
            document.getElementsByClassName('id')[0].style.borderColor = "white";

        if (name.length === 0) {
            document.getElementsByClassName('name')[0].style.borderColor = "red";
            bool = true;
        } else
            document.getElementsByClassName('name')[0].style.borderColor = "white";

        if (grade.length === 0) {
            document.getElementsByClassName('grade')[0].style.borderColor = "red";
            bool = true;
        } else
            document.getElementsByClassName('grade')[0].style.borderColor = "white";

        if (subject.length === 0) {
            document.getElementsByClassName('subject')[0].style.borderColor = "red";
            bool = true;
        } else
            document.getElementsByClassName('subject')[0].style.borderColor = "white";

        if (email.length === 0) {
            document.getElementsByClassName('email')[0].style.borderColor = "red";
            bool = true;
        } else
            document.getElementsByClassName('email')[0].style.borderColor = "white";

        if (country.length === 0) {
            document.getElementsByClassName('country')[0].style.borderColor = "red";
            bool = true;
        } else
            document.getElementsByClassName('country')[0].style.borderColor = "white";

        if (city.length === 0) {
            document.getElementsByClassName('city')[0].style.borderColor = "red";
            bool = true;
        } else
            document.getElementsByClassName('city')[0].style.borderColor = "white";

        if (bool)
            return;

        this.props.addPerson({
            id: parseInt(id,10),
            name: name,
            date: date,
            grade: parseInt(grade, 10),
            subject: subject,
            email: email,
            address: address,
            city: city,
            country: country,
            zip: zip
        });

        this.props.changeBar();
    }

    render() {

        return (
            <div className="add-container">
                <button type="button" className="close" aria-label="Close" onClick={() => {
                    this.props.changeBar();
                }}>
                    <span aria-hidden="true">&times;</span>
                </button>

                <div className="add-box">
                    <p className="add-text">New ID:</p>
                    <input className="id addUser-input" type="text" placeholder="8 Letters & security code"/>
                </div>

                <div className="add-box">
                    <p className="add-text">Name:</p>
                    <input className="name addUser-input" type="text" placeholder="Name"/>
                </div>

                <div className="add-box">
                    <p className="add-text">AVG Grade:</p>
                    <input className="grade addUser-input" type="text" placeholder="##"/>
                </div>

                <div className="add-box">
                    <p className="add-text">Subject:</p>
                    <input className="subject addUser-input" type="text" placeholder="Subject"/>
                </div>

                <div className="add-box">
                    <p className="add-text">Email:</p>
                    <input className="email addUser-input" type="text" placeholder="email@gmail.com"/>
                </div>
                <div className="add-box">
                    <p className="add-text">Address:</p>
                    <input className="address addUser-input" type="text" placeholder="Subject ID:###"/>
                </div>

                <div className="add-box">
                    <p className="add-text">Country:</p>
                    <input className="country addUser-input" type="text" placeholder="########"/>
                </div>

                <div className="add-box">
                    <p className="add-text">City:</p>
                    <input className="city addUser-input" type="text" placeholder="########"/>
                </div>

                <div className="add-box">
                    <p className="add-text">Zip:</p>
                    <input className="zip addUser-input" type="text" placeholder="ZIP CODE"/>
                </div>


                <button type="button" className="btn btn-secondary  addButton" onClick={() => {
                    this.submitNewUser();
                }
                }>Add
                </button>
            </div>
        );
    }
}
export default AddUserBar;
