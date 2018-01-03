import React, { Component } from 'react';
import { render } from 'react-dom';
import {BrowserRouter, Route, Link, NavLink, Switch} from 'react-router-dom';

import About from './about';
import Index from './index';

import '../css/style.css';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from "react-tap-event-plugin";
// import MyAwesomeReactComponent from './MyAwesomeReactComponent';
import Tabs, { Tab } from "material-ui/tabs";

injectTapEventPlugin();

const supportHistroy = "pushState" in window.history;

const User = ({match}) => { return <h1>Hello {match.params.username}</h1> };

const handleTabChanged = (value) => {
  console.log(value);
}

render((
  <div>
    <MuiThemeProvider>
      <BrowserRouter basename="/" forceRefresh={!supportHistroy}>
        <div>

          <Tabs onChange={handleTabChanged}>
            <Tab label="Home" value="home"/>
            <Tab label="About" value="about" />
          </Tabs>

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