
import './App.css';
import { Routes, Route } from "react-router-dom"
import Login from './components/Login';
import Navbar from './components/Navbar';
import Signup from './components/Signup';
import Forget from './components/Forget';
import Button from './components/Button';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
      <Route path='/button' element={<Button />} />
      <Route path='/login/signup' element={<Signup />} />
      <Route path='/signup/forget' element={<Forget />} />
        <Route path='/login' element={<Login />} />
        <Route path='/Signup' element={<Signup />} />
        <Route path='/forget' element={<Forget />} />
      </Routes>
    </div>
  );
}

export default App;
