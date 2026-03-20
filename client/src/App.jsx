import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import LoginPage from './pages/Login/LoginPage'
import MainMenuPage from './pages/MainMenu/MainMenuPage'
import {BrowserRouter, Routes, Route} from 'react-router'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/main" element={<MainMenuPage />} />
        <Route path="/" element={<LoginPage />} />
        <Route path="/logout" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
