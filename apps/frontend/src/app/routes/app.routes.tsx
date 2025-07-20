import { useRoutes } from 'react-router-dom';
import AuthRoutes from './auth.route';
const AppRoutes = () => {
  return useRoutes([...AuthRoutes,]);
};

export default AppRoutes;