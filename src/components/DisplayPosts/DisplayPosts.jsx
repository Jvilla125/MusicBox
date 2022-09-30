import React from "react";
import PostCard from "../../components/PostCard/PostCard"
import { Card, Dimmer, Segment, Image } from 'semantic-ui-react'
import Loader from "../Loader/Loader"

export default function DisplayPosts({ posts, isProfile, loggedUser,loading, addLike, removeLike, listenLater, removeListenLater, deletePost }) {



    return (
        <Card.Group itemsPerRow={3} stackable>
            {loading ? (
          <Segment>
            <Dimmer active inverted>
              <Loader size="small">Loading</Loader>
            </Dimmer>
            <Image src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png" />
          </Segment>
        ) : null}
            {posts.reverse().map((posts) => {
                return (
                    <PostCard style={{ maxWidth: 300, maxHeight: 600}}
                        posts={posts}
                        key={posts._id}
                        loggedUser={loggedUser}
                        isProfile={isProfile}
                        
                        addLike={addLike}
                        removeLike={removeLike}
                        listenLater={listenLater}
                        removeListenLater={removeListenLater}
                        deletePost={deletePost}
                    />
                )
            })}
        </Card.Group>
    )
}