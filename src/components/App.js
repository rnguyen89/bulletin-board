import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Nav, Navbar, NavItem } from 'react-bootstrap';
import { LinkContainer } from "react-router-bootstrap";
import Routes from "./Routes";
import './App.css';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar inverse collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              {/* <a href="/Home">Home</a> */}
              <Link to="/Home">Home</Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <LinkContainer to="/Board">
                <NavItem>Board</NavItem>
              </LinkContainer>
              <LinkContainer to="/About">
                <NavItem>About</NavItem>
              </LinkContainer>
            </Nav>
            <Nav pullRight>
            <LinkContainer to="/Signup">
                <NavItem>Signup</NavItem>
              </LinkContainer>
              <LinkContainer to="/Login">
                <NavItem>Login</NavItem>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Routes />
      </div>
    );
  }
}