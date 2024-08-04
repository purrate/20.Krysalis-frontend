import './App.css'
import '@mantine/core/styles.css';
import { Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing/Landing';
import Register from './pages/Register/Register';
import Navbar from './component/Navbar/Navbar';
import Machines from './pages/Machines/Machines';
import Processes from './pages/Processes/Processes';
import Home from './pages/Home/Home';
import CreateProcess from './pages/CreateProcess/CreateProcess';
import CreateMachine from './pages/CreateMachine/CreateMachine';
import Operator from './pages/Operator/Operator';
import CreateOperator from './pages/CreateOperator/CreateOperator';

function App() {
  return (
    <div className="h-[100vh] w-[100vw]">
      <Routes>
        <Route path="/landing" element={<Landing />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home/>} />
          <Route path="home" element={<Home/>} />
          <Route path="machines" element={<Machines />} />
          <Route path="processes" element={<Processes />} />
          <Route path="createprocesses" element={<CreateProcess/>} />
          <Route path="createmachines" element={<CreateMachine/>} />
          <Route path="operator" element={<Operator/>} />
          <Route path="createoperator" element={<CreateOperator/>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App
