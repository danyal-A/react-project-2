import React from 'react';
import Lottie from 'react-lottie-player'
import { useState } from 'react'

import loginImage from '../Animation/animation_lkid4wgi.json'
import { json, useNavigate } from 'react-router-dom';


export default function Login() {

  const history = useNavigate();

  const [validin, setValidin] = useState({
    id:"",
    email: "",
    password: "",

  });

  const [data, setData] = useState([]);
  const getdata = (event) => {
    const { name, value } = event.target;
    console.log(name, value);
    // Update the state for the corresponding input field
    setValidin({
      ...validin,
      [name]: value,
    });

  }

  const addData = (event) => {
    event.preventDefault();   //stop default behaviour of the button 
    console.log(validin);

    const getuser = localStorage.getItem("users");
    console.log(getuser);

    const { email, password} = validin; //destructuring

     if (email === "") {
      alert("enter email");
    } else if (!email.includes("@")) {
      alert("Email is not valid");
    } else if (password === "") {
      alert("please enter password");
    }  else {
      //here we send the data to local storage
      if (getuser && getuser.length){
        const userdata = JSON.parse(getuser);
        const loginvalid = userdata.filter((element, key) =>{
          return element.email === email && element.password === password
        });
        console.log(loginvalid);
        if (loginvalid.length === 0){
          alert("invalid details");
        }else{
          localStorage.setItem('loginuser', JSON.stringify(loginvalid));
          console.log("suceess fully login ");
          history("/timeline");
        }
      }
    }

  }

  return (
    <div className="h-screen flex justify-center items-center space-x-12">
      <div className="">
        <div class="w-full max-w-xs">
          <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
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
                onChange={getdata} />
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
            <div class="flex items-center justify-between">
              <button class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
                onClick={addData}>
                Sign In
              </button>
              <a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                Forgot Password?
              </a>
            </div>
          </form>
          <p class="text-center text-gray-500 text-xs">
            &copy;2020 Acme Corp. All rights reserved.
          </p>
        </div>
      </div>
      <div className="">
        <Lottie
          loop
          animationData={loginImage}
          play
        />
      </div>

    </div>
  )
}
