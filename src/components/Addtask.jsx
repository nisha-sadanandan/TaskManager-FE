import  { useState} from 'react'
import axios from 'axios';
import {useForm} from "react-hook-form"
import { useNavigate } from "react-router-dom";




const Addtask = () => {

    const navigate = useNavigate();

    const [popup, setPopup] = useState(false); 
    

    const {register,handleSubmit,formState:{errors}} = useForm();


    const onSubmit = async (data) => {
        try {
          const res = await axios.post(
            `http://localhost:3000/api/v1/task/add-task`,
            data,
          );
          console.log(res.data)

            setPopup(true);   
        } catch (error) {
          console.log(error);
        }
      };
  
      const handlePopupClose = () => {
              setPopup(false);
              navigate("/userhome");
            };
          
           
  
  return (
    <div>

<div className='d-flex justify-content-center align-items-center vh-100'>
      <div className=' p-6'>
      <form className='flex flex-col gap-3  mt-8' onSubmit={handleSubmit(onSubmit)}>
      <h1 className='text-info mb-3 '>Add Task</h1>

      <label htmlFor="Title" className="">Enter the title</label>
        <input
          {...register('title')}
          placeholder='Title'
          type='text'
          className='rounded mb-3 form-control'
        />
        {errors.title && <p className="text-warning">{errors.title.message}</p>}

         <label htmlFor="Description" className="">Enter the description</label>
        <input
          {...register('description')}
          placeholder='Description'
          type='text'
          className='rounded mb-3 form-control'
        />
        {errors.description && <p className="text-warning">{errors.description.message}</p>}

        <label htmlFor="Title" className="">Select the duedate</label>
        <input
          {...register('duedate')}
          placeholder='Duedate'
          type='date'
          className='rounded mb-3 form-control'
        />
        {errors.description && <p className="text-warning">{errors.description.message}</p>}

    
          <label htmlFor="Status" className="">Select Status</label>
          <select
            {...register('status', { required: true })}
            className=" rounded mb-3 form-control"  
          >
            <option value="To Do">To Do</option>
            <option value="In Progress">In Progress</option>
            <option value="Done">Done</option>
          </select>
          {errors.status && <span className="text-red-500 text-sm">Please select a status</span>}
       

        <input
          type="submit"
          placeholder='Submit'
          className='rounded  mb-3 form-control bg-secondary text-white'
        />
      </form>
      </div>

      {popup && (
        <div className='d-flex justify-content-center align-items-center shadow-lg p-3'>
          <div className=''>
            <h2 className='text-danger'>Task Added Successfully!</h2>
            <button
              className='p-2 rounded bg-secondary'
              onClick={handlePopupClose}
            >
              OK
            </button>
          </div>
        </div>
      )}
    </div>
    
        
      
    </div>
  )
}

export default Addtask
