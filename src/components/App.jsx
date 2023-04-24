import { Routes, Route, Navigate, Link, Outlet } from 'react-router-dom';

export const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <h1>Home page</h1>
            <ul>
              <li>
                <Link to="users">To Users</Link>
              </li>
              <li>
                <Link to="products">To Products</Link>
              </li>
              <li>
                <Link to="services">To Services</Link>
              </li>
              <li>
                <Link to="vacancies">To Vacancies</Link>
              </li>
              <li>
                <Link to="resumes">To Resumes</Link>
              </li>
              <li>
                <Link to="feedbacks">To Feedbacks</Link>
              </li>
            </ul>
            <Outlet />
          </>
        }
      >
        <Route index element={<Navigate to="users" replace />} />
        <Route path="users" element={<h2>Users subpage</h2>} />
        <Route path="products" element={<h2>Products subpage</h2>} />
        <Route path="services" element={<h2>Services subpage</h2>} />
        <Route path="vacancies" element={<h2>Vacancies subpage</h2>} />
        <Route path="resumes" element={<h2>Resumes subpage</h2>} />
        <Route path="feedbacks" element={<h2>Feedbacks subpage</h2>} />
      </Route>
      <Route path="/login" element={<h1>Users page</h1>} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};
