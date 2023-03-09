import { createBrowserRouter } from 'react-router-dom';

import HomePage from '../pages/home-page';
import RegisterPage from '../pages/register-page';
import routeDashboard from './dashboard';
import LogInPage from '../pages/log-in-page';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/register',
    element: <RegisterPage />,
  },
  {
    path: '/login',
    element: <LogInPage />,
  },
  routeDashboard,
]);

export default router;
