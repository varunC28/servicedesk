import React from "react";

const TicketManagement = ({ tickets, onAssign, onUpdateStatus }) => (
  <div>
    <h2>Ticket Management</h2>

    {tickets.map((ticket) => (
      <div key={ticket._id}>
        <h3>{ticket.description}</h3>
        <p>Priority: {ticket.priority}</p>
        <p>Category: {ticket.category}</p>
        <p>Status: {ticket.status}</p>
        <button onClick={() => onAssign(ticket._id)}>Assign</button>
        <button onClick={() => onUpdateStatus(ticket._id, "In Progress")}>
          Starting the process 
        </button>
        <button onClick={() => onUpdateStatus(ticket._id, "Resolved")}>
          Ticket Resolved
        </button>
      </div>
    ))}
  </div>
);

export default TicketManagement;
