/**
 * @file app.tsx
 * @module App
 * @description
 * Componente raiz da aplicação. Gerencia o roteamento principal entre as páginas de login, registro e home,
 * utilizando animações de transição de página com framer-motion.
 *
 * - Utiliza React Router para navegação entre rotas.
 * - Aplica transições animadas entre páginas com AnimatePresence.
 * - Centraliza a definição das rotas principais da aplicação.
 *
 * @see https://reactrouter.com/
 * @see https://www.framer.com/motion/
 * @see src/pages/login/index.tsx
 * @see src/pages/register/index.tsx
 * @see src/pages/home/index.tsx
 */
import { LoginScreen } from "./pages/login";
import { Routes, Route, useLocation } from 'react-router-dom'
import { RegisterScreen } from "./pages/register";
import { AnimatePresence } from "framer-motion";
import { HomeScreen } from "./pages/home";


export function App() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}  >
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/register" element={<RegisterScreen />} />
        <Route path="/home" element={<HomeScreen />} />

      </Routes>
    </AnimatePresence>
      
  )
}