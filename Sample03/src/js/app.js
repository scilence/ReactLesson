import React, { Component } from 'react';
import { render } from 'react-dom';
import {BrowserRouter, Route, Link, NavLink, Switch} from 'react-router-dom';

import About from './about';
import Index from './index';
import Main from './main';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from "react-tap-event-plugin";

injectTapEventPlugin();

const supportHistroy = "pushState" in window.history;

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