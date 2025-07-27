import CustomerDashboardPageComponent from '../pages/customer/customer-dashboard-page.component';
import ProtectedRoute from '../components/features/protectedroute';

const CustomerRoutes = [
  {
    path: "/dashboard",
    element: (
      <ProtectedRoute requiredRole="STUDENT">
        <CustomerDashboardPageComponent />
      </ProtectedRoute>
    ),
  },
];

export default CustomerRoutes;
