
import './App.css';



import Clublist from './Clublist';
import Academic from './committees/Academic_Committee';
import Cultural from './committees/Cultural_Committee';
import { BrowserRouter, Routes, Route } from 'react-router-dom'


import React from 'react'

const App = () => {
  return (
    <div>
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Clublist />}></Route>
          <Route path='/1' element={<Academic />}></Route>
          <Route path='/5' element={<Cultural />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
    </div>
  )
}

export default App
