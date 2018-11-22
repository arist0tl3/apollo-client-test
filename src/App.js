import React, { Component } from 'react';
import './App.css';
import DateOne from './DateOne';
import DateTwo from './DateTwo';
import Button from './Button';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <DateOne />
          <DateTwo />
          <Button />
        </header>
      </div>
    );
  }
}

export default App;
