import React, { useState, useCallback, useEffect } from "react";
import { useParams } from "react-router-dom"
import { Segment, Divider, Image, Grid } from "semantic-ui-react"
import userService from "../../utils/userService"
import * as likesAPI from "../../utils/likesApi"
import * as listenlaterAPI from "../../utils/listenlaterApi"
import * as postsAPI from "../../utils/postApi"
import Loading from "../../components/Loader/Loader"
import "./Profile.css"
import PageHeader from "../../components/Header/Header"
import DisplayPosts from "../../components/DisplayPosts/DisplayPosts"

export default function ProfilePage({ loggedUser }) {
    const [posts, setPosts] = useState([]);
    const [profileUser, setProfileUser] = useState({})
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(true);

    const { username } = useParams();

    async function addLike(postId) {
        try {
            const response = await likesAPI.create(postId);
            console.log(response, "<-- adding a like")
            getProfile();
        } catch (err) {
            setError("Cannot add a like, try again")
        }
    }
    async function removeLike(likeId) {
        try {
            const response = await likesAPI.removeLike(likeId)
            console.log(response, "<- Removing a like")
            getProfile();
        } catch (err) {
            setError("Cannot remove a like, try again")
        }
    }
    async function listenLater(postId) {
        try {
            const response = await listenlaterAPI.create(postId);
            console.log(response, "<-- favoriting")
            getProfile();
        } catch (err) {
            setError("Cannot save for later, try again")
        }
    }
    async function removeListenLater(listenlaterId) {
        try {
            const response = await listenlaterAPI.removeListenLater(listenlaterId)
            console.log(response, "<- removing")
            getProfile();
        } catch (err) {
            setError("Cannot remove, try again")
        }
    }

    const getProfile = useCallback(async () => {
        try {
            const response = await userService.getProfile(username);
            setProfileUser(response.data.user)
            setPosts(response.data.posts)
            console.log(response)
        } catch (err) {
            console.log(err.message)
            setError("Profile does not exist! You are in the wrong place")
        }
    }, [username]);

    async function deletePost(postId) {
        try {
            setLoading(true);
            const response = await postsAPI.deletePost(postId);
            getPosts();
            setLoading(false);
        } catch (err) {
            setError("Error deleting posts, try again.")
        }
    }
    async function getPosts() {
        try {
            const response = await postsAPI.getAll();
            setPosts([...response.data]);
            setLoading(false);
        } catch (err) {
            setLoading(false)
        }
    }


    useEffect(() => {
        console.log("It is working!!")
        getProfile();
    }, [username, getProfile])

    return (
        <Grid centered>
            <Grid.Row>
                <Grid.Column>
                    <PageHeader loggedUser={loggedUser} />
                </Grid.Column>
            </Grid.Row>
        <Grid.Row centered>
            <h1 >Welcome to {username}'s page</h1>
            </Grid.Row>
            <Grid.Row centered>

                <Image className="profile" rounded src={
                    loggedUser?.photoUrl
                        ? loggedUser?.photoUrl
                        : "https://react.semantic-ui.com/images/wireframe/square-image.png"
                } avatar size="small" />

            </Grid.Row>
            <Grid.Row centered>
                <span><h1 >Total posts: {posts.length}</h1></span>
            </Grid.Row>
            <Divider />
            <Grid.Row>
                <Grid.Column centered style={{ maxWidth: 600 }}>
                    <DisplayPosts
                        posts={posts}
                        isProfile={true}
                        loggedUser={loggedUser}
                        addLike={addLike}
                        removeLike={removeLike}
                        listenLater={listenLater}
                        removeListenLater={removeListenLater}
                        deletePost={deletePost}
                    />
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )
}