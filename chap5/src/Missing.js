import React from 'react'
import { Link } from 'react-router-dom';

const Missing = () => {
    return (
        <main>
            <h2>Post Not Found</h2>
            <p>Well, that's dissappointing</p>
            <p>
                <Link to='/'>Visit Our Homepage</Link>
            </p>
        </main>
    )
}


export default Missing;