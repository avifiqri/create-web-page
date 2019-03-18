import React, { Component } from 'react'
import './Footer.css'
import Github from '../../../Assets/github.jpeg'
import Facebook from '../../../Assets/facebook.jpeg'
import Instagram from '../../../Assets/instagram.jpeg'
import {NavLink} from 'reactstrap'

export default class Footer extends Component {
  
  render() {
    return (
      <div className="Footer">
            <div className="keys"><h4> @Copy Right m. yusuf avifiqri all Right</h4> </div>          
          <br />
          <div className="tentang">
            <h5>Tentang kami</h5>
            <ul>
            <NavLink href="https://github.com/avifiqri"> 

            <li> <img src={Github} alt="text" className="gambarfooter" />  </li>
            </NavLink>
            
            <NavLink href="https://web.facebook.com/avi.fiqri"> 
            <li> <img src={Facebook} alt="text" className="gambarfooter"/> </li>
            </NavLink>
            
            <NavLink href=" https://www.instagram.com/_yu_su_f/">
              <li> <img src={Instagram} alt="text" className="gambarfooter"/> </li>
            </NavLink>
            </ul>
            </div>
      </div>
    )
  }
}
