import { Route, Routes } from 'react-router-dom';
import './App.css';
import Landing_Page from './Pages/Landing_Page';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Aboutus from './Pages/Aboutus';
import Templates from './Pages/Templates';

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" exact element={<Landing_Page/>}/>
        <Route path="/about" exact element={<Aboutus/>}/>
        <Route path="/templates" exact element={<Templates/>}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
