import React, { useState } from 'react';
import axios from 'axios';

const PostCreate = () => {
    const [title, setTitle] = useState('');

    const onSubmit = async (event) => {
        event.preventDefault();

        await axios.post('http://localhost:4000/posts', {
            title
        });

        setTitle('');
    };

    return (
        <div style={{ padding: "20px 0" }}>
            <h1>Create Post</h1>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label>Title</label>
                    <input value={title} 
                    onChange={e => setTitle(e.target.value)} 
                    className="form-control" />
                </div>
                <button style={{marginTop: "15px"}} className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default PostCreate;