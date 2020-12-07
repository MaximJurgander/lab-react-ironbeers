import React, { Component } from 'react';
import AllBeers from '../AllBeers/AllBeers';
import RandomBeers from '../RandomBeers/RandomBeers';
import NewBeer from '../NewBeer/NewBeer';
import {Link} from 'react-router-dom';
 
export default class HomePage extends Component {
  render() {
    return ( 
      <div className='HomePage'> 
        <Link exact to='AllBeers'>All Beers</Link>
        <Link exact to='RandomBeer'>Random Beer</Link>
        <Link exact to='NewBeer'>New Beer</Link>
      </div>
    )
  }
}

