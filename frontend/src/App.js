import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Nav from "./components/Nav";
import Login from "./form/Login";
import Sinup from "./form/Sinup";
import Salentry from "./form/Salentry";
import Tsales from "./components/Tsales";
import Tdrevenue from "./components/Tdrevenue";
import { useEffect, useState } from "react";

function App() {
  

  // Add a function to set the authentication status
  
  const authenticated = sessionStorage.getItem('token');
  

  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route
          path="/"
          element={authenticated ? <Salentry /> : <Navigate to="/login" />}
        />
        <Route
          path="/tsales"
          element={authenticated ? <Tsales /> : <Navigate to="/login" />}
        />
        <Route
          path="/tdrevenue"
          element={authenticated ? <Tdrevenue /> : <Navigate to="/login" />}
        />

        <Route path="/login" element={authenticated?'':<Login  />} />
        <Route path="/signup" element={authenticated?'':<Sinup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
