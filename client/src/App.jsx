import "./App.css";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Home } from "./pages/Home";
import { Profile } from "./pages/Profile";
import { Admin } from "./pages/Admin";
import { CreatePost } from "./pages/CreatePost";
import { AllBlogs } from "./pages/AllBlogs";
import { LoginPage } from "./pages/LoginPage";
import { SignupPage } from "./pages/SignUp";
import { DisplayPost} from "./pages/DisplayPost";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/dashboard" element={<Admin />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/sign-up" element={<SignupPage/>} />
        <Route path="/create-post" element={<CreatePost />} />
        <Route path="/blogs" element={<AllBlogs />} />
        <Route path="/posts/:postId" element={<DisplayPost/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;