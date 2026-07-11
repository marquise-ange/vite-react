import { createContext, useContext, useState } from "react";
import LoginAPI from "../API/Login/login";


const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [accessToken, setAccessToken] = useState(
    () => localStorage.getItem("accessToken") || null
  );

  const [refreshToken, setRefreshToken] = useState(
    () => localStorage.getItem("refreshToken") || null
  );

  function saveToken(accessToken, refreshToken) {
    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("refreshToken", refreshToken);

    setAccessToken(accessToken);
    setRefreshToken(refreshToken);
  }

  async function login(email, password) {
    const data = await LoginAPI(email, password);

    saveToken(data.accessToken, data.refreshToken);

    return data;
  }

  function logout() {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");

    setAccessToken(null);
    setRefreshToken(null);
  }

  return (
    <AuthContext.Provider
      value={{
        accessToken,
        refreshToken,
        login,
        logout,
        isAuthenticated: !!accessToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function Auth() {
  return useContext(AuthContext);
}