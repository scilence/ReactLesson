import React, { Component } from 'react';
import { render } from 'react-dom';
import {BrowserRouter, Route, Link, NavLink, Switch} from 'react-router-dom';

import About from './about';
import Index from './index';
import Main from './main';

import '../css/style.css';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from "react-tap-event-plugin";
// import MyAwesomeReactComponent from './MyAwesomeReactComponent';
import Tabs, { Tab } from "material-ui/tabs";
import Cards from './cards';

injectTapEventPlugin();

const supportHistroy = "pushState" in window.history;

const User = ({match}) => { return <h1>Hello {match.params.username}</h1> };

render((
  <div>
    <MuiThemeProvider>
      <BrowserRouter basename="/" forceRefresh={!supportHistroy}>
        <div>
          <Main />
          <Switch>
              <Route exact path="/" component={Index}>
              </Route>
              <Route path="/about" component={About}>
              </Route>
              <Route path="/cards" component={Cards} />
          </Switch>
        </div>
        
      </BrowserRouter>
    </MuiThemeProvider>
  </div>
  )
  , document.getElementById('app'));