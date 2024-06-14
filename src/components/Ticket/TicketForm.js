import React from 'react';

const TicketForm = ({ onSubmit }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const description = e.target.elements.description.value;
    const priority = e.target.elements.priority.value;
    const category = e.target.elements.category.value;
    onSubmit({ description, priority, category });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Description</label>
        <textarea name="description" required />
      </div>
      <div>
        <label>Priority</label>
        <select name="priority" required>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
      </div>
      <div>
        <label>Category</label>
        <select name="category" required>
          <option value="Technical">Technical</option>
          <option value="Billing">Billing</option>
          <option value="General Inquiry">General Inquiry</option>
        </select>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default TicketForm;
