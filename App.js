
import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Body from './Components/Body';
import Header from './Components/Header';
//import SubBody from './Components/SubBody';
import About from './Components/About';
import Contact from './Components/Contact';
import Login from './Components/Login';
import Register from './Components/Register';
import SafetyInstructions from './Components/SafetyInstructions';
import Faq from './Components/Faq';
import Dashboard from './Components/Dashboard';
import { VendorDashboard } from './Components/VendorDashboard';

function App() {
  const location=useLocation()
  return (
    <div className="App">
      {location.pathname !== "/vendor" && <Header />}
      <Routes>
        <Route path='/' element={<Body/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/safety' element={<SafetyInstructions/>}/>
        <Route path='/faq' element={<Faq/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/vendor' element={<VendorDashboard/>}/>
      </Routes>
    </div>
  );
}

export default App;
