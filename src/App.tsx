import React from 'react';
import Footer from './componentes/estaticos/footer/Footer';
import Navbar from "./componentes/estaticos/navbar/Navbar";
import Home from './paginas/home/Home';
import Login from "./paginas/login/Login";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import CadastroUsuario from './paginas/cadastroUsuario/CadastroUsuario';
import ListaPostagem from './componentes/postagens/listaPostagem/ListaPOstagem';
import ListaTema from './componentes/temas/listaTema/ListaTema';


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div style={{ minHeight: "100vh" }}>
        <Routes>
          <Route path="/"  element={<Login />} />
          <Route path="/login"  element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/cadastrousuario" element={<CadastroUsuario />} />
          <Route path="/post"  element={<ListaPostagem />} />
          <Route path="/tema"  element={<ListaTema />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter >
  );
}

export default App;
