import React , { Component } from "react";
import {Route, Link} from 'react-router-dom';
import Avatar from 'material-ui/Avatar';
import FontIcon from 'material-ui/FontIcon';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';

import {
    blue300,
    indigo900,
    orange200,
    deepOrange300,
    pink400,
    purple500,
  } from 'material-ui/styles/colors';

  const style = {margin: 5};

  var avatarItems = [
        {
            gid: 0,
            icon: "A",
            color: blue300,
            background: purple500,
            detail: "Jolin"
        },
        {
            gid: 1,
            icon: "B",
            color: orange200,
            background: purple500,
            detail: "Mary"
        },
        {
            gid: 2,
            icon: "C",
            color: pink400,
            background: purple500,
            detail: "Candy"
        },
  ]

export default class About extends Component{
    constructor(props){
        super(props);
        this.handleShowDeatail = this.handleShowDeatail.bind(this);
    }

    handleShowDeatail(aid){
        this.props.history.push(`${this.props.match.path}/${aid}`);
    }
    render() {

        return (
            <div>
                <h1>About</h1>
                <Link to="/about/1">Detail</Link>
                <br />
                {this.props.children}

                <Route path="/about/:aid" render={props => (
                  <div>
                    <h2>About Detail: {props.match.params.aid}</h2>
                    <h2>{avatarItems[props.match.params.aid].detail}</h2>
                  </div>
                )} >
                </Route>

                <List>

                    {
                        avatarItems.map(item => (
                            <ListItem key={item.gid} disabled={false} 
                                leftAvatar={
                                    <Avatar
                                        color={item.color}
                                        backgroundColor={item.background}
                                        size={30}
                                        style={style}
                                    >
                                    {item.icon}
                                    </Avatar>
                                }
                                onClick={() => this.handleShowDeatail(item.gid)}
                            >
                                {item.detail}
                            </ListItem>
                        ))
                    }
                </List>

            </div>
        );
    }    
}