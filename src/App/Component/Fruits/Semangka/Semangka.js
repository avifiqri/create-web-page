import React, { Component } from 'react'
import {NavLink, Button} from 'reactstrap'
import Pictsemangka from '../../../../Assets/Semangka.jpeg'
export default class Semangka extends Component {
    constructor(props) {
        super(props)
        this.state ={
       
  
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
      <div className="semangka">
            <h5> Manfaat Semangka </h5>
            <img src={Pictsemangka} alt="text" /> <br />
            <p> Apa saja manfaat semangka </p>
            <Button color="primary" onClick={this.handleToggle} > Lihat manfaat </Button>
        {
            this.state.dropdown === true ?
                <div>
                    <li> Mencegah Gangguan Ginjal </li>
                    <li> Kesehatan Jantung</li>
                    <li> Mencegah Kanker</li>
                    <li> . . . </li>
               <NavLink href ="https://www.lihat.club/2014/08/manfaat-buah-semangka.html">
                <Button color="primary"> lihat manfaat llebih detail</Button>
               </NavLink>
                </div>
                    :null
        }

        
      </div>
    )
  }
}
