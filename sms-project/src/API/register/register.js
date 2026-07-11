
const REACT_APP_API_URL="https://sms-express-app-1-production-a843.up.railway.app/api"    
export default async function register(email, password) {

    const register = await fetch(`${REACT_APP_API_URL}/auth/register`, {
        method: 'POST',
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify({ email, password })

    });

    const data = await register.json();
    if (!register.ok) throw new Error(data.message || 'Failed to register');
    return data;
}