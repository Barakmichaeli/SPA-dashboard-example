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
    }

    setNextPage() {
            this.props.setPage("next", this.props.currentPage + 1);
        }

    setPrevPage() {
        this.props.setPage("prev" , this.props.currentPage + 1);
    }


    componentDidUpdate() {
        document.getElementById(this.props.currentPage + 1).style.borderColor = "black ";
    }

    componentDidMount() {
        document.getElementById(this.props.currentPage + 1).style.borderColor = "black ";
    }

    generatePages() {

        let firstPage = 1;

        let lastPage = (this.props.numOfdata < 10) ?
            1 :
            ((this.props.numOfdata - 1) / 10) + 1 ;

        let arr = [];
        for (let i = firstPage; i <= lastPage; i++) {
            arr.push(
                <button id={i}
                        type="button"
                        key={i}
                        className="first-btn lower-btn btn btn-secondary btn-lg"> {i}</button>
            )
        }

        return arr;
    }

    render() {

        let start = (this.props.numOfdata === 0) ? 0 :
            this.props.currentPage * 10 + 1;


        let last = (this.props.numOfdata < this.props.currentPage * 10 + 10) ?
            this.props.numOfdata : this.props.currentPage * 10 + 10;

        return (
            <div className="lower">
                <button id="prev-btn" type="button" className="lower-btn btn btn-secondary btn-lg"
                        onClick={this.setPrevPage.bind(this)}>Prev
                </button>
                <div style={ {display: "inline"}}>

                    {this.generatePages()}

                </div>
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

