import React from 'react';
import Footer from './componentes/estaticos/footer/Footer';
import Navbar from "./componentes/estaticos/navbar/Navbar";
import Home from './paginas/home/Home';
import Login from "./paginas/login/Login";
import { Routes, Route, BrowserRouter } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div style={{ minHeight: "100vh" }}>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter >
  );
}

export default App;
