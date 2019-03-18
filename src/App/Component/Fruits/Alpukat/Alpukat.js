import React, { Component } from 'react'

import {NavLink, Button} from 'reactstrap'
import PicAlpukat from '../../../../Assets/Alpukat.jpeg'
export default class Alpukat extends Component {
    constructor(props){
        super(props)
        this.state = {
       
    
          dropdown : false
        } 
        this.handleToggle = this.handleToggle.bind(this)
    
      }
    
        handleToggle(){ 
          this.setState({
            dropdown: !this.state.dropdown 
          })
        }
  render() {
    return (
      <div>
                      <h5> Manfaat Alpukat </h5>
            <img src={PicAlpukat} alt="text" />
             <br />
            <p> Apa saja manfaat Alpukat </p>
            <Button color="primary" onClick={this.handleToggle} > Lihat manfaat </Button>
        {
            this.state.dropdown === true ?
                <div>
                    <li>Kaya akan Nutrisi </li>
                    <li>Kesehatan Mulut</li>
                    <li>Melancarkan Pencernaan</li>
                    <li> . . . </li>
               <NavLink href ="https://www.khasiatsehat.com/manfaat-dan-khasiat-buah-alpukat-untuk-kesehatan/">
                <Button color="primary"> lihat manfaat lebih detail</Button>
               </NavLink>
                </div>
                    :null
        }
        
      </div>
    )
  }
}
