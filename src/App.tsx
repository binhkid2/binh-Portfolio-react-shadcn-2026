import Layout from "./components/Layout";
import { Routes, Route } from "react-router-dom";
import { Home } from "./page"; 
import { ToastContainer } from 'react-toastify';   
import 'react-toastify/dist/ReactToastify.css';   
import ProjectsPage from "./page/projects";
import AboutPage from "./page/about";
import ContactPage from "./page/contact";
import ErrorPage from "./page/error";
export function App() {
  return (
   <>
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} /> 
           <Route path="/projects" element={<ProjectsPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} /> 
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Layout>
      <ToastContainer />
   </>
  );
}