import React from 'react';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    return (
        <div>
            <nav style={{display:'flex', justifyContent:"center"}}>
                {/* <Link to="/">Home</Link>
                <Link to="/friends">Friends</Link>
                <Link to="/about">About</Link> */}
              
                <CustomLink to="/">Home</CustomLink>
                <CustomLink to="/friends">Friends</CustomLink>
                <CustomLink to="/about">About</CustomLink>
                <CustomLink to="/posts">Posts</CustomLink>
            </nav>
        </div>
    );
};

export default Header;