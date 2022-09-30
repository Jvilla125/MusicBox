import React from "react";
import { Link } from "react-router-dom";
import { Header, Image, Segment, Icon, Popup } from "semantic-ui-react";
import "./Header.css";

import ProfilePage from "../../pages/Profile/Profile"

export default function PageHeader({ loggedUser, handleLogout }) {
    return (
        <Segment id="header">
            <Header className="header-text" as='h2' floated="left">
            <Link to={`/${loggedUser?.username}`}>
                <Image circular src={
                    loggedUser?.photoUrl
                        ? loggedUser?.photoUrl
                        : "https://react.semantic-ui.com/images/wireframe/square-image.png"
                } avatar size="tiny" /><span> {loggedUser?.username}</span>
                </Link>
            </Header>
            <Header className="links" textAlign="center">
                <h3>
                    <Popup content="Profile" 
                    trigger={
                    <Link to={`/${loggedUser?.username}`}>
                    <Icon
                            name="user outline"
                            color='blue'
                        />
                        </Link>} inverted
                        />
                </h3>
                <h3>
                    <Link to={`/listenlater`}>Listen to Later</Link>
                </h3>
                <h3>
                    <Link to="/">Feed</Link>
                </h3>
                <h3>
                    <Link to="/Login" >
                        
                        <Icon
                            name="log out"
                            color='blue'
                        />

                    </Link>
                </h3>
            </Header>
        </Segment>
    )
}