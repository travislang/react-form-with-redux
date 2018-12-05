import React, { Component } from 'react';
import './App.css';
import InputForm from '../InputForm/InputForm';
import SnackList from '../SnackList/SnackList';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
class App extends Component {
  render() {
    return (
        <Router>
            <div className="App">
                <Link to='/'>Form</Link>
                <Link to='/snacks'>Snacks</Link>
                <h2>Snack Table</h2>
                <Route path='/' exact component={InputForm} />
                <Route path='/snacks' component={SnackList} />
            </div>
        </Router>
    );
  }
}

export default App;
