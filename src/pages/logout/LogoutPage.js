import { useDispatch } from 'react-redux';
import { logout } from '../../store/redux/auth';
import { useEffect } from 'react';

export function LogoutPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(logout());
  }, [dispatch]);

  return null;
}
