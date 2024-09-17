import { useState,useEffect } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const Task = () => {

   const [task,setTask] = useState([]);
   const navigate = useNavigate();

   useEffect(()=>{
    const fetchTask = async()=>{
        try {

            const res = await axios.get("http://localhost:3000/api/v1/task/get-task");
            setTask(res.data)
        } catch (error) {
            console.error("Error fetching task",error)
        }
    }

    fetchTask();
   },[]);


   const handleClick = ()=>{
    navigate("/addtask")
   }

   const handleDelete  = async(taskId)=>{
    try {
       await  axios.delete(`http://localhost:3000/api/v1/task/delete-task/${taskId}`)
       setTask(task.filter((tasks)=>tasks._id !== taskId))
    } catch (error) {
      console.error("Error deleting task:", error);
    }
   }


  return (
    <div>
    <div className="container mt-5 bg-danger p-3 text-white fs-6 fw-bolder">
  <div className="row">
    <div className="col">Title</div>
    <div className="col col-4">Description</div>
    <div className="col">Due Date</div>
    <div className="col">Status</div>
    <div className="col">Action</div>
  </div>
  </div>
    <div>
    {task.map((tasks,index)=>(
    <div className="container mt-5 bg-secondary text-white" key={index}>
     <div className="row p-3">
    <div className="col">{tasks.title}</div>
    <div className="col col-4">{tasks.description}</div>
    <div className="col">{tasks.duedate}</div>
    <div className="col">{tasks.status}</div>
    <div className="col gap-2 d-flex">
      <div>
    <button type="button" className="btn btn-light" onClick={()=>handleDelete(tasks._id)}>Update</button>
    </div>
    <button type="button" className="btn btn-dark">Delete</button>
    </div>
  </div> 
</div>
    ))}
    </div>
    <div className="mt-4 text-center">
    <a className="btn btn-dark mt-4 rounded-pill" href="#" role="button" onClick={()=>handleClick()}>Add Task</a>
    </div>
    </div>
    
  )
}

export default Task
