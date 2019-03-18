import React, { Component } from 'react'
import { Spring } from 'react-spring/renderprops';
import './Childheader.css'

export default class Childheaders extends Component {

    render() {
    return (
        <Spring
        from ={{opacity: 0, marginRight: -500}}
        to ={{opacity:1, marginRight: 0}}
        config={{duration: 1000}}
        >
        {props => (
            <div style={props}>
            <h4 className="hapat"> Sudah kah anda Makan Buah hari ini</h4>
            </div>
        )}
            
        </Spring>
    )
  }
}
