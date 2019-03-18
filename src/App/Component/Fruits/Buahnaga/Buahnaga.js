import React, { Component } from 'react'

import {NavLink, Button} from 'reactstrap'
import PicNaga from '../../../../Assets/naga.jpeg'

export default class Buahnaga extends Component {
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
                      <h5> Manfaat Buah naga </h5>
            <img src={PicNaga} alt="text" />
             <br />
            <p> Apa saja manfaat buah naga </p>
            <Button color="primary" onClick={this.handleToggle} > Lihat manfaat </Button>
        {
            this.state.dropdown === true ?
                <div>
                    <li>Mengobati jerawat </li>
                    <li>Menjaga kebugaran tubuh</li>
                    <li> Menjaga sistem imunitas tubuh</li>
                    <li> . . . </li>
               <NavLink href ="https://sehatafiat.com/manfaat-buah-naga/">
                <Button color="primary"> lihat manfaat lebih detail</Button>
               </NavLink>
                </div>
                    :null
        }
        
      </div>
    )
  }
}
