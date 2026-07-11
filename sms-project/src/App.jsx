import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Register from "./pages/Register" 
import Verification from "./pages/otp"
import Login from "./pages/login"
import { AuthProvider } from "./context/AuthContext"
//import LogoutAPI from "../API/Logout/logout";


function App() {


  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/otp" element={<Verification />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </AuthProvider>
  )
}

export default App