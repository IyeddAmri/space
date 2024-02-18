'use client';
import React, { useState } from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { auth, GoogleAuthProvider } from '../Firebase/config'; 
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
      router.push('/HomePage');
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
      router.push('/HomePage');
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
          Sign In 🔓
        </button>
        <button
          onClick={handleGoogleSignUp}
          className="custom-button"
        >
          Sign in with Google <svg  className="g"fill="none" viewBox="0 0 80 39" height="39" width="80" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_134_34)">
<path fill="#4285F4" d="M25.9 17.7C25.9 16.8 25.8 15.9 25.7 15H13.2V20.1H20.3C20 21.7 19.1 23.2 17.7 24.1V27.4H22C24.5 25.1 25.9 21.7 25.9 17.7Z"></path>
<path fill="#34A853" d="M13.1999 30.5999C16.7999 30.5999 19.7999 29.3999 21.9999 27.3999L17.6999 24.0999C16.4999 24.8999 14.9999 25.3999 13.1999 25.3999C9.7999 25.3999 6.7999 23.0999 5.7999 19.8999H1.3999V23.2999C3.6999 27.7999 8.1999 30.5999 13.1999 30.5999Z"></path>
<path fill="#FBBC04" d="M5.8001 19.8999C5.2001 18.2999 5.2001 16.4999 5.8001 14.7999V11.3999H1.4001C-0.499902 15.0999 -0.499902 19.4999 1.4001 23.2999L5.8001 19.8999Z"></path>
<path fill="#EA4335" d="M13.2 9.39996C15.1 9.39996 16.9 10.1 18.3 11.4L22.1 7.59996C19.7 5.39996 16.5 4.09996 13.3 4.19996C8.3 4.19996 3.7 6.99996 1.5 11.5L5.9 14.9C6.8 11.7 9.8 9.39996 13.2 9.39996Z"></path>
</g>
<defs>
<clipPath id="clip0_134_34">
<rect fill="white" height="38.1" width="80"></rect>
</clipPath>
</defs>
</svg>
        </button>
      </div>
      <div className="background-video">
<video autoPlay loop muted playsInline>
<source src="/bb.mov" type="video/mp4" />    
</video>
</div>
    </div>
  );
};

export default SignIn;

