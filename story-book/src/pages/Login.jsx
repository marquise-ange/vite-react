import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../utils/auth";
import "../styles/auth.css";


export default function Login() {

    const navigate = useNavigate();


    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");



    const handleSubmit = (e) => {

        e.preventDefault();


        const success = loginUser(
            email,
            password
        );


        if (success) {

            alert("Login Successful");

            navigate("/home");

        } else {

            alert("Invalid email or password");

        }

    }



    return (

        <div className="auth-container">

            <div className="auth-card">


                <h2>Welcome Back</h2>


                <form onSubmit={handleSubmit}>


                    <input
                        type="email"
                        placeholder="Email"
                        onChange={(e) => setEmail(e.target.value)}
                    />


                    <input
                        type="password"
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                    />


                    <button>
                        Login
                    </button>

                    <p>
                        Don't have an account?

                        <a href="/register">
                            Register
                        </a>

                    </p>
                </form>


            </div>

        </div>

    )
}