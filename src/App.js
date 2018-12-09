import React, { Component } from 'react';
import './App.css';
import DateOne from './DateOne';
import DateTwo from './DateTwo';
import RefetchArrayButton from './RefetchArrayButton';
import RefetchFunctionButton from './RefetchFunctionButton';
import Title from './Title';

class App extends Component {
  state = { showTitle: true };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            {'RefetchQueries as Function:'}<br />
            {'1. Updates the same-named `Dates` queries'}<br />
            {'2. Leaves an undisplayed `Title` query in a stale state'}
          </p>
          <p>
            {'RefetchQueries as Array:'}<br />
            {'1. Updates only one of the same-named `Dates` queries'}<br />
            {'2. Correctly refetches `Title` query when it is re-toggled'}
          </p>
          { this.state.showTitle && <Title /> }
          <button
            className="btn btn-default"
            onClick={() => this.setState({ showTitle: !this.state.showTitle })}
          >
            {'Show/Hide Title'}
          </button>
          <br />
          <DateOne />
          <DateTwo />
          <RefetchArrayButton />
          <RefetchFunctionButton />
        </header>
      </div>
    );
  }
}

export default App;
