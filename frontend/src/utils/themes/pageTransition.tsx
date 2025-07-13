/**
 * @file PageTransition.tsx
 * @module PageTransition
 * @description
 * Componente utilitário para aplicar animação de transição de opacidade entre páginas, utilizando framer-motion.
 *
 * - Envolve o conteúdo da página e aplica animação de fade in/out.
 * - Facilita a criação de transições suaves e profissionais entre rotas.
 * - Permite customização adicional via props do motion.div.
 *
 * @see https://www.framer.com/motion/
 */
import { motion } from 'framer-motion'

export function PageTransition({ children }: {children: React.ReactNode}) {  
  return (
    <motion.div 
    initial={{ opacity: 0,}}
    animate={{ opacity: 1,  }}
    exit={{ opacity: 0,  }}
    transition={{ duration: 0.1 }}
    style={{ height: "100%" }}
    >
      {children}
    </motion.div>
  ) 
}