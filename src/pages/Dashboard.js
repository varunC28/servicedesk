import React from 'react';
import TicketForm from '../components/Ticket/TicketForm';
import TicketList from '../components/Ticket/TicketList';
import '../components/styles/Dashboard.css'

const Dashboard = ({ tickets, onSubmitTicket, userData }) => {

  if (!userData) {
    console.error('User data is not available');
    return <div>Loading...</div>;
  }
  console.log(userData.uid);
  

  const userTickets = tickets.filter(ticket => ticket.userId === userData.uid);
  // console.log('User:', userData);
  console.log('User Tickets:', userTickets);

  return (
    <div>
      <h2>User Dashboard</h2>
      <TicketForm onSubmit={onSubmitTicket} />
      <TicketList tickets={userTickets} />
      {/* receive updates, and provide additional information if required. */}
    </div>
  );
};

export default Dashboard;
