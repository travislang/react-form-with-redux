import React, { Component } from 'react';
import './App.css';
import InputForm from '../InputForm/InputForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>Snack Table</h2>
        <InputForm />
      </div>
    );
  }
}

export default App;
