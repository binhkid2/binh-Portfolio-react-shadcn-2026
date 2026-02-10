  
import Home from '@/pages';
import AboutPage from '@/pages/about';
import ContactPage from '@/pages/contact';
import ErrorPage from '@/pages/error';
import ProjectsPage from '@/pages/projects';
import React from 'react';
import { Routes, Route } from 'react-router-dom'; 
 

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      {/* Public routes */}
      <Route path="/" element={<Home />} /> 
      <Route path="*" element={<ErrorPage />} />
      <Route path="/projects" element={<ProjectsPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} /> 
       

    </Routes>
  );
};

export default AppRoutes;