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
import FeedbackPage from 'pages/FeedbackPage';

import ButtonUp from 'components/ButtonUp';
import Loader from 'components/Loader';

import ProductModalLayout from 'components/ProductModalLayout';
import ProductModalDetails from 'components/ProductModalDetails';
import ProductModalEditForm from 'components/ProductModalEditForm';
import ProductModalConfirmation from 'components/ProductModalConfirmation';
import VacanciesDashboard from 'components/Vacancies/VacanciesDashboard';
import VacanciesModalLayout from 'components/VacanciesModalLayout';
import VacanciesModalDetails from 'components/VacanciesModalDetails';
import VacanciesModalUpdateForm from 'components/VacanciesModalUpdateForm';
import VacanciesModalConfirm from 'components/VacanciesModalConfirm';

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
        <Loader top="" />
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
            <Route path="products" element={<ProductsPage />}>
              <Route path=":productId" element={<ProductModalLayout />}>
                <Route index element={<ProductModalDetails />} />
                <Route path="form" element={<ProductModalEditForm />} />
                <Route path="confirm" element={<ProductModalConfirmation />} />
                <Route path="*" element={<Navigate to="/products" replace />} />
              </Route>
            </Route>
            <Route path="services" element={<ServicesPage />} />
            <Route path="vacancies" element={<VacanciesPage />}>
              <Route index element={<Navigate to="all-vacancies" replace />} />
              <Route path=":categoryName" element={<VacanciesDashboard />} />
              <Route
                path="details/:vacanciesId"
                element={<VacanciesModalLayout />}
              >
                <Route index element={<VacanciesModalDetails />} />
                <Route path="form" element={<VacanciesModalUpdateForm />} />
                <Route path="confirm" element={<VacanciesModalConfirm />} />
                <Route
                  path="*"
                  element={<Navigate to="/vacancies" replace />}
                />
              </Route>
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
      <ButtonUp />
    </div>
  );
}

export default App;
