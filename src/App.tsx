import React from 'react';
import { Routes, Route, Navigate, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/users">Users</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>
        <li>
          <Link to="/vacancies">Vacancies</Link>
        </li>
        <li>
          <Link to="/resumes">Resumes</Link>
        </li>
        <li>
          <Link to="/feedbacks">Feedbacks</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<h1>Home page</h1>} />
        <Route path="/users" element={<h1>Users page</h1>} />
        <Route path="/products" element={<h1>Products page</h1>} />
        <Route path="/services" element={<h1>Services page</h1>} />
        <Route path="/vacancies" element={<h1>Vacancies page</h1>} />
        <Route path="/resumes" element={<h1>Resumes page</h1>} />
        <Route path="/feedbacks" element={<h1>Feedbacks page</h1>} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}

export default App;
