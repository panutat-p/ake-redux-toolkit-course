import AuthGuard from '../guards/auth-guard';

export const withAuthGuard = (Component: any) => (props: any) => {
  return (
    <AuthGuard>
      <Component {...props} />
    </AuthGuard>
  );
};
