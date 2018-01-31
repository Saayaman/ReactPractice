import React, { Component } from 'react';
import Home from './Screens/index.js';
import { Provider } from 'react-redux';
import configureStore from  './Redux/store.js'
import './App.css';


const store = configureStore()

class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <Home />
        </Provider>
      </div>
    );
  }
}

export default App;
