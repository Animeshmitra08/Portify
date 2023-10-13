import { Route, Routes } from 'react-router-dom';
import './App.css';
import Landing_Page from './Pages/Landing_Page';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Landing_Page/>}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
