import React, { Component } from 'react';
import './App.css';
import {Route,Switch} from 'react-router-dom'
import Dashboard from './App/Dashboard/Dashboard';
import Login from './App/Component/Login-Logout/Login/Login';
import Toolbar from './App/Component/Toolbar/Toolbar';
import Footer from './App/Component/Footer/Footer';
import Daftar from './App/Component/Daftar/Daftar';
import Fruits from './App/Component/Fruits/Fruits';
import Disable from './App/Disable/Disable';

 

class App extends Component {
  render() {
    return (
      <div className="App">
      <div>
      <Toolbar />
      </div>
        <Switch>
          <Route exact path ="/" ActiveClassName ="Daschboard" component={Dashboard}  />
          <Route  path ="/Login" ActiveClassName ="Login" component={Login} />
          <Route  path ="/Daftar" ActiveClassName ="Daftar" component={Daftar} />
          <Route  path ="/Fruits" ActiveClassName ="Fruits" component={Fruits} />
          <Route component={Disable} />
        </Switch>
        
        <div >
        <Footer />
        
        </div>
      </div>
    );
  }
}

export default App;
