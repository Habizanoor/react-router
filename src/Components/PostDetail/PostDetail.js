import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


const PostDetail = () => {
    const params = useParams();
    const [post,setPost] = useState([]);
    useEffect(()=>{
        const url = `https://jsonplaceholder.typicode.com/posts/${params.postId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setPost(data))
    },[params.postId])
    return (
        <div>
            <h4>this is post detail for:{params.postId}</h4>
            <h5>Title: {post.title}</h5>
            <p>{post.body}</p>
        </div>
    );
};

export default PostDetail;