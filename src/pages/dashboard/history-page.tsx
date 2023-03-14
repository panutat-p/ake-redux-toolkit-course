import { History } from '@mui/icons-material';

import { withAdminGuard } from '../../higher-order-components/with-admin-guard';

function HistoryPage() {
  return (
    <>
      <History></History>
      <div>History</div>
    </>
  );
}

export default withAdminGuard(HistoryPage);
