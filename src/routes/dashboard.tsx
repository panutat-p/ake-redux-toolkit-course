import { RouteObject } from 'react-router-dom';

import DashboardLayout from '../pages/dashboard-layout';
import HomePage from '../pages/dashboard/home-page';
import LeavePage from '../pages/dashboard/leave-page';
import HistoryPage from '../pages/dashboard/history-page';

const routeDashboard: RouteObject = {
  path: '/dashboard',
  element: <DashboardLayout />,
  children: [
    {
      path: '',
      element: <HomePage />,
    },
    {
      path: 'leave',
      element: <LeavePage />,
    },
    {
      path: 'history',
      element: <HistoryPage />,
    },
  ],
};

export default routeDashboard;
