import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import TicketPage from './pages/TicketPage';
import AdminPage from './pages/AdminPage';

const App = () => {
  // tickets array to hold ticket information.
  const [tickets, setTickets] = useState([]);
  // Object to store logged-in user data.
  const [user, setUser] = useState(null);
  // Boolean to check if the logged-in user is an admin.
  const [isAdmin, setIsAdmin] = useState();
  const [status, setStatus] = useState();

  console.log(tickets);

  // Handle user login - Sets the user data and checks if the user is an admin.
  const handleLogin = async (userData) => {
    setUser(userData);
    setIsAdmin(userData.isAdmin);
    console.log(userData);
    console.log(isAdmin);
  };

  // Handle user registration - Sets the user data upon registration.
  const handleRegister = async (userData) => {
    setUser(userData);
  };

  // Handle ticket submission - Adds a new ticket to the tickets array.
  const handleSubmitTicket = (ticketData) => {
    // console.log(userData);
    const newTicket = { ...ticketData, _id: Date.now().toString(), userId: user.uid, status: 'Ticket raised' }; // Assign unique ID and user ID
    setTickets([...tickets, newTicket]);
    console.log(tickets);
  };

  // Handle ticket assignment (admin functionality)
  const handleAssignTicket = (ticketId) => {
    const updatedTickets = tickets.map(ticket => 
      ticket._id === ticketId ? { ...ticket, status: 'Assigned' } : ticket
    );
    setTickets(updatedTickets);
    console.log(`Ticket with ID ${ticketId} assigned.`);
    setStatus(`Ticket with ID ${ticketId} assigned.`);
  };

  // Handle ticket status update (admin functionality)
  const handleUpdateTicketStatus = (ticketId, status) => {
    const updatedTickets = tickets.map(ticket => 
      ticket._id === ticketId ? { ...ticket, status } : ticket
    );
    setTickets(updatedTickets);
    console.log(`Ticket with ID ${ticketId} updated to status: ${status}`);
    setStatus(`Ticket with ID ${ticketId} updated to status: ${status}`);
  };

  console.log(tickets);
  console.log(status);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home onLogin={handleLogin} onRegister={handleRegister} />} />
        <Route path="/dashboard" element={<Dashboard tickets={tickets} onSubmitTicket={handleSubmitTicket} userData={user} />} />
        <Route path="/ticket/:id" element={<TicketPage tickets={tickets} />} />
        {isAdmin && (
          <Route path="/admin" element={<AdminPage tickets={tickets} onAssign={handleAssignTicket} onUpdateStatus={handleUpdateTicketStatus} />} />
        )}
      </Routes>
    </Router>
  );
};

export default App;
