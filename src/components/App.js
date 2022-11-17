import React from "react";
import { Link, Switch, Route } from 'react-router-dom';

import Home from './Home';
import Help from './Help';
import OrderForm from './OrderForm';



export default function App(props) {
  const { data } = props;
  document.querySelector('title').textContent = `${data.companyName} Eats`;
  return (
    <div className='App'>
      <nav className='nav-container'>
        <h1 className='company-name'>{data.companyName} Eats</h1>
        <div className='navBtns'>
          <button><Link to='/'>Home</Link></button>
          <button><Link to='/help'>Help</Link></button>
        </div>
      </nav>
      <Route exact path='/'><Home /></Route>
      <Route path='/help'><Help /></Route>
      <Route path='/order-pizza'><OrderForm /></Route>
    </div >
  )
}

