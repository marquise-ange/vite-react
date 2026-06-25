import { Outlet } from "react-router-dom"
import Navbar from "./Nav"
import Footer from "./Footer"

function Layout() {
    return (
        <div className="layout">
        <Navbar />
        <main className="main-content">
        <Outlet />
        </main>
        <Footer />
        </div>
    )
}

export default Layout