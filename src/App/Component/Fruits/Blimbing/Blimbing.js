import React, { Component } from 'react'

import {NavLink, Button} from 'reactstrap'
import PicBlimbing from '../../../../Assets/Blimbing.jpeg'

export default class Blimbing extends Component {
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
                      <h5> Manfaat Blimbing </h5>
            <img src={PicBlimbing} alt="text" />
             <br />
            <p> Apa saja manfaat blimbing </p>
            <Button color="primary" onClick={this.handleToggle} > Lihat manfaat </Button>
        {
            this.state.dropdown === true ?
                <div>
                    <li>Sebagai Antikanker </li>
                    <li>Sebagai Anti Inflamasi</li>
                    <li> Meningkatkan Daya Tahan Tubuh</li>
                    <li> . . . </li>
               <NavLink href ="https://www.khasiatsehat.com/khasiat-dan-manfaat-buah-belimbing-untuk-kesehatan/">
                <Button color="primary"> lihat manfaat lebih detail</Button>
               </NavLink>
                </div>
                    :null
        }
        
      </div>
    )
  }
}
