import { Outlet, Navigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import toast from 'react-hot-toast';

export const PrivateRoute = ({ path, ...props }) => {
   const {
      authState: { token },
   } = useAuth();

   return token ? (
      <Outlet {...props} path={path} />
   ) : (
      toast.error('Please Login To Continue...'),
      <Navigate state={{ from: path }} replace to='/login' />
   );
};
