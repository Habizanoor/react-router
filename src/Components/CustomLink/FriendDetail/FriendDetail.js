import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FriendDetail = (props) => {
    const params = useParams();
    const[friend,setFriend]=useState({});
    useEffect(()=>{
        const url =`https://jsonplaceholder.typicode.com/users/${params.friendId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setFriend(data));
        
    },[])
    return (
        <div>
            <h2>this is detail of a bondhu:{params.friendId}</h2>
            <p>Name: {friend.name}</p>
            <p>email: {friend.email}</p>
            <p>Phone: {friend.phone}</p>
            <p>city: {friend?.address?.city}</p>
            
        </div>
    );
};

export default FriendDetail;