import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import './index.css';
import App from './components/App';

import Board from './components/Board';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Router>    
    <App />
  </Router>, 
  document.getElementById('root'));
registerServiceWorker();

{/* <Board count={25} /> */}