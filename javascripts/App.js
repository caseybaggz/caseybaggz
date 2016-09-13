import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import Index from './components/Index';
import Home from './components/Home';
import Works from './components/Works';

class App extends React.Component {
  render() {
    return (
      <Router history={ hashHistory }>
        <Route path="/" component={ Index }>
          <IndexRoute component={ Home } />
          <Route path="/home" component={ Home } />
        </Route>
        <Route path="/works/:name" component={ Works } />
      </Router>
    );
  }
}


ReactDOM.render(<App />, document.getElementById('app'));

// init
import Init from './init';
