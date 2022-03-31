import React, { useEffect, useState } from 'react';
import Friend from '../Friend/Friend';

const Friends = () => {
    const [friends, setFriends]= useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setFriends(data))
    },[])
    return (
        <div>
            {
                friends.map(friend => <Friend key={friend.id} friend={friend}></Friend>)
            }
            <h2>hello friends!!! how are you?</h2>
            <p>parle kichu taka dhar dish.:{friends.length}</p>
        </div>
    );
};

export default Friends;