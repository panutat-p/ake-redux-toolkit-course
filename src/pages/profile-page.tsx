import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import LoadingButton from '@mui/lab/LoadingButton';
import { ImageList, ImageListItem } from '@mui/material';

import { useProfile } from '../hooks/use-profile';
import { useAppDispatch } from '../redux/hooks';
import { getProfileThunk, updatePhotoThunk } from '../redux/auth-thunk';
import React from 'react';

export default function ProfilePage() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { profile } = useProfile();

  let isLoading = false;
  async function onSubmit() {
    try {
      isLoading = true;
      dispatch(
        updatePhotoThunk({
          userID: profile?.userID!,
          photoURL:
            'https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI=',
        })
      );
      dispatch(getProfileThunk(profile?.userID!));
      toast.success('Photo updated');
      navigate('/dashboard');
    } catch (e: any) {
      console.log(e);
      toast.error('Failed to update photo');
    } finally {
      isLoading = false;
    }
  }

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
          <Button variant="outlined" component={Link} to="/dashboard">
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
          <Avatar sx={{ m: 1, width: 150, height: 150 }} src={profile?.photoURL}></Avatar>
          <Typography component="h1" variant="h5">
            Edit Profile
          </Typography>
          <Box sx={{ mt: 3 }} />
          <Button variant="contained" component="label">
            Upload
            <input hidden accept="image/*" multiple type="file" />
          </Button>
          <Box component="form" noValidate onSubmit={onSubmit} sx={{ mt: 3 }}>
            <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
              {itemData.map((item) => (
                <ImageListItem key={item.img}>
                  <img
                    src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                    srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                    alt={item.title}
                    loading="lazy"
                  />
                </ImageListItem>
              ))}
            </ImageList>
            <LoadingButton type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }} loading={isLoading}>
              set default
            </LoadingButton>
          </Box>
        </Box>
      </Container>
    </>
  );
}

const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Breakfast',
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Burger',
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera',
  },
  {
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Coffee',
  },
  {
    img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    title: 'Hats',
  },
  {
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'Honey',
  },
  {
    img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    title: 'Basketball',
  },
  {
    img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
    title: 'Fern',
  },
  {
    img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
    title: 'Mushrooms',
  },
  {
    img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
    title: 'Tomato basil',
  },
  {
    img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
    title: 'Sea star',
  },
  {
    img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
    title: 'Bike',
  },
];
