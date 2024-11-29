import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import CategoryPage from './components/CategoryPage';
import ProductCard from './components/ProductCard';



const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/category" element={<CategoryPage />} />
        
      </Routes>
    </Router>
  );
};

export default App;
