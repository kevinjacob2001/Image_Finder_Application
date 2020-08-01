import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import Navbar from './Components/Navbar/Navbar';
import Search from './Components/Search/Search';


class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <Navbar />
          <Search/>
        </div>
      </MuiThemeProvider>
    )
  }
}

export default App;
