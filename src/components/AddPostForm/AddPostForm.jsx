import React, { useState } from "react";
import { Button, Form, Segment, Popup, Icon} from "semantic-ui-react";

export default function AddPostForm(props) {

    const [state, setState] = useState({
        song: "",
        artist: "",
        genre: "",
        mood: ""
    })

    const [selectedFile, setSelectedFile] = useState("");

    function handleChange(e){
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }

    function handleImageInput(e){
        setSelectedFile(e.target.files[0])
    }

    function handleSubmit(e){
        e.preventDefault();
        const formData = new FormData();
        formData.append('photo', selectedFile)
        for (let value in state){
            formData.append(value, state[value])
        }
        console.log(formData.forEach((item) => console.log(item)), "<- this is each value" )
        props.handleAddPost(formData);
    
    }
    return (
        <>
    <Popup content={
            <Segment style={{ maxWidth: 450 }} position="center">
                <Form onSubmit={handleSubmit}>
                    <Form.Input
                        name="song"
                        value={state.song}
                        placeholder="Song"
                        onChange={handleChange}
                    />
                    <Form.Input
                        name="artist"
                        value={state.artist}
                        placeholder="Artist"
                        onChange={handleChange}
                    />
                    <Form.Input
                        name="genre"
                        value={state.genre}
                        placeholder="Genre"
                        onChange={handleChange}
                    />
                    <Form.Input
                        name="mood"
                        value={state.mood}
                        placeholder="mood"
                        onChange={handleChange}
                    />
                    <Form.Field>
                        <Form.Input
                            type="file"
                            name="photo"
                            placeholder="upload image"
                            onChange={handleImageInput}
                        />
                    </Form.Field>
                    <Button type="submit" onClick={handleSubmit}>
                        Submit Post!
                    </Button>
                </Form>
            </Segment>
    }
    on="click"
    positionFixed
    trigger={<Button animated="vertical" size="large">
        <Button.Content visible>
        <Icon name="add square" color="blue" size="large"/>
        </Button.Content>
        <Button.Content hidden>
            Add a Post!
        </Button.Content>
        </Button>}
    />
        </>
    )
}