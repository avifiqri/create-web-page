import React, { Component } from 'react'
import Join from '../../../Assets/join.jpeg'
import Pictfruits from '../../../Assets/fruits.jpeg'
import PictAbout from '../../../Assets/abaout.jpeg'

import  {Col, NavLink} from 'reactstrap'
import './Service.css'

export default class Servic extends Component {
  render() {
    return (
        <div className="service">
        <NavLink href="/login">
        <Col md="4">
            <div className="cardservice">
        <img src={Join} alt="text" />
            <section > Dapatkan informasi kesehatan setiap hari </section> 
        </div>
        </Col>
        </NavLink>

        <NavLink href="/fruits">
        <Col md='4'>
        <div className="cardservice">

            <img src={Pictfruits } alt='text' />
            <section> detail manfaat buah</section>
        </div>
        </Col>
        </NavLink>
        
        <NavLink href="/">
        <Col md="4" >
        <div className="cardservice">

            <img src={PictAbout } alt='text' />
            <section> tentang kami</section>
        </div>
        </Col>
        </NavLink>
        </div>
          

    )
  }
}
