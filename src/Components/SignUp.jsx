import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Lottie from 'react-lottie-player'
import { v4 as uuidv4 } from 'uuid';

import signlogo from '../Animation/animation_lkid1re3.json'

export default function SignUp() {

  const history = useNavigate();
  const totaluser = [];

  const [validin, setValidin] = useState({
    id: "",
    name: "",
    email: "",
    password: "",
    confirmpassword: ""
  });
  
  const [data,setData] = useState([]);
  const getdata = (event) =>{
    const { name, value } = event.target;
    // Update the state for the corresponding input field
    setValidin({
      ...validin,
      [name]: value,
      id: uuidv4(),
    });
    
  }

  const addData =(event) =>{
    event.preventDefault();   //stop default behaviour of the button 
  

    const {name,email,password,confirmpassword} = validin; //destructuring

    if (name === "")
    {
      alert("enter name");
    }else if (email === ""){
      alert("enter email");
    }else if (!email.includes("@")){
      alert("Email is not valid");
    }else if (password === ""){
      alert("please enter password");
    }else if (password.length < 5){
      alert("please enter the password length greater than 5!")
    }else if (confirmpassword === ""){
      alert("please enter the confirm password field");
    }else if (password !== confirmpassword){
      alert("please enter the confirm password right!")
    }else{
      const existingUserData = localStorage.getItem('users');
      const usersArray = existingUserData ? JSON.parse(existingUserData) : [];
      usersArray.push(validin);
  
      localStorage.setItem('users', JSON.stringify(usersArray));
      history("/Login");
    }

  }
  
  
  return (
      <div className="h-screen flex justify-center items-center space-x-12">
      
          <div class="max-w-xs w-max">
            <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
              <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
                  Name
                </label>
                <input
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="name"
                  type="text"
                  value={validin.name}
                  placeholder="Enter Name"
                  name='name'
                  onChange={getdata} />
              </div>
              <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
                  Email
                </label>
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                id="email" 
                type="email" 
                value={validin.email}
                placeholder="Enter Email" 
                name='email'
                onChange={getdata}/>
              </div>
              <div class="mb-6">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                  Password
                </label>
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" 
                id="password" 
                type="password" 
                name='password'
                value={validin.password}
                placeholder="******************" 
                onChange={getdata} />
              </div>
              <div class="mb-6">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="confirmpassword">
                  Confirm Password
                </label>
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" 
                id="confirpassword" 
                type="password" 
                value={validin.confirmpassword}
                name='confirmpassword'
                placeholder="******************"
                onChange={getdata} />
              </div>
              <div class="flex items-center justify-between">
                <button class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
                type="button"
                onClick={addData}>
                  Sign Up
                </button>
                <Link class="inline-block no-underline align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" to="#">
                  Forgot Password?
                </Link>
              </div>
            </form>
            <p class="text-center text-gray-500 text-xs">
              &copy;
            </p>
          
        </div>
        <div>
        <Lottie
          loop
          animationData={signlogo}
          play
        />
        </div>

      </div>
  )
}
