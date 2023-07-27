import React from 'react'



import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Login from './Login'
import SignUp from './SignUp'


export default function Navbar() {



  return (
    <div className="flex bg-gray-500 py-4 px-4 justify-between">
          <Link className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded" to="/">React Project</Link>
          <div className="text-white font-bold py-2 px-4">
            <Link className="mr-4 hover:text-gray-300" to="/Signup">SignUp</Link>
            <Link className="hover:text-gray-300" to="/Login">LogIn</Link>
          </div>
        </div>
  )
}
