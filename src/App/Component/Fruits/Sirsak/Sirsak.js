import React, { Component } from 'react'

import {NavLink, Button} from 'reactstrap'
import PicSirsak from '../../../../Assets/Sirsak.jpeg'

export default class Sirsak extends Component {
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
                      <h5> Manfaat Sirsak </h5>
            <img src={PicSirsak} alt="text" />
             <br />
            <p> Apa saja manfaat Sirsak </p>
            <Button color="primary" onClick={this.handleToggle} > Lihat manfaat </Button>
        {
            this.state.dropdown === true ?
                <div>
                    <li> Membantu Mengatasi Gangguan Pernapasan </li>
                    <li>Kesehatan Saluran Pencernaan</li>
                    <li>Mencegah Osteoporosis</li>
                    <li> . . . </li>
               <NavLink href =" https://www.khasiatsehat.com/khasiat-dan-manfaat-buah-sirsak/">
                <Button color="primary"> lihat manfaat lebih detail</Button>
               </NavLink>
                </div>
                    :null
        }
        
      </div>
    )
  }
}
