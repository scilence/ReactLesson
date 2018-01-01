import React , { Component } from "react"; 
import injectTapEventPlugin from "react-tap-event-plugin";
//import Taps from "material-ui/lib/tabs/tabs";
// import Tap from "material-ui/lib/tabs/tab";
import Tabs, { Tab } from "material-ui/tabs";

injectTapEventPlugin();


export default class Index extends Component{
    render(){
        return (
            <div>
                <h1>Index</h1>
                <Tabs>
                    <Tab label="Home" />
                    <Tab label="About" />
                </Tabs>
            </div>
        );
    }
}