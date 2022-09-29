import React from "react";
import { Link } from "react-router-dom";
import { Header, Image, Segment } from "semantic-ui-react";
import "./Header.css";

import ProfilePage from "../../pages/Profile/Profile"

export default function PageHeader({loggedUser, handleLogout}){
    return(
    <Segment id="header">
    <Header className="header-text" as='h2' floated="left">
        <Image src={
                loggedUser?.photoUrl
                ? loggedUser?.photoUrl
                : "https://react.semantic-ui.com/images/wireframe/square-image.png"
            } /> {loggedUser?.username}
    </Header>
    <Header className="links"  textAlign="center">
    <h3>
        <Link to={`/${loggedUser?.username}`}>Profile</Link>   
       </h3>
       <h3>
       <Link to={`/listenlater`}>Listen to Later</Link>
       </h3>
       <h3>
       <Link to="/">Feed</Link>
       </h3>
       <h3>
       <Link to="/Login" >
            Logout
        </Link> 
       </h3>
    </Header>
    </Segment>
    )
}