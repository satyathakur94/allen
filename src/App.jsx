import { useState } from 'react'
import {BrowserRouter, Routes, Route, Outlet, Link} from 'react-router-dom'
import Layout from './components/Layout/Layout'
import './App.css'
import Home from './components/Home/homepage'
import Classroom from './components/Classroom/classroom'
import Error from './components/Error/error'

function App() {
    return <>
       <BrowserRouter>
       <Routes>
            <Route path='/' element={<Layout/>}>
                <Route index element={<Home/>} />
                <Route path='/classroom' element={<Classroom/>}/>
                <Route path='/error' element={<Error/>}/>
                 <Route path='*' element={<Error/>}/>
            </Route>
       </Routes>
       </BrowserRouter>
    </>
  
}

export default App
