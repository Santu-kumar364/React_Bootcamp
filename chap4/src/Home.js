import React from 'react'
import { useOutletContext } from "react-router-dom";
import Feed from './Feed';

const Home = () => {
    const { searchResult } = useOutletContext(); // Get props from context
    return (
        <main className='Home'>
            {searchResult.length ? (
                <Feed posts={searchResult} />
            ) : (
                <p style={{ marginTop: "2rem" }}>
                    No posts to display.
                </p>
            )}
        </main>
    )
}

export default Home;



