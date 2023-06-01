import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Inicio from './pages/Inicio';
import Menu from './pages/Menu';

export default function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path="/" element={<Inicio />} />
          <Route path="/Menu" index element={<Menu />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );

}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);