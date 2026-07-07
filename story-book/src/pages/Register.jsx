import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../utils/auth";
import "../styles/auth.css";


export default function Register() {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: ""
    });


    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };


    const handleSubmit = (e) => {

        e.preventDefault();

        const otp = registerUser(formData);

        alert(`Your OTP is ${otp}`);

        navigate("/verify");

    };


    return (

        <div className="auth-container">

            <div className="auth-card">

                <h2>Create Account</h2>


                <form onSubmit={handleSubmit}>


                    <input
                        name="name"
                        placeholder="Full Name"
                        onChange={handleChange}
                        required
                    />


                    <input
                        name="email"
                        type="email"
                        placeholder="Email"
                        onChange={handleChange}
                        required
                    />


                    <input
                        name="password"
                        type="password"
                        placeholder="Password"
                        onChange={handleChange}
                        required
                    />


                    <button>
                        Register
                    </button>


                </form>


            </div>

        </div>

    )
}