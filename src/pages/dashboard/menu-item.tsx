import { Fragment } from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { History, Home, People } from '@mui/icons-material';
import { NavLink, useLocation } from 'react-router-dom';

type MenuItemProps = {
  label: string;
  icon: any;
  href: string;
};
export default function MainListItems() {
  const location = useLocation();

  const menuItem: Array<MenuItemProps> = [
    { label: 'Home', icon: <Home />, href: '/dashboard' },
    { label: 'Leave', icon: <People />, href: '/dashboard/leave' },
    { label: 'History', icon: <History />, href: '/dashboard/history' },
  ];

  return (
    <Fragment>
      {menuItem.map((item) => (
        <ListItemButton
          key={item.label}
          component={NavLink}
          to={item.href}
          sx={{ backgroundColor: location.pathname === item.href ? '#81d4fa' : '' }}
        >
          <ListItemIcon>{item.icon}</ListItemIcon>
          <ListItemText primary={item.label} />
        </ListItemButton>
      ))}
    </Fragment>
  );
}
