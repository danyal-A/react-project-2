import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';

import Login from './Components/Login';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import SignUp from './Components/SignUp';
import Timeline from './Components/Timeline';
import Profile from './Components/Profile';
import Createpost from './Components/Createpost';

function App() {
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
        </Routes>
      </Router>
    </>
  );
}

export default App;
