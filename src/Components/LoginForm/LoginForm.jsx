// eslint-disable-next-line no-unused-vars
import React from 'react'
import { FaUserAlt } from 'react-icons/fa'
import { FaLock } from "react-icons/fa"
import './LoginForm.css'



function LoginForm() {
  return ( <>
 
    <div className='wrapper'>
        
        <form action="" > 
            <h1>Login</h1>
            <div className='input-Box'>
                <input type="text" name="username" placeholder="Username" required/>
                <FaUserAlt  className='icons'/>


            </div>

            <div className='input-Box'>
                <input type="password" name="password" placeholder="password" required/>
                <FaLock  className='icons'/>

            </div>
            <div className='remeperForgit'>
                <label htmlFor="" >
                    <input type="checkbox"  className='inputCheck'/>
                    Remember me
                </label>

                <a href="#"> Forget Password</a>
            </div>
            <button type='submit' className='submit'> 
                Login

            </button>

            <div className='registerLink'>
                <p>Don't have an acount ?<a href="#"> Register</a> </p>
            </div>






        </form>
    </div>
   
   
   
    </>
  )
}

export default LoginForm



