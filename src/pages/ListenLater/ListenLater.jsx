import React, {useState, useCallback, useEffect} from "react";
import {useParams} from "react-router-dom"

import userService from "../../utils/userService"
import * as likesAPI from "../../utils/likesApi"
import * as listenlaterAPI from "../../utils/listenlaterApi"

import PageHeader from "../../components/Header/Header"
import DisplayPosts from "../../components/DisplayPosts/DisplayPosts"

export default function ListenLater({loggedUser}){
    const [posts, setPosts] = useState([]);
    const [profileUser, setProfileUser] = useState({})
    const [error, setError] = useState("");
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
    async function listenLater(postId){
        try{
            const response = await listenlaterAPI.create(postId);
            console.log(response, "<-- favoriting")
            getProfile();
        } catch(err){
            setError("Cannot save for later, try again")
        }
    }
    async function removeListenLater(listenlaterId){
        try{
            const response = await listenlaterAPI.removeListenLater(listenlaterId)
            console.log(response, "<- removing")
            getProfile();
        } catch(err){
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

    useEffect(() => {
        console.log("It is working!!")
        getProfile();
    }, [username, getProfile])

    
    return(
        <>
        <PageHeader loggedUser={loggedUser} />
        <DisplayPosts 
        posts={posts}
        numPhotosCol={1}
        isProfile={true}
        loggedUser={loggedUser}
        addLike={addLike}
        removeLike={removeLike}
        listenLater={listenLater}
        removeListenLater={removeListenLater}
        />
        <h1>Listen to these songs later</h1>
        </>

)}