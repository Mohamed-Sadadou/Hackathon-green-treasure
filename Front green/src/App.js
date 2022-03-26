//importing depences
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React from 'react'

// importing the pages
import Home from './pages/Home'
import Hisotry from './pages/History'
import Account from './pages/Account'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Companies from './pages/Companies'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/account" element={<Account />} />
        <Route path="/companies" element={<Companies />} />
        <Route path="/hisotry" element={<Hisotry />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
