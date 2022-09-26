import React from "react";
import { Link } from "react-router-dom";
import { Header, Image, Segment } from "semantic-ui-react";

import ProfilePage from "../../pages/Profile/Profile"

export default function PageHeader({loggedUser, handleLogout}){
    return(
    <Segment clearing>
    <Header as='h2' floated="left">
        <Image  src={
                loggedUser?.photoUrl
                ? loggedUser?.photoUrl
                : "https://react.semantic-ui.com/images/wireframe/square-image.png"
            } /> Patrick
    </Header>
    <Header textAlign="center">
        <h3>
            <Link to={`/${loggedUser?.username}`}>Profile</Link>   Suggested/ Listen to Later Click to Add a New Song <Link to="/">Feed</Link>
       </h3>
    </Header>
    <Header floated="right">
        <Link to="/Login" >
            Logout
        </Link>
    </Header>
    </Segment>
    )
}