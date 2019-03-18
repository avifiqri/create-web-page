import React, { Component } from 'react'
import Gambar from '../../Assets/gambar.jpeg'
import {Spinner} from 'reactstrap'
import './Disable.css'
export default class Disable extends Component {
  render() {
    return (
      <div className =" disable">
        <img src={Gambar} alt="text" />
            <center><h1> Page Not Found</h1></center>
                <Spinner color="danger" />
      </div>
    )
  }
}
