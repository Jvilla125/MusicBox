import React, { useState, useCallback, useEffect} from "react";
import { useParams} from "react-router-dom"

import userService from "../../utils/userService"
import PageHeader from "../../components/Header/Header"
import DisplayPosts from "../../components/DisplayPosts/DisplayPosts"

export default function ProfilePage({loggedUser}){
    const [posts, setPosts] = useState([]);
    const [profileUser, setProfileUser] = useState({})
    const [error, setError] = useState("");

    const { username } = useParams();

    const getProfile = useCallback(async ()=>{
        try {
            const response = await userService.getUser(username);
            setProfileUser(response.data.user)
            setPosts(response.data.posts)
            console.log(response)
        } catch(err){
            console.log(err.message)
            setError("Profile does not exist! You are in the wrong place")
        }
    }, [username])

    useEffect(() =>{
        console.log("It is working!!")
        getProfile();
    }, [username, getProfile])
    return(
        <>
        <PageHeader loggedUser={loggedUser}/>
        <h1> {username}</h1>
        <DisplayPosts posts={posts}
        isProfile={true}
        loggedUser={loggedUser}
        />
        <h1>This is the profile page</h1>
        </>
    )
}