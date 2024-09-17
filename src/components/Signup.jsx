import { useState } from 'react'
import {useForm} from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import axios from "axios"
import { Link, useNavigate} from "react-router-dom";





let userSchema = yup.object({
  name: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().min(6),

});


     const Signup = () => {

      const [signupSuccess, setSignupSuccess] = useState(false);

      
      const navigate = useNavigate();
        const {register,handleSubmit,formState:{errors}} = useForm({
          resolver: yupResolver(userSchema),
        })
        const onSubmit = async (data) => {


          
          try {
            const res = await axios.post(
              "http://localhost:3000/api/v1/user/signup",
              data,
            );

          
            if (res.status === 200) {
              const responseMessage = res.data;
      
              if (responseMessage === "Signed Successfully") {
                setSignupSuccess(true);
              } 
            } 
          } catch (error) {

            console.error(error);
          }
        };

        const handleSuccessClose = () => {
          setSignupSuccess(false);
          navigate("/signin");
        };

       
       
  return (
  
       <div className='d-flex justify-content-center align-items-center vh-100'> 
       <div className='shadow-lg p-5'>
        <form className='' onSubmit={handleSubmit(onSubmit)}>
        <h3 className='text-success mb-3 fw-bolder'>SignUp</h3> 
         <div className=''>
        <input {...register('name')}
        placeholder='name' type='text'
         className='rounded mb-3 form-control' />
              {errors.name && <p className="text-warning">{errors.name.message}</p>}
        </div>   
         <div className='col-lg'>
        <input {...register('email')} placeholder='email' type='email'
         className='rounded  mb-3 form-control'/>
         {errors.email && <p className="text-warning">{errors.email.message}</p>}   
         </div>
         <div className='col-lg'>
        <input {...register('password')} placeholder='password'  type='password'
         className='rounded  mb-3 form-control'/>
        {errors.password && <p className="text-warning">{errors.password.message}</p>}
        </div>
        <div className='col-lg'>
       <input type="submit" placeholder='Submit' className='rounded  mb-3 form-control bg-dark text-white'/>
       </div>
       <div>
       <p>
         Already have an account?{" "}
        <Link to="/signin" className="text-success fw-italic text-decoration-none">
          Login
        </Link>
        </p>
        </div>
  </form>
  </div>
  {signupSuccess && (
        <div className='d-flex justify-content-center align-items-center shadow-lg p-3'>
          <div className=''>
            <h2 className='text-success'>Signup Successfully!</h2>
            <p className=''>You have successfully Signup.</p>
            <button
              className='p-2 rounded bg-warning'
              onClick={handleSuccessClose}
            >
              OK
            </button>
          </div>
        </div>

)}
    </div>
   
  )
}

export default Signup