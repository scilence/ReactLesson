import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

export default class About extends Component {
    render() {
      return (
        <div>
            <h1>Hello in About</h1>
            
            <NavLink to="/about" activeStyle={{ color:'red'}} >My NavLink</NavLink>
        </div>
      );
    }
  }
  