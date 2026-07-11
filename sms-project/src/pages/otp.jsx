import { useState } from "react";
import { useNavigate } from "react-router-dom";
import otpVerification from "../API/OTP/otp";
import './css/Verification.css'


export default function Verification() {

    const[loading, setLoading] = useState(false);
    const[email, setEmail] = useState('');
    const[otp, setOtp] = useState('');
    const[error, setError] = useState(null);
    const navigate = useNavigate();

    async function handleSubmit(e) {
      e.preventDefault();
    
      setLoading(true);
      setError(null);
    
      try {
        const data = await otpVerification(email, otp);
        navigate('/login')
        console.log(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
return (
  <main className="verification-page">
    <div className="verification-card">
      <div className="verification-header">
        <h1>Email Verification</h1>
        <p>Enter the verification code sent to your email.</p>
      </div>

      <form onSubmit={handleSubmit} className="verification-form">
        <div className="input-group">
          <label>Email Address</label>
          <input
            type="email"
            placeholder="name@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="input-group">
          <label>Verification Code</label>
          <input
            className="otp-input"
            type="text"
            placeholder="123456"
            maxLength={6}
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            required
          />
        </div>

        {error && <div className="error">{error}</div>}

        <button type="submit" disabled={loading}>
          {loading ? "Verifying..." : "Verify Email"}
        </button>

        <div className="info">
          Didn't receive the code? <span>Resend OTP</span>
        </div>
      </form>
    </div>
  </main>
);
}