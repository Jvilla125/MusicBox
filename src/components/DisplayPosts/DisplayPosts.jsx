import React from "react";
import PostCard from "../../components/PostCard/PostCard"
import { Card, Dimmer, Segment, Image  } from 'semantic-ui-react'


export default function DisplayPosts({posts, isProfile, loggedUser}){
return(
    <Card.Group itemsPerRow={1} stackable>
    {posts.map((posts)=>{
        return (
            <PostCard
            posts={posts}
            key={posts._id}
            loggedUser={loggedUser}
            isProfile={isProfile}
            />
        )
    })}
    </Card.Group>
    )
}