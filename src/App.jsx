import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { MyHeader } from './components/MyHeader'
import { TodoItem } from './components/TodoItem'
import { HomePage } from './pages/HomePage'
import { BrowserRouter, NavLink, Route, Router, Routes } from 'react-router'
import { ItemPage } from './pages/ItemPage'
import { ExamplePage } from './pages/MyExamplePage'
import { Page404 } from './pages/404Page'
import { Link } from 'react-router'

 
export default function App() {

  return <>
 
  <BrowserRouter>
   <div className='fixed top-0 w-screen flex flex-row gap-6 items-center justify-center'>
    
     <NavLink className={ ({ isActive, isPending })  => 'p-1 shadow  rounded-2xl ' + isActive ? 'bg-amber-300' : ''} to={'/home'}>     Home page    </NavLink>
    <NavLink className={ ({ isActive, isPending })  => 'p-1   rounded-2xl ' + isActive ? 'bg-amber-300' : ''} to={'/example'}>    Example   </NavLink>
  

  </div>
 
     <Routes>
       <Route path='/home' element={<HomePage/>}  />  
       <Route path='/item/:id' element={<ItemPage/>}/> 
       <Route path='/example' element={<ExamplePage/>}/> 
       <Route path='*' element={<Page404/>}/> 
     </Routes>
  </BrowserRouter>
  </>
}
 
