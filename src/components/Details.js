import React, {Component} from 'react';

class Details extends Component {


    constructor(props) {
        super(props);
        this.state = {
            mode: "view"
        }
    }


    render() {
        return (
            <div>
                {(this.state.mode === "view") ?
                    <div className="details-box">
                        <p><u>ID: </u> {this.props.currentPerson.id}</p>
                        <p><u>Name: </u> {this.props.currentPerson.name}</p>
                        <p><u>Grade: </u>{this.props.currentPerson.grade}</p>
                        <p><u>Email: </u> {this.props.currentPerson.email}</p>
                        <p><u>Date: </u> {this.props.currentPerson.date}</p>
                        <p><u>Address: </u> {this.props.currentPerson.address}</p>
                        <p><u>City: </u> {this.props.currentPerson.city}</p>
                        <p><u>Country: </u> {this.props.currentPerson.country}</p>
                        <p><u>ZIP: </u> {this.props.currentPerson.zip}</p>
                        <p><u>Subject: </u> {this.props.currentPerson.subject}</p>

                        {(this.props.currentPerson) ?
                            <div className="details-btn">
                                <button type="button" className="remove-btn btn btn-secondary btn-lg" onClick={() => {
                                    this.props.deletePerson()
                                }
                                }>Remove
                                </button>

                                {/*<button type="button" className="remove-btn btn btn-secondary btn-lg" onClick={() => {*/}
                                    {/*this.setState({*/}
                                        {/*mode: "edit"*/}
                                    {/*})*/}
                                {/*}*/}
                                {/*}>Edit*/}
                                {/*</button>*/}
                            </div>
                            : ""
                        }
                    </div>

                    :

                    <div className="details-box">
                        <input className="edit-box" type="text" value={this.props.currentPerson.id}/>
                        <input className="edit-box" type="text" value={this.props.currentPerson.name}/>
                        <input className="edit-box" type="text" value={this.props.currentPerson.grade}/>
                        <input className="edit-box" type="text" value={this.props.currentPerson.email}/>
                        <input className="edit-box" type="text" value={this.props.currentPerson.date}/>
                        <input className="edit-box" type="text" value={this.props.currentPerson.address}/>
                        <input className="edit-box" type="text" value={this.props.currentPerson.city}/>
                        <input className="edit-box" type="text" value={this.props.currentPerson.country}/>
                        <input className="edit-box" type="text" value={this.props.currentPerson.zip}/>
                        <input className="edit-box" type="text" value={this.props.currentPerson.subject}/>

                        <div style={{textAlign: "center"}}>
                            <button style={{display: "inline-block", marginTop: "10px"}} type="button"
                                    className="remove-btn btn btn-secondary btn-lg" onClick={() => {



                            }
                            }> Save
                            </button>

                            <button style={{display: "inline-block", marginTop: "10px"}} type="button"
                                    className="remove-btn btn btn-secondary btn-lg" onClick={() => {
                                this.setState({
                                    mode: 'view'
                                })
                            }
                            }> Back
                            </button>
                        </div>
                    </div>
                }
            </div>
        );
    }
}
export default Details;
