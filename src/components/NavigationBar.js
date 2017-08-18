import React from 'react';
import {Link} from 'react-router-dom'
// import Error from './Error'
// import './nav.css'

class NavigationBar extends React.Component {
    render() {
        return (
            <div className="nav">
                <nav className="navbar navbar-inverse bg-inverse">
                    <ul className="nav navbar-nav">
                        <li className="nav-item">
                            <Link to={"/data"} onClick={()=>{
                                window.location.reload();
                            }} className="nav-link"> Data </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"/analysis"} className="nav-link"> Analysis </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"/Monitor"} className="nav-link"> Monitor </Link>
                        </li>
                    </ul>
                </nav>
                {/*<Route path={"/bizzabo/:user"} component={Error}/>*/}
            </div>
        );
    }
}

export default NavigationBar;