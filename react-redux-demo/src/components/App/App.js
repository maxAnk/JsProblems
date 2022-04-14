import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';


import logo from '../../logo.svg';
import './App.css';
import reducers from '../../reducers';

import Counter from '../Counter/Counter';
import Total from '../Total/Total';
import Max from '../Max/Max';
import CreateCounter from '../CreateCounter/CreateCounter';


const store = createStore(reducers);



class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <CreateCounter />
          <Counter />
          <div>
            <Total />
            <Max />
          </div>
        </div>

      </Provider>
    );
  }
}

export default App;
