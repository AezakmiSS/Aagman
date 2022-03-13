import React, { useEffect, useState } from "react";
import axios from 'axios'
import {NotificationManager} from 'react-notifications';
import {signInWithEmailAndPassword, sendPasswordResetEmail} from 'firebase/auth'
import { authentication } from "../config/firebaseConfig"
import {useNavigate} from 'react-router-dom'

import CloseIcon from '@mui/icons-material/Close';

import { config } from "../config/urlConfig"
const URL = config.url

const ForgotPassword = ({isLogin,setIsLogin}) => {
    const navigate = useNavigate()
    const [email, setEmail] = useState("");
    const [error,setError] = useState('')

    //APi and routing login
    
    const handleForgotPassword = async (e) => {
        e.preventDefault()

        try {
            if(!email)
            throw Error("Missing required fields");

            sendPasswordResetEmail(authentication, email, {url:"https://www.brightern.com"})
            .then(userCred=>{
                console.log(userCred);
                NotificationManager.success("", "send Reset Link to Your Email", 3000)
                setIsLogin(1)
            })
              
        } catch (error) {
            console.log(`${error.message}`.replace('Firebase: ',''))
            setError(`${error.message}`.replace('Firebase: ',''))
        }
    }

      const handleCloseError =(e)=>{
          e.preventDefault();
          setError('')
      }

      const handleCloseModal=(e)=>{
          e.preventDefault();
      }

    return (
            <div class="w-full sm:w-2/3 md:w-1/2 lg:w-1/3 mx-auto">
                <div class="bg-white shadow-md border border-gray-200 rounded-lg  w-full p-4 sm:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-700">
                    <form class="space-y-6" action="#">
                        {
                                <h3 class="text-xl font-medium text-gray-900 dark:text-white">Forgot Password</h3>
                        }

                        {error && <div>
                            <div class="w-fill bg-red-300 flex p-3 pl-3 bg-gray-100  rounded-lg">
                                <button onClick={handleCloseError} className="hover:bg-red-400 rounded">
                                    <CloseIcon/>
                                </button>
                                <span class="ml-2 truncate" title="Test with a very really long name (resize the browser to see it truncate)">{error}</span>
                            </div>
                        </div>}

                        <div>
                            <label for="email" class="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">Your email</label>
                            <input onChange={(e)=>setEmail(e.target.value)} type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required=""/>
                        </div>
                        
                        <button type="submit" onClick={handleForgotPassword} class="w-full text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Send Verification Link</button>
                        <button type="submit" onClick={(e)=>{e.preventDefault();setIsLogin(1)}} class="w-full text-white mt-3 bg-red-600 hover:bg-red-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Back</button>
                    </form>
                </div>
            </div>
    )
}

export default ForgotPassword