import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import "./css/Login.css";

import { Auth } from "../context/AuthContext";

export default function Login() {
    const navigate = useNavigate();

    const { login, isAuthenticated } = Auth();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        if (isAuthenticated) {
            navigate("/", { replace: true });
        }
    }, [isAuthenticated, navigate]);

    async function handleSubmit(e) {
        e.preventDefault();

        setLoading(true);
        setError("");

        try {
            await login(email, password);

            // Tokens are already saved by AuthContext.
            navigate("/", { replace: true });
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    }

    return (
        <main className="login-page">
            <div className="login-card">
                <h1>Welcome Back </h1>
                <p>Sign in to continue.</p>

                <form className="login-form" onSubmit={handleSubmit}>
                    <input
                        type="email"
                        placeholder="Email Address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />

                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />

                    {error && <div className="error">{error}</div>}

                    <button type="submit" disabled={loading}>
                        {loading ? "Signing In..." : "Sign In"}
                    </button>
                </form>

                <p className="login-footer">
                    Don't have an account? <Link to="/register">Register</Link>
                </p>
            </div>
        </main>
    );
}