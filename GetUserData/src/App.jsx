import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Users from './component/Users';
import FormPage from './component/FormPage';

function App() {


  return (
    <BrowserRouter>
      <Routes>
    <Route path='/' element={<Users/>}/>
    <Route path='/form' element={<FormPage/>}/>
      </Routes>
    </BrowserRouter>


  );
}

export default App;
