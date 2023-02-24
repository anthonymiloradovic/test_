import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import './styles/index.scss';
import Home from './pages/Home';
import Quiz from './pages/Quiz';
import Test from './pages/Test';




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

<BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/quiz" element={<Quiz />} />
    <Route path="/test" element={<Test />} />
  </Routes>
  
</BrowserRouter>

    
  </React.StrictMode>,
)
