import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "../pages/Home";
import LoginPage from "../pages/Login";
import Blog from "../pages/Blog";
import { AuthProvider } from "./context/AuthContext";
import { BlogProvider } from "./context/BlogContext";
import ProtectedRoute from "./ProtectedRoute";
import BlogList from "../pages/BlogList";
import MenuBlog from "../pages/MenuBlog";
import Blogs from "../pages/Blogs";

// Importación de estilos (el orden se mantiene igual)
import "./styles/bootstrap.min.css";
import "./styles/bootstrap-datepicker.css";
import "./styles/jquery-ui.css";
import "./styles/jquery.fancybox.min.css";
import "./styles/owl.carousel.min.css";
import "./styles/owl.theme.default.min.css";
import "./styles/aos.css";
import "../public/fonts/flaticon/font/flaticon.css";
import "./styles/style.css";


// Componente wrapper para inyectar la ubicación al AuthProvider
const AuthProviderWrapper = ({ children }) => {
  const location = useLocation();
  return <AuthProvider location={location}>{children}</AuthProvider>;
};

function App() {
  return (
    <BrowserRouter>
      <AuthProviderWrapper>
        <BlogProvider>
          <Routes>
            {/* RUTAS PUBLICAS */}
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/blogs/blog/:id" element={<Blogs />} />

            {/* RUTAS PRIVADAS */}
            <Route element={<ProtectedRoute />}>
              <Route path="/blog" element={<MenuBlog />} />
              <Route path="/add-blog" element={<Blog />} />
              <Route path="/blog/:id" element={<Blog />} />
              <Route path="/blogs" element={<BlogList />} />
            </Route>
          </Routes>
        </BlogProvider>
      </AuthProviderWrapper>
    </BrowserRouter>
  );
}

export default App;