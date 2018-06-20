import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Home from './Home';
import Board from './Board';
import TopNav from './TopNav';


// import './app.css';

export default function App(props) {
    return (
        <Router>
            <div className="app">
                <header>
                <TopNav />
                    <h1><Link to="/">Bulletin Board</Link></h1>
                </header>
                <main>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/board/:boardId" component={Board} />
                </main>
            </div>
        </Router>
    );
}
