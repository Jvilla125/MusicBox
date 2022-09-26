import React from "react";
import { Link } from "react-router-dom";
import { Header, Image, Segment } from "semantic-ui-react";

export default function PageHeader(){
    return(
    <Segment clearing>
    <Header as='h2' floated="left">
        <Image  circular src='https://react.semantic-ui.com/images/avatar/large/patrick.png' /> Patrick
    </Header>
    <Header floated="right">
        <Link to="/Login" >
            Logout

        </Link>
    </Header>
    </Segment>
    )
}