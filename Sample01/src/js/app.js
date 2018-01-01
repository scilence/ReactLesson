import React, { Component } from 'react';
import { render } from 'react-dom';
import {BrowserRouter, Route, Link, NavLink, Switch} from 'react-router-dom';
// import { Router, Route, hashHistory } from 'react-dom'
import createBrowserHistory from 'history/createBrowserHistory'

import Index from "./Index"
import About from './About';

import '../css/style.css';

const history = createBrowserHistory()

const getConfirm = function(){
  window.confirm("Yes/No");

}

const supportHistroy = "pushState" in window.history;

const User = ({match}) => { return <h1>Hello {match.params.username}</h1> };

render((
  <div>

    <div>HIHI</div>
    <BrowserRouter basename="/" forceRefresh={!supportHistroy}>
      <div>
        <Route path="/" component={Index}/>
        <Switch>
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
        </Switch>
      </div>
      
    </BrowserRouter>

  </div>
  )
  , document.getElementById('app'));