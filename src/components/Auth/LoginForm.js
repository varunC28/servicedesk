import React from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from './firebase';
import { signInWithEmailAndPassword } from "firebase/auth";

const LoginForm = ({ onLogin }) => {
  const navigate = useNavigate();

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      const userData = { email: user.email, uid: user.uid, isAdmin: true };
      console.log(userData)
      onLogin(userData);

      if(userData.isAdmin == false) {
        navigate('/admin');
      } else {
        navigate('/dashboard');
      }
      
    } catch (error) {
      console.error('Error logging in:', error);
      alert("Failed to log in, please try again");
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLoginSubmit}>
        <div>
          <label>Email</label>
          <input type="email" name="email" required />
        </div>
        <div>
          <label>Password</label>
          <input type="password" name="password" required />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
