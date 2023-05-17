import { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'hooks';
import { refreshUser, selectUser } from 'redux/user';
// import HomePage from 'pages/HomePage';
import LoginPage from 'pages/LoginPage';
import PrivateRoute from 'components/PrivateRoute';
import UsersPage from 'pages/UsersPage/UsersPage';
import ProductsPage from 'pages/ProductsPage';
import ServicesPage from 'pages/ServicesPage';
import SharedLayout from 'components/SharedLayout';
import VacanciesPage from 'pages/VacanciesPage';
import { Watch } from 'react-loader-spinner';
import FeedbackPage from 'pages/FeedbackPage';

function App() {
  // TODO:  Add fetch of refresh user

  const dispatch = useAppDispatch();

  const { isLoading } = useAppSelector(selectUser);

  useEffect(() => {
    dispatch(refreshUser());

    // dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    <div className="App">
      {isLoading ? (
        <Watch
          height="80"
          width="80"
          radius="48"
          color="#4fa94d"
          ariaLabel="watch-loading"
          wrapperStyle={{}}
          visible={true}
        />
      ) : (
        <Routes>
          <Route
            path="/"
            element={
              <PrivateRoute
                component={<SharedLayout />}
                auth
                redirectTo="/login"
              />
            }
          >
            <Route index element={<Navigate to="products" />} />
            <Route path="users" element={<UsersPage />} />
            <Route path="products" element={<ProductsPage />} />
            <Route path="services" element={<ServicesPage />} />
            <Route path="vacancies" element={<VacanciesPage />}>
              <Route path=":categoryName" element={<VacanciesPage />} />
            </Route>
            <Route path="resumes" element={<h1>Resumes page</h1>} />
            <Route path="feedbacks" element={<FeedbackPage />} />
          </Route>
          <Route
            path="/login"
            element={<PrivateRoute component={<LoginPage />} redirectTo="/" />}
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      )}
    </div>
  );
}

export default App;
