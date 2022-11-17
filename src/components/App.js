import React, { useState } from "react";
import { Link, Switch, Route } from 'react-router-dom';

import Home from './Home';
import Help from './Help';
import OrderForm from './OrderForm';


const initialFormValues = {
  crustsize: '',
  sause: '',
  pepperoni: false,
  sausage: false,
  canadianbacon: false,
  spicyitaliansausage: false,
  grilledchicken: false,
  onions: false,
  greenpepper: false,
  dicedtomatos: false,
  blackolives: false,
  rostedgarlic: false,
  artichokehearts: false,
  threecheese: false,
  pineapple: false,
  extracheese: false,
  glutenfreecrust: false
}

export default function App(props) {
  const { data } = props;

  const [formValues, setFormValues] = useState(initialFormValues);


  const sv = data.filter((element) => {
    return element.section === 'siteVariable';
  })
  const company = sv[0].companyName;

  document.querySelector('title').textContent = `${company} Eats`;
  return (
    <div className='App'>
      <nav className='nav-container'>
        <h1 className='company-name'>{company} Eats</h1>
        <div className='navBtns'>
          <button><Link to='/'>Home</Link></button>
          <button><Link to='/pizza'>Pizza</Link></button>
          <button><Link to='/help'>Help</Link></button>
        </div>
      </nav>
      <Route exact path='/'><Home /></Route>
      <Route path='/help'><Help /></Route>
      <Route path='/pizza'><OrderForm data={data} /></Route>
    </div >
  )
}

