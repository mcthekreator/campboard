import { useRoutes } from 'react-router-dom';
import AuthRoutes from './auth.route';
import CustomerRoutes from './customer.route';
import UnauthorizedPage from '../pages/unauthorized-page.component';

const AppRoutes = () => {
  const unauthorizedRoute = {
    path: "/unauthorized",
    element: <UnauthorizedPage />,
  };

  return useRoutes([
    ...AuthRoutes,
    ...CustomerRoutes,
    unauthorizedRoute
  ]);
};

export default AppRoutes;
