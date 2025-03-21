import Header from "./Header";
import Nav from "./Nav";
import Footer from "./Footer";
import { Outlet, useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react";
import { format } from 'date-fns';
import axios from "axios";
import useWindowSize from "./hooks/useWindowSize";     
import useAxiosFetch from "./hooks/useAxiosFetch";
import api from "./api/url";


function App() {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [postTitle, setPostTitle] = useState('');
  const [postBody, setPostBody] = useState('');
  const [editTitle, setEditTitle] = useState('');
  const [editBody, setEditBody] = useState('');

  const navigate = useNavigate();
  const { width } = useWindowSize();
  const { data, fetchError, isLoading } = useAxiosFetch(api);

  useEffect(() => {
    setPosts(data);

  }, [data])


  useEffect(() => {
    const filteredResults = posts.filter(post =>
      ((post.body).toLowerCase()).includes(search.toLowerCase())
      || ((post.title).toLowerCase()).includes(search.toLowerCase())
    );

    setSearchResult(filteredResults.reverse());
  }, [posts, search])

  const handleSubmit = async (e) => {
    e.preventDefault();
    const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
    const datetime = format(new Date(), 'MMMM dd, yyyy pp');
    const newPost = { id, title: postTitle, datetime, body: postBody };
    try {
      const response = await axios.post(api, newPost)
      const allPosts = [...posts, response.data];
      setPosts(allPosts);
      setPostTitle('');
      setPostBody("");
      navigate('/');
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
  }

  const handleEdit = async (id) => {
    const datetime = format(new Date(), 'MMMM dd, yyyy pp');
    const updatedPost = { id, title: editTitle, datetime, body: editBody };
    try {
      const response = await axios.put(`${api}/${id}`, updatedPost);
      setPosts(posts.map(post => post.id === id ? { ...response.data } : post));
      setEditTitle('')
      setEditBody('')
      navigate('/')

    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
  }

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${api}/${id}`);
      const postsList = posts.filter(post => post.id !== id);
      setPosts(postsList);
      navigate('/');
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
  }

  return (
    <div className="App">
      <Header title="React-Blog-Posts" width={width} />
      <Nav search={search} setSearch={setSearch} />

      {/* To pass the props when using router */}
      <Outlet context={{
        posts, handleDelete, handleSubmit, postTitle,setPostTitle,
        postBody, setPostBody, searchResult, handleEdit, editBody,
        setEditBody, editTitle, setEditTitle, fetchError, isLoading
      }} />

      <Footer />
    </div>
  );
}

export default App;




