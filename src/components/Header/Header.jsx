import React from "react";
import { Link } from "react-router-dom";
import { Header, List, Image, Segment, Icon, Popup, ListContent, Menu } from "semantic-ui-react";
import "./Header.css";

import ProfilePage from "../../pages/Profile/Profile"
export default function PageHeader({ loggedUser, handleLogout }) {
    return (<>
        <Segment id="header">
            <div id="profile">
                <Link to={`/${loggedUser?.username}`}>
                    <Image circular src={
                        loggedUser?.photoUrl
                            ? loggedUser?.photoUrl
                            : "https://react.semantic-ui.com/images/wireframe/square-image.png"
                    } avatar size="mini" />
                    <span id="span"> {loggedUser?.username}</span>
                </Link>
            </div>
            <div className="title">
                <h1 className="musicbox"> Music Box</h1>
            </div>
            <div className="links-span">
                <List horizontal>
                    <List.Item ><Link to="/"><h2>Home</h2></Link></List.Item>
                    <List.Item ><Link to={`/${loggedUser?.username}`}><h2>Profile</h2></Link></List.Item>
                    <List.Item ><Link to="/Login"><h2>Logout</h2></Link></List.Item>
                </List>
            </div>
        </Segment>

    </>
    )
}

