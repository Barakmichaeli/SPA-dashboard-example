/**
 * Created by barak on 17/08/2017.
 */

import React, {Component} from 'react';

class Pagination extends Component {

    constructor(props) {
        super(props);
        this.state = {
            firstLoading: true
        };
        this.setBorderColor.bind(this);
    }

    setBorderColor() {
        console.log(this.props.currentPage);
        document.getElementById(this.props.currentPage).style.borderColor = "black ";
    }

    setNextPage() {
        //End of data dont go forward
        if (this.props.lastIndex === this.props.numOfdata)
            return;

        //Paint the appropriate number in pagination and update the page
        if (this.props.lastIndex % 10 === 0) {
            document.getElementById(this.props.currentPage).style.borderColor = "";
            this.setState({
                currentPage: this.state.currentPage + 1,
            });
            this.props.setPage("next");
        }

    }

    setPrevPage() {

        //Currently on the first page - dont move backwards
        if (this.props.currentIndex <= 1) {
            return;
        }

        document.getElementById(this.props.currentPage).style.borderColor = "";
        this.props.setPage("prev");
    }


    componentDidUpdate() {
        //Set color to the current page each time re rendered.
        if (this.props.numOfdata === 0)
            return;
        this.setBorderColor(this.props.currentPage);
    }

    componentDidMount() {
        document.getElementById(this.props.currentPage).style.borderColor = "black ";
    }

    render() {
        let start, last;
        start = (this.props.numOfdata === 0) ? 0 : this.props.currentIndex;
        switch (this.props.numOfdata) {
            case 0 :
                last = 0;
                break;
            default :
                last = this.props.lastIndex;
        }
        return (
            <div className="lower">
                <button id="prev-btn" type="button" className="lower-btn btn btn-secondary btn-lg"
                        onClick={this.setPrevPage.bind(this)}>Prev
                </button>
                {(this.props.numOfdata > 10 ) ?
                    <div style={ {display: "inline"}}>
                        {(this.state.firstLoading) ?
                            <button id="1" type="button"
                                    className="first-btn lower-btn btn btn-secondary btn-lg"> {1}</button> :
                            <button id="1" type="button"
                                    className="first-btn lower-btn btn btn-secondary btn-lg"
                            > {1}</button>}
                        <button id="2" type="button"
                                className="lower-btn btn btn-secondary btn-lg">{2}</button>
                        {(this.props.numOfdata > 20) ?
                            <button id="3" type="button"
                                    className="lower-btn btn btn-secondary btn-lg">{3}</button> :
                            ""
                        }
                    </div>
                    :
                    <button id="1" type="button"
                            className="next first-btn lower-btn btn btn-secondary btn-lg"> {1} </button>
                }
                <button id="next-btn" type="button" className="lower-btn btn btn-secondary btn-lg"
                        onClick={this.setNextPage.bind(this)}>Next
                </button>
                <p>Showing results {start} - {last} of {this.props.numOfdata}</p>
            </div>
        )
    }
}

export
default
Pagination;

