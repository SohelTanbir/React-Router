import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const PostDetails = () => {
    const { id } =  useParams();
    const [postDetails, setPostDetails ] = useState({});
    
    useEffect(()=>{
        const url =  `https://jsonplaceholder.typicode.com/posts/${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setPostDetails(data));
    }, [])
    return (
        <div>
            <h2>Post ID: {postDetails.id}</h2>
            <h4>Title: {postDetails.title}</h4>
            <p>{postDetails.body}</p>
        </div>
    );
};

export default PostDetails;