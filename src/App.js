import { Route, Routes } from 'react-router-dom';
import './App.css';
import Landing_Page from './Pages/Landing_Page';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Aboutus from './Pages/Aboutus';
import Templates from './Pages/Templates';
import Login from './Authentication/Login';
import Register from './Authentication/Register';
import Dashboard from './Pages/Dashboard';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" exact element={<Landing_Page/>}/>
        <Route path="/about" exact element={<Aboutus/>}/>
        <Route path="/templates" exact element={<Templates/>}/>
        <Route path="/dashboard" exact element={<Dashboard/>}/>

        <Route path="/login" exact element={<Login/>}/>
        <Route path="/register" exact element={<Register/>}/>

        <Route path="*" exact element={<h1>Page Not found</h1>}/>
      </Routes>
    </>
  );
}

export default App;
