import React, { useEffect, useState } from 'react';
import firebaseApp from '../configs/firebase';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { Navigate } from 'react-router-dom';
import DashboardLayout from '../pages/dashboard-layout';

function AuthGuard() {
  // const navigate = useNavigate();
  const auth = getAuth(firebaseApp);
  const [account, setAccount] = useState<any>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAccount(user);
      } else {
        setAccount(null);
      }
    });
    // release memory when exit this page
    return () => unsubscribe();
  }, []);

  if (account == null) {
    return <Navigate to={'/login'} />;
    // navigate('/login');
    // return <LogInPage />;
  }

  return <DashboardLayout />;
}

export default AuthGuard;
