



import React from 'react';
import './App.css';
import HomePage from './pages/HomePage';
import CoursePage from './pages/CoursePage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/course" element={<CoursePage />} />
      </Routes>
    </Router>
  );
}

export default App
