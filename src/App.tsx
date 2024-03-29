import { useState, useEffect, lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'hooks';
import { selectUser, fetchCurrentUser } from 'redux/auth';
import { Roles } from 'helpers/constants';

import PrivateRoute from 'components/PrivateRoute';
import Loader from 'components/Loader';

import ProductModalDetails from 'components/ProductModalDetails';
import ProductModalEditForm from 'components/ProductModalEditForm';
import ProductModalConfirmation from 'components/ProductModalConfirmation';
import ResumeModalDetails from 'components/ResumeModalDetails';
import ResumeModalConfirmation from 'components/ResumeModalConfirmation';
import VacanciesDashboard from 'components/VacanciesDashboard';
import VacanciesModalDetails from 'components/VacanciesModalDetails';
import VacanciesModalUpdateForm from 'components/VacanciesModalUpdateForm';
import VacanciesModalConfirm from 'components/VacanciesModalConfirm';
import ServiceModalDetails from 'components/ServiceModalDetails';
import ServiceModalEditForm from 'components/ServiceModalEditForm';
import ServiceModalConfirmation from 'components/ServiceModalConfirmation';

import RestrictedRoute from 'components/RestrictedRoute';
import UsersModalDetails from 'components/UsersModalDetails';
import UsersModalUpdateForm from 'components/UsersModalUpdateForm';
import UsersModalConfirm from 'components/UsersModalConfirm';
import FeedbackModalLayout from 'components/FeedbackModalLayout';
import FeedbackModalDetails from 'components/FeedbackModalDetails';
import FeedbackModalConfirmation from 'components/FeedbackModalConfirmation';
import LostInternetConnection from 'components/LostInternetConnection';

const LoginPage = lazy(() => import('./pages/LoginPage'));
const ProfilePage = lazy(() => import('./pages/ProfilePage'));
const UsersPage = lazy(() => import('./pages/UsersPage'));
const ProductsPage = lazy(() => import('./pages/ProductsPage'));
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const VacanciesPage = lazy(() => import('./pages/VacanciesPage'));
const ResumesPage = lazy(() => import('./pages/ResumesPage'));
const FeedbackPage = lazy(() => import('./pages/FeedbackPage'));

const SharedLayout = lazy(() => import('./components/SharedLayout'));
const ProductModalLayout = lazy(
  () => import('./components/ProductModalLayout')
);
const ResumeModalLayout = lazy(() => import('./components/ResumeModalLayout'));
const VacanciesModalLayout = lazy(
  () => import('./components/VacanciesModalLayout')
);
const ServiceModalLayout = lazy(
  () => import('./components/ServiceModalLayout')
);
const UsersModalLayout = lazy(() => import('./components/UsersModalLayout'));

function App() {
  const dispatch = useAppDispatch();
  const { isLoading } = useAppSelector(selectUser);
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    dispatch(fetchCurrentUser());
    const handleStatusChange = () => {
      setIsOnline(navigator.onLine);
    };
    window.addEventListener('online', handleStatusChange);
    window.addEventListener('offline', handleStatusChange);

    return () => {
      window.removeEventListener('online', handleStatusChange);
      window.removeEventListener('offline', handleStatusChange);
    };
  }, [dispatch, isOnline]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <Suspense fallback={<Loader />}>
      {isOnline ? (
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
            <Route index element={<Navigate to="/products" />} />
            <Route path="profile" element={<ProfilePage />} />
            <Route
              path="users"
              element={
                <RestrictedRoute
                  component={<UsersPage />}
                  redirectTo="/products"
                />
              }
            >
              <Route path=":userId" element={<UsersModalLayout />}>
                <Route index element={<UsersModalDetails />} />
                <Route path="form" element={<UsersModalUpdateForm />} />
                <Route path="confirm" element={<UsersModalConfirm />} />
                <Route path="*" element={<Navigate to="/users" replace />} />
              </Route>
            </Route>
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
                      redirectTo="/services"
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
                  <Route
                    path="form"
                    element={
                      <RestrictedRoute
                        component={<VacanciesModalUpdateForm />}
                        accessRight={Roles.applyManager}
                        redirectTo="/vacancies"
                      />
                    }
                  />
                  <Route
                    path="confirm"
                    element={
                      <RestrictedRoute
                        component={<VacanciesModalConfirm />}
                        accessRight={Roles.applyManager}
                        redirectTo="/vacancies"
                      />
                    }
                  />
                  <Route
                    path="*"
                    element={<Navigate to="/vacancies" replace />}
                  />
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
            >
              <Route path=":feedbackId" element={<FeedbackModalLayout />}>
                <Route index element={<FeedbackModalDetails />} />
                <Route path="confirm" element={<FeedbackModalConfirmation />} />
                <Route
                  path="*"
                  element={<Navigate to="/feedbacks" replace />}
                />
              </Route>
            </Route>
          </Route>
          <Route
            path="/login"
            element={<PrivateRoute component={<LoginPage />} redirectTo="/" />}
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      ) : (
        <LostInternetConnection />
      )}
    </Suspense>
  );
}

export default App;
