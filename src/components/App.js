import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Home from './Home';
import Board from './Board';
import About from './About';

import TopNav from './TopNav';


// import './app.css';

export default function App(props) {
    return (
        <Router>
            <div className="app">
                <header>
                <TopNav />
                </header>
                <main>
                    <Route exact path="/Home" component={Home} />
                    <Route exact path="/board" component={Board} />
                    <Route exact path="/About" component={About} />

                </main>
            </div>
        </Router>
    );
}
