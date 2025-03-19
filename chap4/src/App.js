import Header from "./Header";
import Nav from "./Nav";
import Footer from "./Footer";
import { Outlet, useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react";
import { format } from 'date-fns';
import axios from "axios";
 

function App() {

  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [postTitle, setPostTitle] = useState('');
  const [postBody, setPostBody] = useState('');
  const [editTitle, setEditTitle] = useState('');
  const [editBody, setEditBody] = useState('');
  const navigate = useNavigate();

   const api = 'http://localhost:5000/posts';


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(api);
        setPosts(response.data);

      } catch (err) {
        if (err.response) {
          console.log(err.response.data);
          console.log(err.response.status);
          console.log(err.response.headers);
        } else {
          console.log(`Error: ${err.message}`)
        }
      }
    }

    fetchData();

  }, [])


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
      await axios.put(`${api}/${id}`, updatedPost);
      const response = await axios.get(api)
      setPosts(posts.map(post => post.id === id ? {...response.data } : post));
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
    } catch (error) {
      
    }

  }

  return (
    <div className="App">
      <Header title="React-Blog-Posts" />
      <Nav search={search} setSearch={setSearch} />

      {/* To pass the props when using router */}
      <Outlet context={{ posts, handleDelete, handleSubmit, postTitle, setPostTitle, postBody, setPostBody, searchResult, handleEdit, editBody, setEditBody, editTitle, setEditTitle }} />

      <Footer />
    </div>
  );
}

export default App;



 
