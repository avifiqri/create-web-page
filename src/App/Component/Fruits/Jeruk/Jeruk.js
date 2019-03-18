import React, { Component } from 'react'
import {NavLink, Button} from 'reactstrap'
import PicJeruk from '../../../../Assets/jeruk.jpeg'
export default class Jeruk extends Component {
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
      <div className="">
               <h5> Manfaat Jeruk </h5>
            <img src={PicJeruk} alt="text" />
             <br />
            <p> Apa saja manfaat Jeruk </p>
            <Button color="primary" onClick={this.handleToggle} > Lihat manfaat </Button>
        {
            this.state.dropdown === true ?
                <div>
                    <li> Menjaga Kesehatan Mulut </li>
                    <li>Kesehatan Sistem Pencernaan</li>
                    <li>Membantu Mencegah Penuaan Dini</li>
                    <li> . . . </li>
               <NavLink href =" https://www.sehatcenter.com/8-manfaat-buah-jeruk-bagi-kesehatan-tubuh-manusia/">
                <Button color="primary"> lihat manfaat lebih detail</Button>
               </NavLink>
                </div>
                    :null
        }
        
      </div>
    )
  }
}
