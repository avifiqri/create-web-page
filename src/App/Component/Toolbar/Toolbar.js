import React, { Component } from 'react'
import './Toolbaar.css'
// import {NavLink} from 'react-router-dom'
import Buah from '../../../Assets/buah.jpeg'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  } from 'reactstrap';
  

export default class Toolbar extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div className="Toolbar">
        <Navbar color="golden" light expand="md">
          <NavbarBrand href="/">
            <img src={Buah} alt="text" className="logo" />
          <h3>Health Fruit</h3></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
            <NavItem>
                <NavLink href="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/fruits/">Fruits</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/login/">Follow</NavLink>
              </NavItem>
            
            
            </Nav>
          </Collapse>
        </Navbar>
            
          
      </div>
    )
  }
}

 
     
