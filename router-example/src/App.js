import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import FrontPage from './components/FrontPage'
import Profile from './components/Profile'
import User from './components/User'
import Me from './components/Me'

import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="profile" element={<Profile />}>
          <Route path="me" element={<Me />} />
          <Route path=":id" element={<User />} />
        </Route>
        <Route path="products" element="Products"></Route>
        <Route path="*" element={<FrontPage />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
