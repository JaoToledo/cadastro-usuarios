import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Register } from './pages/register'
import { Login } from './pages/login'
import { Home } from './pages/home'

export function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/home" element={<Home />} />
        <Route path="/" element={<Navigate to="/register" />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}