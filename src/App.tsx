import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.scss';
import { AddNew } from './components/AddNew';
import { Article } from './components/Article';
import { Home } from './components/Home';

const App = () => (
  <div className='App'>
    <Router>
      <Switch>
        <Route path='/article/:id' component={Article} />
        <Route path='/add-new' component={AddNew} />
        <Route path='/' component={Home} />
      </Switch>
    </Router>
  </div>
);

export default App;
