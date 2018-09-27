import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  componentDidMount(){
    alert("mount");
    console.log("123")
  }
  render() {
    return (
      <div className="App">
        2222
      </div>
    );
  }
}

export default App;
