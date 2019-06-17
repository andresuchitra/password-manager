import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import Home from './components/Home'
import AddPassword from './components/AddPassword'
import Header from './components/Header'
import UpdatePassword from './components/UpdatePassword';
import SearchResult from './components/SearchResult';

function App() {
  return (
      <Router>
          <Header></Header>
          <Switch>
            <Route path="/search/:key" component={ SearchResult }/>
            <Route path="/add" component={ AddPassword }/>
            <Route path="/update/:id" component={ UpdatePassword }/>
            <Route path="/" exact render={(routeProps) => (
              <Home />
              )} />
          </Switch>
          
      </Router>
  );
}

export default App;
