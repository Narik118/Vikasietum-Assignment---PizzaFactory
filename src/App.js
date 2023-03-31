import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './components/HomePage';
import OrderPage from './components/OrderPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />}></Route>
          <Route path='/order' element={<OrderPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
