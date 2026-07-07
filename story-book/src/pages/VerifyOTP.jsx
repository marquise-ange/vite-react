import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { verifyUser } from "../utils/auth";
import "../styles/auth.css";


export default function VerifyOTP() {

    const [otp, setOtp] = useState("");

    const navigate = useNavigate();


    const handleSubmit = (e) => {

        e.preventDefault();


        const verified = verifyUser(otp);


        if (verified) {

            alert("Account Verified!");

            navigate("/login");

        } else {

            alert("Wrong OTP");

        }

    }



    return (

        <div className="auth-container">

            <div className="auth-card">

                <h2>Email Verification</h2>

                <p>
                    Enter the OTP sent to you
                </p>


                <form onSubmit={handleSubmit}>


                    <input
                        placeholder="Enter OTP"
                        value={otp}
                        onChange={(e) => setOtp(e.target.value)}
                    />


                    <button>
                        Verify
                    </button>


                </form>


            </div>

        </div>

    )
}