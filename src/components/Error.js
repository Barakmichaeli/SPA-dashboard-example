import React, {Component} from 'react';

class Error extends Component {
    render() {
        console.log(this.props.match.params.user);
        return (
            <div className="App">
                Opps...
            </div>
        )
    }
}

export default Error;
