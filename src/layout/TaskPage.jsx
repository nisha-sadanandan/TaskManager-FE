import { Outlet } from "react-router-dom"
import Task from "../components/Task.jsx"
import UserHome from "../components/UserHome.jsx"

const TaskPage = () => {
  return (
    <div>
       <UserHome/>
       <Task/>
        <Outlet/>
        
      
    </div>
  )
}

export default TaskPage
