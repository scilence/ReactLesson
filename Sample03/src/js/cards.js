import React , { Component } from "react";

import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';


const Items = [
    {
        gid: 1,
        title: "API Class",
        date: "2018/02/21",
        content: "今天是個好天氣, \n good day 1"
    },
    {
        gid: 2,
        title: "API Class 2",
        date: "2018/03/21",
        content: "今天是個好天氣, \n good day 2"
    },
    {

        gid: 3,
        title: "API Class 3",
        date: "2018/05/21",
        content: "今天是個好天氣, \n good day 3"
    }

];

export default class Cards extends Component{
    
    render() {

        return (
            <div>
                <Subheader>Course List</Subheader>
                {Items.map(item => (
                    <Card key={item.gid} >
                        <CardHeader
                            title={item.title}
                            subtitle={item.date}
                            actAsExpander={true}
                            showExpandableButton={true} />
                        {/* <CardTitle title={item.title} subtitle={item.date} /> */}
                        <CardText expandable={true} >
                            {item.content}
                        </CardText>
                        <CardActions>
                            <FlatButton label="Read" />
                            <FlatButton label="Delete" />
                        </CardActions>
                    </Card>
                ))
                }
                <Divider />
            </div>
        );
    }    


}
