import React from 'react'
import { useOutletContext } from 'react-router-dom';

const NewPost = () => {

    const { handleSubmit, postTitle, setPostTitle, postBody, setPostBody } = useOutletContext();

    return (
        <main className='NewPost'>
            <h2>New Post</h2>
            <form className="newPostForm" onSubmit={handleSubmit}>
                <label htmlFor='postTitle'>Title:</label>
                <input
                    id='postTitle'
                    type='text'
                    value={postTitle}
                    onChange={(e) => setPostTitle(e.target.value)}
                />
                <label htmlFor='postBody'>Post:</label>
                <textarea
                    id='postBody'
                    required
                    value={postBody}
                    onChange={(e) => setPostBody(e.target.value)}
                />
                <button type='submit'>Submit</button>
            </form>
        </main>
    )
}

export default NewPost;



