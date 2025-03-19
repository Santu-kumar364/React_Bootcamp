import React from "react";
import { createBrowserRouter } from "react-router-dom";
import NewPost from "./NewPost";
import PostPage from "./PostPage";
import Missing from "./Missing";
import Home from "./Home";
import About from "./About";
import App from './App'
import EditPost from "./EditPost";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "about",
                element: <About />,
            },
            {
                path: "post",
                element: <NewPost />,
            },
            {
                path: "post/:id",
                element: <PostPage />,
            },
            {
                path: "*",
                element: <Missing />,
            },
            {
                path: '/edit/:id',
                element: <EditPost/>
            }
        ],
    }
]);

export default router;






