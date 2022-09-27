import React from "react";
import {Segment, Card, Image} from "semantic-ui-react"

export default function PostCard({posts, loggedUser, key, isProfile}){
    return(
    <>
    <Segment>
    <Card key={posts._id}>
        {isProfile ? (
            ""
        ) : (
        
        <Card.Header>
            {/* <h2>{posts.user.username}</h2> */}
            {/* <Image
                size="large"
                avatar
                src={
                  posts.user.photoUrl
                    ? posts.user.photoUrl
                    : "https://react.semantic-ui.com/images/wireframe/square-image.png"
                }
              /> */}
        </Card.Header>
        )}
        <Image src={`${posts?.photoUrl}`} />
        <Card.Content>
            <Card.Description>{posts.song}</Card.Description>
            <Card.Description>{posts.artist}</Card.Description>
            <Card.Description>{posts.genre}</Card.Description>
            <Card.Description>{posts.mood}</Card.Description>
        </Card.Content>


        </Card>
    </Segment>
    </>
    )
}