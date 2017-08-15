import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Main from './Main';
import Error from './Error';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/bizza" component={Main}/>
                    <Route path="*" component={Error}/>
                </Switch>
            </BrowserRouter>
        )
    }
}

export default App;
