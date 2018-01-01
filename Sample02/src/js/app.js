import React, { Component } from 'react';
import { render } from 'react-dom';
import {BrowserRouter, Route, Link, NavLink, Switch} from 'react-router-dom';

import About from './about';
import Index from './index';

import '../css/style.css';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import MyAwesomeReactComponent from './MyAwesomeReactComponent';

const supportHistroy = "pushState" in window.history;

const User = ({match}) => { return <h1>Hello {match.params.username}</h1> };

render((
  <div>
    <MuiThemeProvider>
      <BrowserRouter basename="/" forceRefresh={!supportHistroy}>
        <div>
          <Route path="/" component={Index}/>
          <Switch>
              <Route path="/about" component={About}/>
          </Switch>
        </div>
        
      </BrowserRouter>
    </MuiThemeProvider>
  </div>
  )
  , document.getElementById('app'));