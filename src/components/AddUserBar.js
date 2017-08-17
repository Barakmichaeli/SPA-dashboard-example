/**
 * Created by barak on 17/08/2017.
 */

import React, {Component} from 'react';


class AddUserBar extends Component {


    submitNewUser() {
        let id = document.getElementsByClassName('id')[0].value;
        let name = document.getElementsByClassName('name')[0].value;
        let grade = document.getElementsByClassName('grade')[0].value;
        let date = document.getElementsByClassName('date')[0].value;
        let userClass = document.getElementsByClassName('class')[0].value;
        let studentID = document.getElementsByClassName('studentID')[0].value;
        let email = document.getElementsByClassName('email')[0].value;
        let pass = document.getElementsByClassName('pass')[0].value;

        let bool = false;

        if (id.length === 0) {
            document.getElementsByClassName('id')[0].style.backgroundColor = "yellow";
            bool = true;
        }else
            document.getElementsByClassName('id')[0].style.backgroundColor = "white";

        if (name.length === 0) {
            document.getElementsByClassName('name')[0].style.backgroundColor = "yellow";
            bool = true;
        }else
            document.getElementsByClassName('name')[0].style.backgroundColor = "white";

        if (grade.length === 0) {
            document.getElementsByClassName('grade')[0].style.backgroundColor = "yellow";
            bool = true;
        }else
            document.getElementsByClassName('grade')[0].style.backgroundColor = "white";

        if (userClass.length === 0) {
            document.getElementsByClassName('class')[0].style.backgroundColor = "yellow";
            bool = true;
        }else
            document.getElementsByClassName('class')[0].style.backgroundColor = "white";

        if (studentID.length === 0) {
            document.getElementsByClassName('studentID')[0].style.backgroundColor = "yellow";
            bool = true;
        }else
            document.getElementsByClassName('studentID')[0].style.backgroundColor = "white";

        if (email.length == 0) {
            document.getElementsByClassName('email')[0].style.backgroundColor = "yellow";
            bool = true;
        }else
            document.getElementsByClassName('email')[0].style.backgroundColor = "white";

        if (pass.length == 0) {
            document.getElementsByClassName('pass')[0].style.backgroundColor = "yellow";
            bool = true;
        }else
            document.getElementsByClassName('pass')[0].style.backgroundColor = "white";


        if (bool)
            return;

        this.props.addPerson({
            id: parseInt(id),
            name: name,
            date: date,
            grade: parseInt(grade),
            class: userClass,
            email: email,
            studentID: studentID
        });

        this.props.changeBar();
    }

    render() {
        return (
            <div className="add-container">
                <button type="button" className="close" aria-label="Close" onClick={()=>{
                    this.props.changeBar();
                }}>
                    <span aria-hidden="true">&times;</span>
                </button>

                <div className="add-box">
                    <p className="add-text">New ID:</p>
                    <input className="id addUser-input" type="text" placeholder="ID:###"/>
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
                    <p className="add-text">Birth Date:</p>
                    <input className="date addUser-input" type="text" placeholder="1.1.2020"/>
                </div>

                <div className="add-box">
                    <p className="add-text">Class:</p>
                    <input className="class addUser-input" type="text" placeholder="Class"/>
                </div>

                <div className="add-box">
                    <p className="add-text">Email:</p>
                    <input className="email addUser-input" type="text" placeholder="email@gmail.com"/>
                </div>
                <div className="add-box">
                    <p className="add-text">Student ID:</p>
                    <input className="studentID addUser-input" type="text" placeholder="STUDENT ID:###"/>
                </div>

                <div className="add-box">
                    <p className="add-text">Password:</p>
                    <input className="pass addUser-input" type="text" placeholder="########"/>
                </div>

                <button type="button" className="btn btn-secondary  addButton" onClick={() => {
                    this.submitNewUser();
                }
                }>Done!
                </button>
            </div>
        );
    }
}
export default AddUserBar;
