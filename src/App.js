import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';

function App() {
  const navigate = useNavigate();
  const [mtcn, setMtcn] = useState('');
  const [error, setError] = useState('');

  const validCodes = ['12345', '67890', '11111']; // Hardcoded MTCN codes

  const handleVerify = () => {
    if (validCodes.includes(mtcn.trim())) {
      navigate('/login');
    } else {
      setError('Invalid MTCN Code');
    }
  };

  return (
    <div className="app">
      <div className="verification-box">
        <img
          src="data:image/jpeg;base64,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"
          alt="Noones Logo"
          className="logo"
        />
        <h1>MTCN VERIFICATION!</h1>
        <label htmlFor="mtcn">MTCN CODE</label>
        <input
          type="text"
          id="mtcn"
          placeholder="XXXXX"
          value={mtcn}
          onChange={(e) => setMtcn(e.target.value)}
        />
        {error && <p className="error">{error}</p>}
        <button onClick={handleVerify}>VERIFY MTCN</button>
      </div>
    </div>
  );
}

export default App;
