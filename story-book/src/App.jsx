import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AddPage from "./pages/Addpage";
import Story from "./pages/story";
import EditPage from "./pages/EditPage";


export default function App() {

  return (
    <Routes>
      <Route default element={<Home />} />
      <Route path="/" element={<Home />} />
      <Route path="/add" element={<AddPage />} />
      <Route path="/story/:id" element={<Story />} />
      <Route path="/edit/:id" element={<EditPage />} />
    </Routes>
  )
}