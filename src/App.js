import React from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import AllBeers from './components/AllBeers/AllBeers';
import NewBeer from './components/NewBeer/NewBeer';
import RandomBeers from './components/RandomBeers/RandomBeers';


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact to='/' component={HomePage}></Route>
        <Route exact to='/AllBeers' component={AllBeers}></Route>
        <Route exact to='/NewBeer' component={NewBeer}></Route>
        <Route exact to='/RandomBeers' component={RandomBeers}></Route>
      </Switch>
    </div>
  );
}

export default App;
