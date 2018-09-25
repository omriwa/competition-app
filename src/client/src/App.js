import React, { Component } from 'react';
import axios from "axios";
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    
    this.state = {
      msg: "default msg"
    }
  }
  
  componentDidMount(){
    alert("mount")
    axios.get("http://www.google.com").then(response => {alert(response)})
  }
  
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        {
          this.state.msg + ""
        }
      </div>
    );
  }
}

export default App;
