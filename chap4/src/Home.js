import React from 'react'
import { useOutletContext } from "react-router-dom";
import Feed from './Feed';

const Home = () => {
    const { searchResult, fetchError, isLoading } = useOutletContext(); // Get props from context
    console.log("Fetch Error:", fetchError);
    
    return (
        <main className='Home'>
            {isLoading && <p className='statusMsg'>Loading posts...</p>}
            {!isLoading && fetchError && <p className='statusMsg' style={{ color: "red" }}>{fetchError}</p>}
            {!isLoading && !fetchError && (searchResult.length ? <Feed posts={searchResult} /> : <p className='statusMsg'>No posts to display.</p>)}

        </main>
    )
}

export default Home;



