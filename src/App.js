import React, { Component } from 'react'
import logo from './logo.svg'
import './App.scss'
import DataService from './services/DataService'
import NavBar from './Components/Menu/NavBar'
import { NavigationDrawer } from 'react-md';
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      carrers: []
    }
  }
  
  render() {
    return (
      <div className="md-grid">
        <NavigationDrawer
        drawerTitle="react-md with CRA"
        toolbarTitle="Welcome to react-md"
      >
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
        </div>
      </NavigationDrawer>
        <NavBar />
      </div>
    )
  }
}

export default App;
