import { useAuthStore } from './store/auth.store';
import AppRoutes from './routes/app.routes';

import { ToastContainer } from 'react-toastify';
import LoaderModal from './components/features/loader-modal.component';

export function App() {
  const { loading } = useAuthStore();

  return (
  <>
   <AppRoutes/>
   <ToastContainer/>
   <LoaderModal isOpen={loading} loaderType="bars" />
   
  </>
  );
}

export default App;
