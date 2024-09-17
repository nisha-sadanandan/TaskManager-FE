import { Outlet } from "react-router-dom"
import Signup from "../components/Signup.jsx"

const SignupPage = () => {
  return (
    <div>
        <Signup/>
        <Outlet/>
      
    </div>
  )
}

export default SignupPage
