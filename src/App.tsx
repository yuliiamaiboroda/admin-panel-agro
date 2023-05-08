import { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAppDispatch } from 'hooks';
import { refreshUser } from 'redux/user';
import HomePage from 'pages/HomePage';
import LoginPage from 'pages/LoginPage';
import PrivateRoute from 'components/PrivateRoute';
import UsersPage from 'pages/UsersPage/UsersPage';

function App() {
  // TODO:  Add fetch of refresh user

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute component={<HomePage />} auth redirectTo="/login" />
          }
        >
          <Route index element={<Navigate to="products" />} />
          <Route path="users" element={<UsersPage />} />
          <Route path="products" element={<h1>Products page</h1>} />
          <Route path="services" element={<h1>Services page</h1>} />
          <Route path="vacancies" element={<h1>Vacancies page</h1>} />
          <Route path="resumes" element={<h1>Resumes page</h1>} />
          <Route path="feedbacks" element={<h1>Feedbacks page</h1>} />
        </Route>
        <Route
          path="/login"
          element={
            <PrivateRoute
              component={<LoginPage />}
              auth={false}
              redirectTo="/"
            />
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}

export default App;
