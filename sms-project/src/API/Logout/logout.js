import BASE_URL from "../baseUrl"; // or wherever your BASE_URL is

export default async function LogoutAPI(refreshToken) {
  const response = await fetch(`${BASE_URL}/auth/logout`, {
    method: "POST",

    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify({
      refreshToken,
    }),
  });

  if (!response.ok) {
    throw new Error("Logout failed");
  }

  return response.json();
}