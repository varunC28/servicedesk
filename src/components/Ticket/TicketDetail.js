import React from 'react';

const TicketDetail = ({ ticket }) => (
  <div>
    <h2>Ticket Detail</h2>
    <p>Description: {ticket.description}</p>
    <p>Priority: {ticket.priority}</p>
    <p>Category: {ticket.category}</p>
    <p>Status: {ticket.status}</p>
    <p>Comments: {ticket.comments}</p>
  </div>
);

export default TicketDetail;
