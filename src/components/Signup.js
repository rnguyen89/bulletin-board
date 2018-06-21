import React from 'react';
import { Button, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import './Signup.css';

export default class Signup extends React.Component {

  render() {
    return (
      <div>
        <form >
          <FormGroup controlId="email" bsSize="large">
            <ControlLabel>Email</ControlLabel>
            <FormControl />
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
            <ControlLabel>Password</ControlLabel>
            <FormControl />
          </FormGroup>
          <FormGroup controlId="confirmPassword" bsSize="large">
            <ControlLabel>Confirm Password</ControlLabel>
            <FormControl />
          </FormGroup>
          <Button
            block
            bsSize="large"
            type="submit"
          >
            Signup
          </Button>
        </form>
      </div>
    );
  }
}