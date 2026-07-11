const REACT_APP_API_URL =
  "https://sms-express-app-1-production-a843.up.railway.app/api";

export default async function LoginAPI(email, password) {
  const response = await fetch(`${REACT_APP_API_URL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Login failed");
  }

  return data;
}