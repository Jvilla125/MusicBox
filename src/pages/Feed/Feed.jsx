import React from "react";
import PageHeader from "../../components/Header/Header"
import AddPostForm from "../../components/AddPostForm/AddPostForm"
export default function Feed({loggedUser}){
    const [post, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    async function hanldeAddPost(post){
        try{
            setLoading(true);
            const response = await postsAPI.create(post)
            console.log(response)
            setPosts([response.data, ...posts]);
            setLoading(false);
        } catch(err){
            setError('Error creating post, please try again')
        }
    }



    return (<>




        <PageHeader loggedUser={loggedUser}/>
        <AddPostForm/>
        <h1>This is the Feed Page</h1>
        </>
    )
}