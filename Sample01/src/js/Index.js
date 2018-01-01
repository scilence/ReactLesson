import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Index extends Component{
    render(){
      return (
        <div>
          <h1>Menu</h1>
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
        </div>
      );
    }
  }
  