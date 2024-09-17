import{ useState } from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

let userSchema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().min(6).required(),
});

const Signin = () => {
  const navigate = useNavigate();
  const [loginError, setLoginError] = useState(null);
  const [loginSuccess, setLoginSuccess] = useState(false);

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(userSchema),
  });

  const onSubmit = async (data) => {
    try {
      const res = await axios.post(
        "http://localhost:3000/api/v1/user/signin",
        data
      );

      if (res.status === 200) {
        const responseMessage = res.data;

        if (responseMessage === "Logged in!") {
          setLoginSuccess(true);
        } else {
          setLoginError(responseMessage);
        }
      } else {
        setLoginError('Login failed. Please check your credentials.');
      }
    } catch (error) {
      if (error.response) {
        setLoginError(error.response.data.message || 'Login failed. Please check your credentials.');
      } else if (error.request) {
        setLoginError('No response from server. Please try again later.');
      } else {
        setLoginError('An error occurred. Please try again.');
      }
      console.error(error);
    }
  };

  const handleSuccessClose = () => {
    setLoginSuccess(false);
    navigate("/userhome");
  };

  return (
    <div className='d-flex justify-content-center align-items-center vh-100'>
      <div className='shadow-lg p-5'>
      <form className='flex flex-col gap-3 w-1/4 mt-8' onSubmit={handleSubmit(onSubmit)}>
      <h1 className='text-success mb-3 fw-bolder'>Login</h1>
        <input
          {...register('email')}
          placeholder='Email'
          type='email'
          className='rounded mb-3 form-control'
        />
        {errors.email && <p className="text-warning">{errors.email.message}</p>}
        
        <input
          {...register('password')}
          placeholder='Password'
          type='password'
          className='rounded mb-3 form-control'
        />
        {errors.password && <p className="text-warning">{errors.password.message}</p>}

        <input
          type="submit"
          placeholder='Submit'
          className='rounded  mb-3 form-control bg-dark text-white'
        />

        {loginError && <p className="text-warning">{loginError}</p>}
        
        <p>
          Don't have an account?{" "}
          <Link to="/signup" className="text-success fw-italic text-decoration-none">
            Create new account
          </Link>
        </p>
      </form>
      </div>

      {loginSuccess && (
        <div className='d-flex justify-content-center align-items-center shadow-lg p-3'>
          <div className=''>
            <h2 className='text-success'>Login Successfully!</h2>
            <p className='mb-4'>You have successfully logged in.</p>
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
    
  );
};

export default Signin;