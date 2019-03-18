import React from 'react'
import { Spring } from 'react-spring/renderprops';
import './Content.css'
import Images from '../../../Assets/pict.jpeg'
import Doktor from '../../../Assets/Dokter.jpeg'
import Imagesss from '../../../Assets/th.jpeg'


import {Col, Row} from 'reactstrap'

export default function Content() {
  return (
    <Spring
        
    from ={{opacity: 0, marginBottom: -10000}}
    to ={{opacity:1, marginBottom: 0}}
    config={{delay: 2000, duration: 1000}}
    >
        {props => (
            <div style={props}>
                <div className="conteints">

                    <h5>Apa kata dokter tentang buah?</h5>
                        
                    <Row>

                        <Col md="4">
                    <div className="card">
                        <p> dokter thomson </p>
                        <center>
                    <img src={Images} className="pict" alt="images" />
                    <li> menyehatkan </li>
                    <li> tubuh bugar </li>
                        <li> pertumbuhan cepat </li>
                        </center>
                    </div>
                       
                       
                        </Col>
                        <Col md="4">
                    <div className="card">
                    <p> dokter rena </p>
                        <center>
                    <img src={Imagesss} className="pict" alt="images" />
                    <li> tubuh menjadi kuat </li>
                    <li> berpikir sehat </li>
                        <li> mencerdaskan otak  </li>
                        </center>
                    </div>
                    </Col>
                    
                    <Col md="4">
                    <div className="card">
                    <p> dokter reina </p>
                    <center>
                    <img src={Doktor} className="pict" alt="images" />
                    <li> sistem imun kebal </li>
                    <li> menyegarkan badan </li>
                        <li> menjernihkan kulit </li>
                        </center>
                    </div>
                    </Col>
                    </Row>

                 </div>

            </div>
        )}
        </Spring>
)
}
