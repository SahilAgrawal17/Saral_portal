import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/login/login';
import Signup from './pages/signup/signup';
import Home from './pages/Home/home';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={< Navigate to =  "/login" /> }/>
        <Route path='/login' element={<Login /> }/>
        <Route path='/signup' element={<Signup /> }/>
        <Route path='/home' element={<Home /> }/>
      </Routes>
    </div>
  );
}

export default App;
