import React, { ReactNode, useEffect } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { Navigate, useNavigate } from 'react-router-dom';
import { CircularProgress } from '@mui/material';

import firebaseApp from '../configs/firebase';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { selectAuthState } from '../redux/auth-slice';
import { getProfileThunk } from '../redux/auth-thunk';

type AdminGuardProps = {
  children: ReactNode;
};

function AdminGuard(props: AdminGuardProps) {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const auth = getAuth(firebaseApp);

  const { profile, isLoading } = useAppSelector(selectAuthState);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(getProfileThunk(user.uid));
      } else {
        console.log('Not log in, user:', user);
        navigate('/login');
      }
    });
    // release memory when exit this page
    return () => {
      console.log('firebase/auth, unsubscribe()');
      unsubscribe();
    };
  }, []);

  if (isLoading) {
    return <CircularProgress />;
  }

  console.log('profile?.role:', profile?.role);

  if (profile?.role !== 'admin') {
    return <Navigate to={'/deny'} />;
  }

  return <>{props.children}</>;
}

export default AdminGuard;
