import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';

import Login from './Components/Login';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import SignUp from './Components/SignUp';
import Timeline from './Components/Timeline';
import Profile from './Components/Profile';
import Createpost from './Components/Createpost';

import Editpost from './Components/Editpost';
import { useState } from 'react';

function App() {
    const [posts,setPosts] = useState(JSON.parse(localStorage.getItem('posts')))
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={ <Login />} />
          <Route path='/Login' element={ <Login />} />
          <Route path='/Signup' element={ <SignUp />} />
          <Route path='/timeline' element={ <Timeline />} />
          <Route path='/profile' element={ <Profile />} />
          <Route path='/createpost' element={ <Createpost />} />
          <Route path='/edit/:id' element={ <Editpost posts= {posts} setPosts = {setPosts} />} />
          
        </Routes>
      </Router>
    </>
  );
}

export default App;
