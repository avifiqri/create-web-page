import React, { Component } from 'react'
import Header from './Header/Header';
import Content from './Content/Content';
import './Dashboard.css'
import Servic from './Service/Servic';

export default class Dashboard extends Component {
 

  render() {
    return (
      <div className="Dashboard">
        <div className= 'header'>
            < Header />
        </div>  
     
        <div className="content">
        <Content />
          </div>
          <div>
            <Servic />
            </div>
          <br />

        
      </div>
    )
  }
}
