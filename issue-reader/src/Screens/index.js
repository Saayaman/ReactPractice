import React, {Component} from 'react';
import SearchScreen from './Search'
import Result from './Result'

import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

class App extends Component {
  render() {
    return (<Router>
      <div>
        <Route exact path="/" component={SearchScreen}/>
        <Route path="/result" component={Result}/>
      </div>
    </Router>);
  }
}

export default App;
