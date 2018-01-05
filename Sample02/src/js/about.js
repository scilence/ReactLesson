import React , { Component } from "react";
import {Route, Link} from 'react-router-dom';

export default class About extends Component{

    render() {

        return (
            <div>
                <h1>About</h1>
                <Link to="/about/1">Detail</Link>
                <br />
                <Link to="/">Home</Link>
                <br />
                {this.props.children}


                <Route path="/about/:aid" render={props => (
                  <div>
                    <h2>About Detail: {props.match.params.aid} { console.log(props)}</h2>
                  </div>
                )} >
                </Route>
            </div>
        );
    }    
}