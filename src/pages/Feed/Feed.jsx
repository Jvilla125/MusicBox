import React, {useState, useEffect} from "react";
import "./Feed.css"

import PageHeader from "../../components/Header/Header"
import AddPostForm from "../../components/AddPostForm/AddPostForm"
import DisplayPosts from "../../components/DisplayPosts/DisplayPosts"
import Loading from "../../components/Loader/Loader"

import * as postsAPI from "../../utils/postApi"
import * as likesAPI from "../../utils/likesApi"
import * as listenlaterAPI from "../../utils/listenlaterApi"

import { Grid } from "semantic-ui-react"

export default function Feed({loggedUser, handleLogout}){
    const [post, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    async function addLike(postId){
        try {
            const response = await likesAPI.create(postId);
            console.log(response, "<-- adding a like")
            getPosts();
        } catch(err){
            setError("Cannot add a like, try again")
        }
    }
    async function removeLike(likeId){
        try {
            const response = await likesAPI.removeLike(likeId)
            console.log(response, "<- Removing a like")
            getPosts();
        } catch(err){
            setError("Cannot remove a like, try again")
        }
    }

    async function listenLater(postId){
        try{
            const response = await listenlaterAPI.create(postId);
            console.log(response, "<-- favoriting")
            getPosts();
        } catch(err){
            setError("Cannot save for later, try again")
        }
    }
    async function removeListenLater(listenlaterId){
        try{
            const response = await listenlaterAPI.removeListenLater(listenlaterId)
            console.log(response, "<- removing")
            getPosts();
        } catch(err){
            setError("Cannot remove, try again")
        }
    }


    async function handleAddPost(post){
        try{
            setLoading(true);
            const response = await postsAPI.create(post)
            console.log(response)
            getPosts();
            setLoading(false);
        } catch(err){
            setError('Error creating post, please try again')
        }
    }

    async function getPosts(){
        try{
            const response = await postsAPI.getAll();
            setPosts([...response.data]);
            setLoading(false);
        } catch(err){
            setLoading(false)
        }
    }

    async function deletePost(postId){
        try{
            setLoading(true);
            const response = await postsAPI.deletePost(postId);
            getPosts();
            setLoading(false);
        } catch(err){
            setError("Error deleting posts, try again.")
        }
    }

    useEffect(() => {
        getPosts();
    }, []);

    if (error) {
        return (
          <>
            <PageHeader handleLogout={handleLogout} loggedUser={loggedUser} />
          </>
        );
      }
    
      if (loading) {
        return (
          <>
            <PageHeader handleLogout={handleLogout} loggedUser={loggedUser} />
            <Loading />
          </>
        );
      }

    return (
        <Grid centered>
            <Grid.Row>
        <Grid.Column>
          <PageHeader handleLogout={handleLogout} loggedUser={loggedUser} />
        </Grid.Column>
      </Grid.Row>
      
      <Grid.Row centered>
      <AddPostForm handleAddPost={handleAddPost}/>
        </Grid.Row>
      <Grid.Row>
        <Grid.Column centered style={{ maxWidth: 600}}>
        <DisplayPosts 
        posts={post} 
        loggedUser={loggedUser} 
        loading={loading}
        isProfile={false} 
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