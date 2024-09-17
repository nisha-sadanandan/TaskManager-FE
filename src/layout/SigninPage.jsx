import { Outlet } from "react-router-dom"
import Signin from "../components/Signin.jsx"

const SignupPage = () => {
  return (
    <div>
        <Signin/>
        <Outlet/>
      
    </div>
  )
}

export default SignupPage
