import AdminGuard from '../guards/admin-guard';

export const withAdminGuard = (Component: any) => (props: any) => {
  return (
    <AdminGuard>
      <Component {...props} />
    </AdminGuard>
  );
};
