import './App.css'
import '@mantine/core/styles.css';
import { Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing/Landing';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
import Navbar from './component/Navbar/Navbar';
import Machines from './pages/Machines/Machines';
import Processes from './pages/Processes/Processes';

function App() {
  return (
    <div className="h-[100vh] w-[100vw]">
      <Routes>
        <Route path="/landing" element={<Landing />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Navbar />}>
          <Route index element={<Machines/>} />
          <Route path="machines" element={<Machines />} />
          <Route path="processes" element={<Processes />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App
