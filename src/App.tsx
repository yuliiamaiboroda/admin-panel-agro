import { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'hooks';
import { refreshUser, selectUser } from 'redux/user';
import { Roles } from 'helpers/constants';
import LoginPage from 'pages/LoginPage';
import PrivateRoute from 'components/PrivateRoute';
import UsersPage from 'pages/UsersPage/UsersPage';
import ProductsPage from 'pages/ProductsPage';
import ServicesPage from 'pages/ServicesPage';
import SharedLayout from 'components/SharedLayout';
import VacanciesPage from 'pages/VacanciesPage';
import FeedbackPage from 'pages/FeedbackPage';
import Loader from 'components/Loader';

import ProductModalLayout from 'components/ProductModalLayout';
import ProductModalDetails from 'components/ProductModalDetails';
import ProductModalEditForm from 'components/ProductModalEditForm';
import ProductModalConfirmation from 'components/ProductModalConfirmation';
import ResumesPage from 'pages/ResumesPage';
import ResumeModalLayout from 'components/ResumeModalLayout';
import ResumeModalDetails from 'components/ResumeModalDetails';
import ResumeModalConfirmation from 'components/ResumeModalConfirmation';
import VacanciesDashboard from 'components/Vacancies/VacanciesDashboard';
import VacanciesModalLayout from 'components/VacanciesModalLayout';
import VacanciesModalDetails from 'components/VacanciesModalDetails';
import VacanciesModalUpdateForm from 'components/VacanciesModalUpdateForm';
import VacanciesModalConfirm from 'components/VacanciesModalConfirm';
import ServiceModalLayout from 'components/ServiceModalLayout';
import ServiceModalDetails from 'components/ServiceModalDetails';
import ServiceModalEditForm from 'components/ServiceModalEditForm';
import ServiceModalConfirmation from 'components/ServiceModalConfirmation';

import RestrictedRoute from 'components/RestrictedRoute';

function App() {
  // TODO:  Add fetch of refresh user

  const dispatch = useAppDispatch();

  const { isLoading } = useAppSelector(selectUser);

  useEffect(() => {
    dispatch(refreshUser());

    // dispatch(fetchCurrentUser());
  }, [dispatch]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <Routes>
      <Route
        path="/"
        element={
          <PrivateRoute component={<SharedLayout />} auth redirectTo="/login" />
        }
      >
        <Route index element={<Navigate to="products" />} />
        <Route
          path="users"
          element={<RestrictedRoute component={<UsersPage />} />}
        />
        <Route path="products" element={<ProductsPage />}>
          <Route path=":productId" element={<ProductModalLayout />}>
            <Route index element={<ProductModalDetails />} />
            <Route
              path="form"
              element={
                <RestrictedRoute
                  component={<ProductModalEditForm />}
                  accessRight={Roles.productsManager}
                  redirectTo="/products"
                />
              }
            />
            <Route
              path="confirm"
              element={
                <RestrictedRoute
                  component={<ProductModalConfirmation />}
                  accessRight={Roles.productsManager}
                  redirectTo="/products"
                />
              }
            />
            <Route path="*" element={<Navigate to="/products" replace />} />
          </Route>
        </Route>
        <Route path="services" element={<ServicesPage />}>
          <Route path=":serviceId" element={<ServiceModalLayout />}>
            <Route index element={<ServiceModalDetails />} />
            <Route
              path="form"
              element={
                <RestrictedRoute
                  component={<ServiceModalEditForm />}
                  accessRight={Roles.servicesManager}
                  redirectTo="/services"
                />
              }
            />
            <Route
              path="confirm"
              element={
                <RestrictedRoute
                  component={<ServiceModalConfirmation />}
                  accessRight={Roles.servicesManager}
                  redirectTo="/products"
                />
              }
            />
            <Route path="*" element={<Navigate to="/services" replace />} />
          </Route>
        </Route>
        <Route path="vacancies" element={<VacanciesPage />}>
          <Route index element={<Navigate to="all-vacancies" replace />} />
          <Route path=":categoryName" element={<VacanciesDashboard />}>
            <Route path=":vacanciesId" element={<VacanciesModalLayout />}>
              <Route index element={<VacanciesModalDetails />} />
              <Route path="form" element={<VacanciesModalUpdateForm />} />
              <Route path="confirm" element={<VacanciesModalConfirm />} />
              <Route path="*" element={<Navigate to="/vacancies" replace />} />
            </Route>
          </Route>
        </Route>
        <Route
          path="resumes"
          element={
            <RestrictedRoute
              component={<ResumesPage />}
              accessRight={Roles.applyManager}
            />
          }
        >
          <Route path=":resumeId" element={<ResumeModalLayout />}>
            <Route index element={<ResumeModalDetails />} />
            <Route path="confirm" element={<ResumeModalConfirmation />} />
            <Route path="*" element={<Navigate to="/resumes" replace />} />
          </Route>
        </Route>
        <Route
          path="feedbacks"
          element={<RestrictedRoute component={<FeedbackPage />} />}
        />
      </Route>
      <Route
        path="/login"
        element={<PrivateRoute component={<LoginPage />} redirectTo="/" />}
      />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
