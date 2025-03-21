import { Outlet } from "react-router-dom";
import Header from "./Header";
import Nav from "./Nav";
import Footer from "./Footer";

function App() {
    return (
        <div className="App">
            <Header title="React-Blog-Posts" />
            <Nav />

            {/* Main content area */}  
            <Outlet />

            <Footer />
        </div>
    );
}

export default App;




