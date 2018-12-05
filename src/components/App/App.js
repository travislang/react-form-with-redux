import React, { Component } from 'react';
import './App.css';
import InputForm from '../InputForm/InputForm';
import SnackList from '../SnackList/SnackList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>Snack Table</h2>
        <InputForm />
        <SnackList />
      </div>
    );
  }
}

export default App;
