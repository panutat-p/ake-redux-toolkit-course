import { createBrowserRouter } from 'react-router-dom';

import routeDashboard from './dashboard';
import HomePage from '../pages/home-page';
import RegisterPage from '../pages/register-page';
import ProfilePage from '../pages/profile-page';
import LogInPage from '../pages/log-in-page';
import DenyPage from '../pages/deny-page';

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
    path: '/profile',
    element: <ProfilePage />,
  },
  {
    path: '/login',
    element: <LogInPage />,
  },
  {
    path: '/deny',
    element: <DenyPage />,
  },
  routeDashboard,
]);

export default router;
