import React from 'react'
import Lottie from 'react-lottie-player'
import profileimg from '../Animation/animation_lkjuek0f.json';

export default function Profile() {
  
  const userdata = JSON.parse(localStorage.getItem("loginuser"));

  
  return (
    <div >
      <div class="max-w-lg mx-auto my-10 bg-white rounded-lg shadow-md p-5">
      <Lottie
          loop
          animationData={profileimg}
          play
        /> <h2 class="text-center text-2xl font-semibold mt-3">{userdata[0].name}</h2>
        <p class="text-center text-gray-600 mt-1">{userdata[0].email}</p>
        <div class="flex justify-center mt-5">
        </div>
        <div class="mt-5">
          <h3 class="text-xl font-semibold">Bio</h3>
          <p class="text-gray-600 mt-2">John is a software engineer with over 10 years of experience in developing web and mobile applications. He is skilled in JavaScript, React, and Node.js.</p>
        </div>
      </div>
    </div>
  )
}
