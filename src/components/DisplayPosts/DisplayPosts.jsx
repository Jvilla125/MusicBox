import React from "react";
import PostCard from "../../components/PostCard/PostCard"
import { Card, Dimmer, Segment, Image } from 'semantic-ui-react'


export default function DisplayPosts({ posts, isProfile, loggedUser, addLike, removeLike, listenLater, removeListenLater }) {


    return (
        <Card.Group itemsPerRow={3} stackable>
            {posts.map((posts) => {
                return (
                    <PostCard
                        posts={posts}
                        key={posts._id}
                        loggedUser={loggedUser}
                        isProfile={isProfile}
                        addLike={addLike}
                        removeLike={removeLike}
                        listenLater={listenLater}
                        removeListenLater={removeListenLater}
                    />
                )
            })}
        </Card.Group>
    )
}