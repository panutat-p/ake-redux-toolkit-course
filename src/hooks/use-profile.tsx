import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

import { useAppSelector } from '../redux/hooks';
import { selectAuthState } from '../redux/auth-slice';
import { logout } from '../services/auth.service';

export function useProfile() {
  const navigate = useNavigate();
  const { profile } = useAppSelector(selectAuthState);

  async function handleLogOut() {
    await logout();
    toast.success('Logged out');
    navigate('/');
  }

  return { profile, handleLogOut };
}
