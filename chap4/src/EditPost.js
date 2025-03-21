import { useEffect } from 'react';
import { useParams, Link, useOutletContext, useNavigate } from 'react-router-dom';

const EditPost = () => {
    const { posts, handleEdit, editBody, setEditBody, editTitle, setEditTitle } = useOutletContext();
    const { id } = useParams();
    const navigate = useNavigate();

    const post = posts.find(post => (post.id).toString() === id);

    useEffect(() => {
        if (post) {
            setEditTitle(post.title);
            setEditBody(post.body);
        }
    }, [post, setEditTitle, setEditBody]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (post) {
            handleEdit(post.id);
            navigate('/');  // Redirect after update
        }
    };

    return (
        <main className='NewPost'>
            {post ? (
                <>
                    <h2>Edit Post</h2>
                    <form className="newPostForm" onSubmit={handleSubmit}>
                        <label htmlFor='postTitle'>Title:</label>
                        <input
                            id='postTitle'
                            type='text'
                            value={editTitle}
                            onChange={(e) => setEditTitle(e.target.value)}
                        />
                        <label htmlFor='postBody'>Post:</label>
                        <textarea
                            id='postBody'
                            required
                            value={editBody}
                            onChange={(e) => setEditBody(e.target.value)}
                        />
                        <button type='submit'>Submit</button>
                    </form>
                </>
            ) : (
                <>
                    <h2>Post Not Found</h2>
                    <p>Well, that's disappointing</p>
                    <p>
                        <Link to='/'>Visit Our Homepage</Link>
                    </p>
                </>
            )}
        </main>
    );
};

export default EditPost;

