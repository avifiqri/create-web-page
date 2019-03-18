import React, { Component } from 'react'
import {NavLink, Button} from 'reactstrap'
import Pictstrowbery from '../../../../Assets/strowbery.jpeg'


export default class Strowbery extends Component {
    constructor(props) {
        super(props)
        this.state ={
       
  
          dropdownstorbery : false
        } 
        this.handleToggle = this.handleToggle.bind(this)
  
      }
  
        handleToggle(){ 
          this.setState({
            dropdownstorbery: !this.state.dropdownstorbery 
          })
        }
    render() {
    return (
      <div className="Strowbery">
                 <h5> Manfaat Strowbery </h5>
            <img src={Pictstrowbery} alt="text" />
             <br />
            <p> Apa saja manfaat Strowbery </p>
            <Button color="primary" onClick={this.handleToggle} > Lihat manfaat </Button>
        {
            this.state.dropdownstorbery === true ?
                <div>
                    <li> Menjaga Kesehatan Mata </li>
                    <li> Menjaga kesehatan sistem pencernaan</li>
                    <li> Anti-inflamasi</li>
                    <li> . . . </li>
               <NavLink href =" http://manfaatbuahkesehatan.blogspot.com/2014/11/26-manfaat-strawberry-untuk-kesehatan.html ">
                <Button color="primary"> lihat manfaat lebih detail</Button>
               </NavLink>
                </div>
                    :null
        }
        
      </div>
    )
  }
}
