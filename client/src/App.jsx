import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Profile } from "./pages/Profile";
import { Admin } from "./pages/Admin";
import { CreatePost } from "./pages/CreatePost";
import { AllBlogs } from "./pages/AllBlogs";
import { LoginPage } from "./pages/LoginPage";
import { SignupPage } from "./pages/SignUp";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/create-post" element={<CreatePost />} />
        <Route path="/all-blogs" element={<AllBlogs />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/sign-up" element={<SignupPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;