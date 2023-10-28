
import './App.css';
import Clublist from './Clublist';
import Academic from './committees/Academic_Committee';

import {BrowserRouter,Routes,Route} from 'react-router-dom'
import React from 'react'
import Dcei from './committees/DCEI';
import Sambhav from './committees/Sambhav';

const App = () => {
  return (
    <div>
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Clublist/>}></Route>
            <Route path='/1' element={<Academic/>}></Route>
            <Route path='/14' element={<Dcei/>}></Route>
            <Route path ='/19' element={<Sambhav/>}></Route>
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App
