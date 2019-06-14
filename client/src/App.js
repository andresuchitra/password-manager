import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import Home from './components/Home'
import AddPassword from './components/AddPassword'
import Header from './components/Header'

function App() {
  return (
      <Router>
          <Header></Header>
          <Switch>
            <Route path="/add" component={ AddPassword }/>
            <Route path="/" exact render={(routeProps) => (
              <Home />
              )} />
          </Switch>
          
      </Router>
  );
}

export default App;
