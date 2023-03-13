import { Home } from '@mui/icons-material';
import Typography from '@mui/material/Typography';

import { useAppSelector } from '../../redux/hooks';
import { selectAuthState } from '../../redux/auth-slice';

function HomePage() {
  const { profile } = useAppSelector(selectAuthState);

  return (
    <>
      <Home></Home>
      <Typography variant="h2" component="h2">
        Home
      </Typography>
      <Typography variant="h5">
        Welcome {profile?.firstName} {profile?.lastName}
      </Typography>
    </>
  );
}

export default HomePage;
