import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import AddPage from "./pages/Addpage";
import Story from "./pages/story";
import EditPage from "./pages/EditPage";

import Login from "./pages/Login";
import Register from "./pages/Register";
import VerifyOTP from "./pages/VerifyOTP";

import ProtectedRoute from "./components/ProtectedRoute";


export default function App() {

  return (

    <Routes>

      {/* First page when opening website */}
      <Route path="/" element={<Login />} />


      {/* Authentication pages */}
      <Route 
        path="/login" 
        element={<Login />} 
      />


      <Route 
        path="/register" 
        element={<Register />} 
      />


      <Route 
        path="/verify" 
        element={<VerifyOTP />} 
      />


      {/* Protected pages */}

      <Route 
        path="/home" 
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      />


      <Route 
        path="/add" 
        element={
          <ProtectedRoute>
            <AddPage />
          </ProtectedRoute>
        }
      />


      <Route 
        path="/story/:id" 
        element={<Story />} 
      />


      <Route 
        path="/edit/:id" 
        element={<EditPage />} 
      />


    </Routes>

  )
}