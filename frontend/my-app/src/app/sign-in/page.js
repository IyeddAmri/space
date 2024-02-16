'use client';
import React, { useState } from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { auth, GoogleAuthProvider } from '../firebase/config'; 
import { useRouter } from 'next/navigation';
import './in.css';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);
  const [signInWithGoogle] = useSignInWithGoogle(auth); 

  const router = useRouter();

  const handleSignIn = async () => {
    try {
      // Validate email and password
      if (!email || !password) {
        alert("Please enter both email and password.");
        return;
      }

      // Sign in with email and password
      const res = await signInWithEmailAndPassword(email, password);
      console.log({ res });
      sessionStorage.setItem('user', true);
      setEmail('');
      setPassword('');
      router.push('/');
      alert("Sign in successful");
    } catch (e) {
      console.error(e);
      alert("Incorrect email or password. Please try again.");
    }
  };

  const handleGoogleSignUp = async () => {
    try {
      // Sign in with Google
      const res = await signInWithGoogle(GoogleAuthProvider);
      console.log({ res });
      sessionStorage.setItem('user', true);
      router.push('/');
    } catch (e) {
      console.error(e);
      alert("Sign in with Google failed. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="custom-container">
        <h1 className="custom-title">Sign In</h1>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="custom-input"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="custom-input"
        />
        <button
          onClick={handleSignIn}
          className="custom-button"
        >
          Sign In
        </button>
        <button
          onClick={handleGoogleSignUp}
          className="custom-button"
        >
          Sign in with Google
        </button>
      </div>
    </div>
  );
};

export default SignIn;
