import React from "react";
import {Segment, Card, Image, Button, Icon, Label} from "semantic-ui-react"

export default function PostCard({posts, loggedUser, isProfile, addLike, removeLike}){

    const likeInit = posts.likes.findIndex(
        (like) => like.username === loggedUser.username
    );

    const likeColor = likeInit > -1 ? "blue": "grey";

    const clickHandler = likeInit > -1 ? () => removeLike(posts.likes[likeInit]._id) : () => addLike(posts._id)

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
        <Card.Content>
            <Icon 
            name="thumbs up"
            color = {likeColor}
            onClick={clickHandler}
            />
        </Card.Content>


        </Card>
    </Segment>
    </>
    )
}