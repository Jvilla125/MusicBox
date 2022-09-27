import React, {useState, useEffect} from "react";

import PageHeader from "../../components/Header/Header"
import AddPostForm from "../../components/AddPostForm/AddPostForm"
import DisplayPosts from "../../components/DisplayPosts/DisplayPosts"

import * as postsAPI from "../../utils/postApi"
import * as likesAPI from "../../utils/likesApi"

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
    async function handleAddPost(post){
        try{
            setLoading(true);
            const response = await postsAPI.create(post)
            console.log(response)
            setPosts([response.data, ...post]);
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

    useEffect(() => {
        getPosts();
    }, []);

    if (error) {
        return (
          <>
            <PageHeader handleLogout={handleLogout} loggedUser={loggedUser} />
            {/* <ErrorMessage error={error} />; */}
          </>
        );
      }
    
      if (loading) {
        return (
          <>
            <PageHeader handleLogout={handleLogout} loggedUser={loggedUser} />
            {/* <Loading /> */}
          </>
        );
      }

    return (<>

        <PageHeader loggedUser={loggedUser}/>
        <AddPostForm handleAddPost={handleAddPost}/>
        <DisplayPosts posts={post} loggedUser={loggedUser} isProfile={false} addLike={addLike} removeLike={removeLike}/>
        <h1>This is the Feed Page</h1>
        </>
    )
}