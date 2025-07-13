import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { App } from './app'
import { BrowserRouter } from 'react-router-dom'

/**
 * @file main.tsx
 * @description
 * Ponto de entrada da aplicação React. Responsável por inicializar o ReactDOM,
 * envolver a aplicação com o roteador (BrowserRouter) e o modo estrito (StrictMode),
 * além de importar os estilos globais.
 *
 * - Renderiza o componente <App /> no elemento root do HTML.
 * - Garante que toda a navegação utilize o React Router.
 * - Aplica boas práticas de desenvolvimento com StrictMode.
 */

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
  <StrictMode>
    <App />
  </StrictMode>
  </BrowserRouter>
)
