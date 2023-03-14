import { RouteObject } from 'react-router-dom';

import HomePage from '../pages/dashboard/home-page';
import LeavePage from '../pages/dashboard/leave-page';
import HistoryPage from '../pages/dashboard/history-page';
import AuthGuard from '../guards/auth-guard';
import DashboardLayout from '../pages/dashboard-layout';

const routeDashboard: RouteObject = {
  path: '/dashboard',
  element: (
    <AuthGuard>
      <DashboardLayout />
    </AuthGuard>
  ),
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
