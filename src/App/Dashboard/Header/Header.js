import React, { Component } from 'react'
import { Spring } from 'react-spring/renderprops';
import './Header.css'
import Picture from '../../../Assets/buah1.jpeg'
import {Col, Row} from 'reactstrap'

export default class Header extends Component {
  render() {
    return (
        <Spring 
        from ={{opacity: 0, marginLeft: -1000}}
        to ={{opacity: 1, marginLeft: 0}}
        config ={{duration:1000}}
        >
        {props => (
            <div style={props}>
          <Row>
            <Col md={6} >
                <img src={Picture} alt="text" className="images" />
                </Col>
              <Col md={6}>
                 <div className ="headerterss">
                  <h4> SUDAH MAKAN BUAH HARI INI</h4>
                  </div>
            </Col>
            </Row>
            </div>
        )}

      
      </Spring>
          
    )
  }
}
