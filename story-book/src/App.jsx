import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AddPage from "./pages/Addpage";
import Story from "./pages/story";
import EditPage from "./pages/EditPage";

import Register from "./pages/Register";
import VerifyOTP from "./pages/VerifyOTP";
import Login from "./pages/Login";
import ProtectedRoute from "./components/ProtectedRoute";

export default function App() {

  return (
    <Routes>
      <Route default element={<Home />} />
      <Route path="/" element={<Home />} />
      <Route
        path="/add"
        element={
          <ProtectedRoute>
            <AddPage />
          </ProtectedRoute>
        }
      />
      <Route path="/story/:id" element={<Story />} />
      <Route path="/edit/:id" element={<EditPage />} />
      <Route path="/register" element={<Register />} />
      <Route path="/verify" element={<VerifyOTP />} />
      <Route path="/login" element={<Login />} />

    </Routes>
  )
}