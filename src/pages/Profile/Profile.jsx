import React from "react";
import PageHeader from "../../components/Header/Header"

export default function ProfilePage({loggedUser}){
    return(
        <>
        <PageHeader loggedUser={loggedUser}/>
        <h1>This is the profile page</h1>
        </>
    )
}