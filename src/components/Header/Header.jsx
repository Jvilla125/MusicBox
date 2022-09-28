import React from "react";
import { Link } from "react-router-dom";
import { Header, Image, Segment } from "semantic-ui-react";
import "./Header.css";

import ProfilePage from "../../pages/Profile/Profile"

export default function PageHeader({loggedUser, handleLogout}){
    return(
    <Segment id="header">
    <Header class="header-text" as='h2' floated="left">
        <Image src={
                loggedUser?.photoUrl
                ? loggedUser?.photoUrl
                : "https://react.semantic-ui.com/images/wireframe/square-image.png"
            } /> Patrick
    </Header>
    <Header class="header-text" textAlign="center">
        <h3>
            <Link to={`/${loggedUser?.username}`}>Profile</Link>   Suggested/ Listen to Later Click to Add a New Song <Link to="/">Feed</Link>
       </h3>
    </Header>
    <Header class="header-text" floated="right">
        <Link to="/Login" >
            Logout
        </Link> 
    </Header>
    </Segment>
    )
}