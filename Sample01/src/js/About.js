import React, { Component } from 'react';
import { NavLink, Prompt } from 'react-router-dom'

import reactIcon from '../assets/react-icon.png';

export default class About extends Component {
    render() {
      return (
        <div>
            <h1>Hello in About</h1>
            <img src={ reactIcon } alt='React Icon' />
            <Prompt message="Leave now?" />
        </div>
      );
    }
  }
  