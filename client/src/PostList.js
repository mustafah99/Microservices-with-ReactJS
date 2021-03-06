import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CommentCreate from './CommentCreate';
import CommentList from './CommentList'

const PostList = () => {
    const [posts, setPosts] = useState({});

    const fetchPosts = async () => {
        const res = await axios.get('http://localhost:4000/posts');

        setPosts(res.data);
    };

    useEffect(() => {
        fetchPosts();
    }, []);

    const renderedPosts = Object.values(posts).map(post => {
        return (
            <div key={post.id}>
                <div className="card"
                    style={{ marginBottom: "20px" }}>
                    <div className="card-body">
                        <h3>{post.title}</h3>
                        <CommentList postId={post.id} />
                        <CommentCreate postId={post.id} />
                    </div>
                </div>
            </div>
        )
    });

    return (
        <div>
            <h1>Posts</h1>
            <div className="d-flex flex-row flex-wrap justify-content-between">
                {renderedPosts}
            </div>
        </div>
    );
}

export default PostList;