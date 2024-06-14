// LoginForm.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { auth, firestore } from './firebase'; // Adjust path as necessary

const LoginForm = ({ onLogin }) => {
  const navigate = useNavigate();

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Fetch user role from Firestore
      const userDoc = await getDoc(doc(firestore, "users", user.uid)); // Correctly reference firestore here
      if (userDoc.exists()) {
        const userData = { email: user.email, uid: user.uid, ...userDoc.data() };
        console.log(userData);
        onLogin(userData);

        if (userData.isAdmin) {
          navigate('/admin');
        } else {
          navigate('/dashboard');
        }
      } else {
        console.error("No such document!");
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
