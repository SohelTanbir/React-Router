import React, { useEffect, useState } from 'react';
import Post from '../Post/Post';

const Home = () => {
    const [posts, setPost] = useState([])
    useEffect(()=>{
        const url = `https://jsonplaceholder.typicode.com/posts`;
        fetch(url)
        .then(res =>  res.json())
        .then(data => setPost(data))
    }, [])
    return (
        <div>
           {
               posts.map( post => <Post post={post} />)
           }
        </div>
    );
};

export default Home;