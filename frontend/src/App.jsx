import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { SnackbarProvider } from 'notistack'
import Signup from './components/Signup'
import Home from './components/Home'
import Login from './components/Login'
import AddTool from './components/Addtool'
import ProductListing from './components/ProductListing'
import { UserProvider } from './UserContext'
import Nav from './components/Nav'


const App = () => {
  return (
  <BrowserRouter>
  <SnackbarProvider>
    <UserProvider>
      <Nav/>
    <Routes>
      <Route path="/Home" element={<Home/>} />
      <Route path="/Signup" element={<Signup/>} />
      <Route path="/Login" element={<Login/>} />
      <Route path="/AddTool" element={<AddTool/>} />
      <Route path="/ProductListing" element={<ProductListing/>} />






    </Routes>
    </UserProvider>
  </SnackbarProvider>
  </BrowserRouter>
  )
}

export default App
