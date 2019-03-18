import React, { Component } from 'react'
import './Daftar.css'
import {NavLink} from 'react-router-dom'
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';
export default class Daftar extends Component {
  render() {
    return (
      <div className="pendaftar">
        <Form>
          <Row>
          <Col md={6}>
            <FormGroup>
              <Label>Username :</Label>
              <Input type="text" name="text" id="text" placeholder="Enter your Username. ." /> <br />
            </FormGroup>
          </Col>
          </Row>
          <Row>
          <Col md={6}>
            <FormGroup>
              <Label for="Email">Email :</Label>
              <Input type="email" name="email" id="Email" placeholder="Enter your Email. ." /><br />
            </FormGroup>
          </Col>
          </Row>
          <Row>
          <Col md={6}>
            <FormGroup>
              <Label >Password :</Label>
              <Input type="password" name="password" id="password" placeholder="Enter your Password. ." /><br />
            </FormGroup>
          </Col>
          </Row>
          <Row>
          <Col md={6}>
            <FormGroup>
              <Label >Re-Password :</Label>
              <Input type="password" name="password" id="password" placeholder="Enter your Re-Password. ." />
            </FormGroup>
          </Col>
            </Row>
              <Row>
                <NavLink to= "/">
                  <Button color="primary">

                   Create Account </Button>
                </NavLink>
                </Row>

          </Form>

        
      </div>
    )
  }
}
