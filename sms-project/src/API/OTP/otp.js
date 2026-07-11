const REACT_APP_API_URL="https://sms-express-app-1-production-a843.up.railway.app/api"   

export default async function otpVerification(email, otp) {
    const opt =  await fetch(`${REACT_APP_API_URL}/auth/verify-email`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "accept": "application/json"
        },
        body: JSON.stringify({
            email,
            otp
        })
    })

    const data = await opt.json();
    if (!opt.ok) throw new Error(data.message || 'Failed to verify email');

    return data;
}