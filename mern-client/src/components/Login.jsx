import React, { useState,useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {AuthContext} from "../contexts/AuthProvider";
import { useNavigate } from 'react-router-dom';
import googleLogo from "../assets/google-logo.svg";

export default function Login() {
    const {createUser,loginWithGoogle,login}=useContext(AuthContext);
    const[error,setError]=useState();
    const navigate =useNavigate();
    const location =useLocation();

    const from=location.state?.from?.pathname || "/";

    const handleLogin= async (event)=>{
        event.preventDefault();
        const form =event.target;
        const email=form.email.value;
        const password =form.password.value;

        try{

            const userCredential= await login(email,password);
            const user = userCredential.user;
            alert("Login successful!!")
            navigate(from,{replace:true});

        }catch(error){
            const errorCode = error.code;
            const errorMessage = error.message;
            setError(errorMessage);
        }
    }


    const handleRegister= async()=>{
        try{
            const result=await loginWithGoogle()
            const user=result.user;
            navigate(from,{replace:true});
        }catch(error){
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            setError(errorMessage);
        }
        

    }
  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
	<div className="relative py-3 sm:max-w-xl sm:mx-auto">
		<div
			className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
		</div>
		<div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
			<div className="max-w-md mx-auto">
				<div>
					<h1 className="text-2xl font-semibold">Sign In For Book Listing</h1>
				</div>
				<div className="divide-y divide-gray-200">
					<form onSubmit={handleLogin} className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
						<div className="relative">
							<input  id="email" name="email" type="text" className="peer  h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Email address" />
							
						</div>
						<div className="relative">
							<input  id="password" name="password" type="password" className="peer  h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Password" />
							
						</div>
                        {
                            <p className='text-red-800'>{error && "email or password is not correct" }</p>
                        }
                        <p>If you  don't have account .please <Link to="/sign-up" className="text-blue-600 hover:underline">Sign Up</Link> Here.</p>
						<div className="relative">
							<button type="submit" className="bg-blue-500 text-white rounded-md px-4 py-2">Sign In</button>
						</div>
					</form>
				</div>
                <hr/>
                <div className='flex w-full items-center flex-col mt-5 gap-3'>
                    <button onClick={handleRegister} className='block'><img src={googleLogo} alt="google logo" className='w-12 h-12 inline-block'/>Login with Google</button>
                </div>
			</div>
		</div>
	</div>
</div>
  )
}
