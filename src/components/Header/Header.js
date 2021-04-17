import React from 'react';
import AboutMe from '../AboutMe/AboutMe'
import Home from '../Home/Home'
import Skills from '../Skills/Skills'
import Contact from '../Contact/Contact';
import Button from '../Button/Button';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './Header.css'

class Header extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <nav>
                        <ul>
                            <li>Andre Stovall</li>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About Me</Link></li>
                            <li><Link to="/skills">Skills</Link></li>
                            <li><Link to="/contact"><Button name="Contact"/></Link></li>
                        </ul>
                    </nav>
                <Switch>
                    <Route path="/" exact={true}><Home /></Route>
                    <Route path="/about"><AboutMe /></Route>
                    <Route path="/skills"><Skills /></Route>
                    <Route path="/contact"><Contact /></Route>
                </Switch>
                </div>
            </Router>     
        )
    }
};

export default Header;