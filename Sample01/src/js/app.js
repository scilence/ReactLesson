import React, { Component } from 'react';
import { render } from 'react-dom';
import {BrowserRouter, Route, Link, NavLink} from 'react-router-dom';
// import { Router, Route, hashHistory } from 'react-dom'
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
          <br/>
          <Link to="/render" >Render</Link>
          <br/>
          <Link to="/user/Jolin" >User - Jolin</Link>
          <br/>
          <Link to={{
            pathname: "/user",
            search: "?uname=123",
            state: { uid: 312 }
          }} >User - Jolin2</Link>
        </nav>
        
        

        <img src={ reactIcon } alt='React Icon' />
      </div>
    );
  }
}

const getConfirm = function(){
  window.confirm("Yes/No");

}

const supportHistroy = "pushState" in window.history;

const User = ({match}) => { return <h1>Hello {match.params.username}</h1> };

render((
  <div>
    <BrowserRouter basename="/" forceRefresh={!supportHistroy}>
      <div>
        <Route exact path="/" component={App}/>
        <Route path="/about" component={About}/>
        <Route path="/render" render={props => (
          <div>
            <h1>Hello render</h1>
          </div>
        )} />
        <Route path="/user/:username" component={User} />
        <Route path="/children" children={(props) => (
          props.match
          ? <h1>Matched - {props.pathname}</h1>
          : <h1>Not Matched - {props.pathname}</h1>
        )} />
      </div>
      
    </BrowserRouter>
  </div>
  )
  , document.getElementById('app'));