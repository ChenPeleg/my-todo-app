import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { MyHeader } from './components/MyHeader'
import { TodoItem } from './components/TodoItem'
import { HomePage } from './pages/HomePage'
import { BrowserRouter, Route, Router, Routes } from 'react-router'

 
export default function App() {

  return <>
  <BrowserRouter>

     <Routes>
       <Route path='/' element={<HomePage/>}/> 

     </Routes>
  </BrowserRouter>

  <HomePage/>
  </>
}
 
