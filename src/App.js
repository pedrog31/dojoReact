import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import data from './data.js';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      texto:""
    }
    this.buscarPersona = this.buscarPersona.bind(this);
  }

  buscarPersona (codigoPersona) {
    for (let dato in data) {
      if (data[dato].codigo == codigoPersona.target.value) {
        this.setState({
          texto:data[dato].nombre
        })
      }
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
            <input type = "text" placeholder = "texto" onChange = {this.buscarPersona.bind(this)} onFocus = {this.value = ""}/>
        </header>
        <p className="App-intro">
          {this.state.texto}
        </p>
      </div>
    );
  }
}

export default App;
