import React from 'react'

import {Routes,Route} from "react-router-dom"
import About from './redux/About';
import Home from './redux/Home';
export default function App() {

  return (
    <Routes>
      
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      
    </Routes>
  )
}
