import React, { Component } from 'react'
import './Login.css'
import {Container, Col ,Button,  InputGroup, Input } from 'reactstrap'
import {NavLink} from 'react-router-dom'
export default class Login extends Component {

    render() {

    return (
    <div className="loginnes">
        <div className="login">
    <Container>
        <InputGroup>
            <Col md={6}>
                <Input placeholder="Enter your name" /> 
                    <br />
                <Input placeholder="Enter your password" /> 
            </Col>
        </InputGroup>
            <br />
            <NavLink to='/'>
                <Button color="primary" >
                    Login
                </Button>< br />
                </NavLink>
                <p> Belum punya akun </p>
                <NavLink to= "/daftar">
                <mark> klik here</mark>
                </NavLink>
        </Container>
            </div>
        </div>
    )
  }
}
