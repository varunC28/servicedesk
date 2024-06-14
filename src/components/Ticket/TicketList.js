import React from 'react';
import '../styles/TicketList.css'

const TicketList = ({ tickets }) => (
  <div>
    {tickets.map(ticket => (
      <div key={ticket._id}>
        <h3>{ticket.description}</h3>
        <p>Priority: {ticket.priority}</p>
        <p>Category: {ticket.category}</p>
        <p>Status: {ticket.status}</p>
      </div>
    ))}
  </div>
);

export default TicketList;
