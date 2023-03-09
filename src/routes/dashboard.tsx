import { RouteObject } from 'react-router-dom';

import DashboardLayout from '../pages/dashboard-layout';
import HomePage from '../pages/dashboard/home-page';

const routeDashboard: RouteObject = {
  path: '/dashboard',
  element: <DashboardLayout />,
  children: [
    {
      path: '',
      element: <HomePage />,
    },
  ],
};

export default routeDashboard;
