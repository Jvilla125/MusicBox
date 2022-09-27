import React from "react";
import PostCard from "../../components/PostCard/PostCard"

export default function DisplayPosts({posts, isProfile, loggedUser}){
return(
    <>
    <PostCard
    posts={posts}
    key={posts._id}
    loggedUser={loggedUser}
    isProfile={isProfile}
    />
    </>
)
}