import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('/api/login', { email });
      setMessage(response.data.message);
    } catch (error) {
      setMessage(error);
    }
  };

  const handleVerifyOtp = async () => {
    try {
      const response = await axios.post('/api/verify-otp', { email, otp });
      setMessage(response.data.message);
    } catch (error) {
      setMessage('Invalid OTP');
    }
  };

  return (
    <div>
      <h2>Login via OTP</h2>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
      <button onClick={handleLogin}>Send OTP</button>
      <input type="text" value={otp} onChange={(e) => setOtp(e.target.value)} placeholder="Enter OTP" />
      <button onClick={handleVerifyOtp}>Verify OTP</button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Login;