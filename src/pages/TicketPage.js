import React from 'react';
import { useParams } from 'react-router-dom';
import TicketDetail from '../components/Ticket/TicketDetail';

const TicketPage = ({ tickets }) => {
  const { id } = useParams();
  const ticket = tickets.find(t => t._id === id);

  return (
    <div>
      {ticket ? <TicketDetail ticket={ticket} /> : <p>Ticket not found</p>}
    </div>
  );
};

export default TicketPage;
