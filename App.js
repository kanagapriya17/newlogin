import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginForm from "./components/auth";
import Table from "./components/table";
import React, { Component }  from 'react';
import Button from "./components/button";




function App() {
  return (
    <BrowserRouter>
    
    <Routes>
      <Route path="/" element={<LoginForm/>} />
    </Routes>

    <Routes>
      <Route path="/tab" element={<Table/>} />
    </Routes>
    <Routes>
      <Route path="/buton" element={<Button/>} />
    </Routes>
    
    
  </BrowserRouter>
  )
}

export default App;
