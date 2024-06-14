import React from 'react';

import TicketManagement from '../components/Admin /TicketManagement';

const AdminPage = ({ tickets, onAssign, onUpdateStatus }) => (
  <div>
    <h2>ADMIN DASHBOARD</h2>
    <TicketManagement tickets={tickets} onAssign={onAssign} onUpdateStatus={onUpdateStatus} />
  </div>
);

export default AdminPage;
