import React, { Component } from 'react'
import {NavLink, Button} from 'reactstrap'
import Picmanggis from '../../../../Assets/Manggis.jpeg'

export default class Manggis extends Component {
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
      <div className="Manggis">
                    <h5> Manfaat Manggis </h5>
            <img src={Picmanggis} alt="text" />
             <br />
            <p> Apa saja manfaat Manggis </p>
            <Button color="primary" onClick={this.handleToggle} > Lihat manfaat </Button>
        {
            this.state.dropdown === true ?
                <div>
                    <li> Menghaluskan Kulit</li>
                    <li>Mengobati Alergi Kulit</li>
                    <li>   Memperbaiki Sel-Sel Kulit Yang Rusak</li>
                    <li> . . . </li>
               <NavLink href ="https://cintaihidup.com/15-manfaat-buah-manggis-untuk-kecantikan-dan-kesehatan-anda/">
                <Button color="primary"> lihat manfaat lebih detail</Button>
               </NavLink>
                </div>
                    :null
        }
        
      </div>
    )
  }
}
