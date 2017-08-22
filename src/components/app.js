import React, {Component} from 'react';
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom'
import NavigationBar from './NavigationBar';
import Main from './Main';
import Error from './Error';

class App extends Component {
    render() {
        //On refresh or first login we will clear the session.
        sessionStorage.clear();
        return (
            <BrowserRouter>
                <div className="container">
                    <NavigationBar/>
                    <Switch>
                        <Route exact path="/data" component={Main}/>
                        <Route exact path="/" component={Main}/>
                        <Route exact path="/analysis" component={Error}/>
                        <Route path="/monitor" component={Error}/>
                        <Redirect from="*" to="/data"/>
                </Switch>
                </div>
            </BrowserRouter>
        )
    }
}

export default App;
