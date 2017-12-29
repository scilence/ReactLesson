import React, { Component } from 'react';
import { render } from 'react-dom';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory'

import About from './About';

import '../css/style.css';

import reactIcon from '../assets/react-icon.png';


const history = createBrowserHistory()

export default class App extends Component{
  render(){
    return (
      <div>
        <h1>Hello World</h1>
        <nav>
          <Link to="/about" >About</Link>
        </nav>
        <img src={ reactIcon } alt='React Icon' />
      </div>
    );
  }
}

render((
  <div>
    <BrowserRouter basename="/">
      <div>
        <Route exact path="/" component={App}/>
        <Route path="/about" component={About}/>
      </div>
    </BrowserRouter>
  </div>
  )
  , document.getElementById('app'));