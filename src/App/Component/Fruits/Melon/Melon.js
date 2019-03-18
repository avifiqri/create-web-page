import React, { Component } from 'react'

import {NavLink, Button} from 'reactstrap'
import PicMelon from '../../../../Assets/melon.jpeg'

export default class Melon extends Component {
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
                      <h5> Manfaat Melon </h5>
            <img src={PicMelon} alt="text" />
             <br />
            <p> Apa saja manfaat Melon </p>
            <Button color="primary" onClick={this.handleToggle} > Lihat manfaat </Button>
        {
            this.state.dropdown === true ?
                <div>
                    <li>  Kesehatan Jantung </li>
                    <li> Membantu Menyembuhkan Penyakit Ginjal </li>
                    <li> Membantu Menurunkan Berat Badan </li>
                    <li> . . . </li>
               <NavLink href ="https://www.khasiatsehat.com/khasiat-dan-manfaat-buah-melon/">
                <Button color="primary"> lihat manfaat lebih detail</Button>
               </NavLink>
                </div>
                    :null
        }
        
      </div>
    )
  }
}
