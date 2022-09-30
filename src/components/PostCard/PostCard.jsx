import React from "react";
import { Segment, Card, Image, Button, Icon, Label } from "semantic-ui-react"
import { Link } from "react-router-dom"
import {deletePost} from "../../utils/postApi"

export default function PostCard({ posts, loggedUser, isProfile, addLike, removeLike, listenLater, removeListenLater, deletePost }) {

    const likeInit = posts.likes.findIndex(
        (like) => like.username === loggedUser.username
    );
    const likeColor = likeInit > -1 ? "blue" : "grey";
    const clickHandler = likeInit > -1 ? () => removeLike(posts.likes[likeInit]._id) : () => addLike(posts._id)

    const listenLaterInit = posts.listenlater.findIndex(
        (listen) => listen.username === loggedUser.username
    );
    const listenLaterColor = listenLaterInit > -1 ? "blue" : "grey";
    const listenLaterHandler = listenLaterInit > -1 ? () => removeListenLater(posts.listenlater[listenLaterInit]._id) : () => listenLater(posts._id)
    

        const handleClick = () => {
            deletePost(posts._id)
        }



    return (
                <Card style={{ maxWidth: 300, maxHeight: 600}} color="green" key={posts._id} raised>
                    {isProfile ? (
                        ""
                    ) : (
                        <Card.Content>
                            <Card.Header>
                                <Link to={`/${posts.user.username}`}>
                                    <Image
                                        size="large"
                                        avatar
                                        src={
                                            posts.user.photoUrl
                                                ? posts.user.photoUrl
                                                : "https://react.semantic-ui.com/images/wireframe/square-image.png"
                                        }
                                    />
                                    {posts.user.username}
                                </Link>
                            </Card.Header>
                        </Card.Content>
                    )}
                    <Image size="medium" src={`${posts?.photoUrl}`}  bordered/>
                    <Card.Content>
                        <Card.Description>Artist: {posts.artist}</Card.Description>
                        <Card.Description>Genre: {posts.genre}</Card.Description>
                        <Card.Description>Song: {posts.song}</Card.Description>
                        <Card.Description>Mood: {posts.mood}</Card.Description>
                    </Card.Content>
                    <Card.Content>
                        <Icon
                            name="thumbs up"
                            color={likeColor}
                            onClick={clickHandler}
                        />
                        {posts.likes.length} Likes
                    </Card.Content>
                    <Card.Content>
                        <Icon
                            name="heart"
                            color={listenLaterColor}
                            onClick={listenLaterHandler}
                        /> {posts.listenlater.length} Listen to later
                    </Card.Content>
                    <Card.Content>
                        {posts.user.username === loggedUser.username ?
                            (
                                <button
                                onClick ={handleClick}
                                >
                                    Delete
                                </button>
                            ) : ( " ")
                        }

                    </Card.Content>
                </Card>
           
    )
}