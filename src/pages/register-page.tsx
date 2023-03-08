import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import YupPassword from 'yup-password';
import * as yup from 'yup';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

YupPassword(yup); // extend yup

export default function RegisterPage() {
  const schema = yup.object().shape({
    firstName: yup.string().required('first name is required'),
    lastName: yup.string().required('last name is required'),
    email: yup.string().required('email is required').email('invalid Email'),
    password: yup
      .string()
      .required('password is required')
      .min(6, 'password is too short')
      .minSymbols(1, 'special character is required')
      .minUppercase(1, 'capital letter is required'),
  });
  type FormData = yup.InferType<typeof schema>;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
    mode: 'all',
  });
  const onSubmit = (data: FormData) => console.log(data);

  return (
    <>
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'left',
          }}
        >
          <Button variant="outlined" component={Link} to="/">
            Back
          </Button>
        </Box>
        <Box
          sx={{
            marginTop: 2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Registration
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit(onSubmit)}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  {...register('firstName')}
                  error={errors.firstName ? true : false}
                  helperText={errors.firstName && errors.firstName.message}
                  fullWidth
                  label="First Name"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  {...register('lastName')}
                  error={errors.lastName ? true : false}
                  helperText={errors.lastName && errors.lastName.message}
                  fullWidth
                  label="Last Name"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  {...register('email')}
                  error={errors.email ? true : false}
                  helperText={errors.email && errors.email.message}
                  fullWidth
                  label="Email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  {...register('password')}
                  error={errors.password ? true : false}
                  helperText={errors.password && errors.password.message}
                  fullWidth
                  label="Password"
                  type="password"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
          </Box>
        </Box>
      </Container>
    </>
  );
}
