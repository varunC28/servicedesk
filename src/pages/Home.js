import React from 'react';
import LoginForm from '../components/Auth/LoginForm';
import RegisterForm from '../components/Auth/RegisterForm';
import '../components/styles/Home.css'; 

const Home = ({ onLogin, onRegister }) => (
  <div className="container">
    <h1>Welcome to the Service Desk</h1>
    <LoginForm onLogin={onLogin} />
    <RegisterForm onRegister={onRegister} />
  </div>
);

export default Home;
