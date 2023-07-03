import { useState } from 'react'


import { Routes, Route } from 'react-router-dom'
import Layout from './Layout'
import About from './components/About'
import Home from './components/Home'
import Notfound from './components/Notfound'
import Blog from './blogs/Blog'
function App() {

  return (
   <Routes>
    <Route path='/' element={<Layout />}>
      <Route index element ={<Home />}/>
      <Route path='about' element={<About />} />
      <Route path='blog' element ={<Blog/>} />
      <Route path='*' element={<Notfound/>}/>
    </Route>
   </Routes>
  )
}

export default App
