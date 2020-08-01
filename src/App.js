import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import Navbar from './Components/Navbar/Navbar';

class App extends Component{
  render(){
    return(
    <MuiThemeProvider>
    <div>
    <Navbar/>
    </div>
    </MuiThemeProvider> 
      )
  }
}

export default App;
