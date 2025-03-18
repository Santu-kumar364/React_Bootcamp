 
import Header from './Header';
import { Footer } from './Footer';
import { Nav } from './Nav';
import { PostPage } from './PostPage';
import { NewPost } from './NewPost';
import { Home } from './Home';
import { About } from './About';
import { Missing } from './Missing';
 
function App() {
  return (
    <>
    <Header/>
    <Home/>
    <About />
    <NewPost/>
    <PostPage/>
    <Missing />
    <Footer/>
    <Nav />

     
 
    </>
  );
}

export default App;
