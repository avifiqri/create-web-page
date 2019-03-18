import React, { Component } from 'react'
import './Fruits.css'
import {  Col, Row, NavLink} from 'reactstrap'
import Semangka from './Semangka/Semangka';
import Strowbery from './Strowberry/Strowbery';
import Jeruk from './Jeruk/Jeruk';
import Manggis from './Manggis/Manggis';
import Buahnaga from './Buahnaga/Buahnaga';
import Melon from './Melon/Melon';
import Alpukat from './Alpukat/Alpukat';
import Blimbing from './Blimbing/Blimbing';
import Sirsak from './Sirsak/Sirsak';

export default class Fruits extends Component {

  render() {
    return (
      <div className="ffruits"> 
      <NavLink href="/">
      <p>back </p>
      </NavLink>
        <h3> Mengenal Ragam Manfaat Buah </h3>
      <div className ="Fruits">
            <Row>
            <Col sm="4" >
            <div className=" cardfruits">
                < Sirsak />
              </div>
              </Col>

                <Col sm="4" >
              <div className=" cardfruits">
                <Strowbery />
                </div>
                </Col>

                  <Col sm="4" >
                <div className=" cardfruits">
                  <Semangka />
                  </div>
                  </Col>
                  </Row>

                  <Row>
                    <Col sm="4" >
                  <div className=" cardfruits">
                    <Manggis />
                    </div>
                    </Col>

                        <Col sm="4" >
                      <div className=" cardfruits">
                        <Alpukat />
                        </div>
                        </Col>

                  <Col sm="4" >
                <div className=" cardfruits">
                  <Blimbing />
                  </div>
                  </Col>
                  </Row>

                <Row>
                <Col sm="4" >
              <div className=" cardfruits">
                <Melon />
                </div>
                </Col>

                  <Col sm="4" >
            <div className=" cardfruits">
              <Jeruk/>
              </div>
              </Col>

            <Col sm="4" >
            <div className=" cardfruits">
              <Buahnaga/>
              </div>
              </Col>

              </Row>


              < br />
      </div>
      </div>
    )
  }
}
