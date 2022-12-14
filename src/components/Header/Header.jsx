import React from "react";
import { Link } from "react-router-dom";
import { Header, List, Image, Segment, Icon, Popup, ListContent } from "semantic-ui-react";
import "./Header.css";

import ProfilePage from "../../pages/Profile/Profile"

export default function PageHeader({ loggedUser, handleLogout }) {
    return (
        <Segment id="header" className="links">
            <Header  as='h2' floated="left">
                <Link to={`/${loggedUser?.username}`}>
                    <Image circular src={
                        loggedUser?.photoUrl
                            ? loggedUser?.photoUrl
                            : "https://react.semantic-ui.com/images/wireframe/square-image.png"
                    } avatar size="tiny" /><span> {loggedUser?.username}</span>
                </Link>
            </Header>
            <Header >
                <h1 className="musicbox"> Music Box</h1>
            </Header>
            <List horizontal floated="right">
                <List.Item>
                <h2 textAlign="justified">
                        <Link to="/"><Icon
                                name="home"
                                color='blue'
                            /></Link>
                    </h2>
                </List.Item>
                <List.Item>
                <List.Content>
                    
                    <List.Content>
                    <h2 textAlign="justified">
                        <Popup content="Profile"
                            trigger={
                                <Link to={`/${loggedUser?.username}`}>
                                    <Icon
                                        name="user outline"
                                        color='blue'
                                    />
                                </Link>} inverted
                        />
                    </h2>
                </List.Content>
                </List.Content>
                </List.Item>
                <List.Item>
                <List.Content>
                    <h2 textAlign="justified">
                        <Link to="/Login" >

                            <Icon
                                name="log out"
                                color='blue'
                            />

                        </Link>
                    </h2>
                </List.Content>
                </List.Item>
            </List>
            {/* <Header className="links" textAlign="justified" > */}





            {/* </Header> */}
        </Segment>
    )
}