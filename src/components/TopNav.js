import React from 'react';
import { Nav, Navbar, NavItem } from 'react-bootstrap';
import { LinkContainer } from "react-router-bootstrap";
import {Link} from 'react-router-dom';


import FaPlus from 'react-icons/lib/fa/plus';

class TopNav extends React.Component {

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
              <NavItem eventKey={2} href="#">
                Link
              </NavItem>
            </Nav>
            <Nav pullRight>
              <LinkContainer to="/About">
                <NavItem>About</NavItem>
              </LinkContainer>
              <LinkContainer to="/Login">
                <NavItem>Login</NavItem>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    )
  };
};

export default TopNav
