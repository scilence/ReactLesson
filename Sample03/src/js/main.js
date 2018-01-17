import React , { Component } from "react"; 
import Tabs, { Tab } from "material-ui/tabs";
//import { withRouter } from 'react-router-dom'

class Main extends Component{

    constructor(props){
        super(props);
        this.handleTabsChanged = this.handleTabsChanged.bind(this);
    }

    handleTabsChanged(value){
        if(this.props.onTabsChange){
            this.props.onTabsChange(value);
        }
        this.props.history.push(value);
    }
      
    render(){
        return (
            <div>
                <Tabs onChange={this.handleTabsChanged}>
                    <Tab label="Home" value="/"/>
                    <Tab label="About" value="/about" />
                    <Tab label="Cards" value="/cards" />
                </Tabs>
            </div>
        );
    }
}

export default Main;