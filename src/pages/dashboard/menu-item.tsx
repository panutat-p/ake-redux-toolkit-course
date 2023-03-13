import { Fragment } from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import { History, People } from '@mui/icons-material';

type MenuItemProps = {
  label: string;
  icon: any;
  href: string;
};
export default function MainListItems() {
  const menuItem: Array<MenuItemProps> = [
    { label: 'Home', icon: <DashboardIcon />, href: '/dashboard' },
    { label: 'Leave', icon: <People />, href: '/dashboard' },
    { label: 'History', icon: <History />, href: '/dashboard' },
  ];

  return (
    <Fragment>
      {menuItem.map((item) => (
        <ListItemButton key={item.label}>
          <ListItemIcon>{item.icon}</ListItemIcon>
          <ListItemText primary={item.label} />
        </ListItemButton>
      ))}
    </Fragment>
  );
}
