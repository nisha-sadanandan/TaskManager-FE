import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar.jsx";

const NavbarLayout = () => {
  return (
    <div>
        <Navbar/>
        <Outlet/>
      
    </div>
  )
}

export default NavbarLayout
