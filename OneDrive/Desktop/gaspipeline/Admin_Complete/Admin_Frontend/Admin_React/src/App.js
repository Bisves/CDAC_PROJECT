//import logo from './logo.svg';
//import './App.css';

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage.jsx';
import LoginPage from './LoginPage.jsx';
import AdminDashboard from './AdminDashboard';
import SubscriptionSuccess from "./SubscriptionSuccess";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/loginPage" element={<LoginPage />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/subscription-success" element={<SubscriptionSuccess />} />
      </Routes>
    </Router>
  );
}

export default App;

