import React from 'react';
import styles from '../styles/Post.module.css';
const Post = ({title, description, file}) => {
    return (
        <>
            <div>
                <h1>{title}</h1>
                <p>{description}</p>
                <p>{file}</p>
            </div>
        </>
    );
};

export default Post;