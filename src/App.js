
import './App.css';
import React, {} from 'react';
import Form from './components/Form'
import {Routes, Route} from 'react-router-dom';
import User from "./components/User"
import Dashboard from './components/Dashboard';

function App() {

  return (
    <Routes>
      <Route path="/" element={<Form />}/>
      <Route path="/user" element={<User />}/>
      <Route path="/dashboard" element={<Dashboard />}/>
    </Routes>
   
  )
}
export default App;
