import React from 'react';
import TopNav from './TopNav';
import { Jumbotron } from 'react-bootstrap';

import './Home.css';


const Home = () => (
  <div className="main-bg">
    <Jumbotron>
      <h1>Hello, world!</h1>
        <p>This is a simple hero unit, a simple jumbotron-style component for calling
        extra attention to featured content or information.</p>
    </Jumbotron>;
  </div>
)

export default Home;

