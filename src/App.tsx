import { Routes, Route, Navigate } from 'react-router-dom';
import HomePage from 'pages/HomePage';
import LoginPage from 'pages/LoginPage';
import RestrictedRoute from 'components/RestrictedRoute';
import PrivateRoute from 'components/PrivateRoute';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute component={<HomePage />} redirectTo="/login" />
          }
        >
          <Route index element={<Navigate to="products" />} />
          <Route path="users" element={<h1>Users page</h1>} />
          <Route path="products" element={<h1>Products page</h1>} />
          <Route path="services" element={<h1>Services page</h1>} />
          <Route path="vacancies" element={<h1>Vacancies page</h1>} />
          <Route path="resumes" element={<h1>Resumes page</h1>} />
          <Route path="feedbacks" element={<h1>Feedbacks page</h1>} />
        </Route>
        <Route
          path="/login"
          element={<RestrictedRoute component={<LoginPage />} redirectTo="/" />}
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}

export default App;
