import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import { Home } from "./pages/Home";
import { Profile } from "./pages/Profile";
import { Admin } from "./pages/Admin";
import { CreatePost } from "./pages/CreatePost";
import { AllBlogs } from "./pages/AllBlogs";

function App() {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/profile">Profile</Link>
          <Link to="/ad">Admin Dashboard</Link>
          <Link to="/cp">CreatePost</Link>
          <Link to="/ab">AllBlogs</Link> 
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/ad" element={<Admin />} />
          <Route path="/cp" element={<CreatePost />} />
          <Route path="/ab" element={<AllBlogs />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
