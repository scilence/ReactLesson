import React, { Component } from 'react';
import { render } from 'react-dom';

import '../css/style.css';

import reactIcon from '../assets/react-icon.png';

export default class Hello extends Component {
  render() {
    return (
      <div>
        Hello from react

        <img src={ reactIcon } alt='React Icon' />
      </div>
    );
  }
}

render(<Hello />, document.getElementById('app'));