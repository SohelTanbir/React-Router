import React from 'react';
import { useHistory } from 'react-router';


const Post = (props)=>{
    const {id, title, body} =  props.post;
    const  history =  useHistory();

    const showComments = id =>{
        const url =  `post/${id}`;
        history.push(url);
    }

    return(
        <div>
            <h3>Post ID: {id}</h3>
            <h4>Title {title}</h4>
            <p>Description: {body}</p>

            <button onClick={()=> showComments(id)}>Show Comments</button>
        </div>
    )
}

export default Post;