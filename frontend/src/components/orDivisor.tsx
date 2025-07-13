import { Typography } from "../utils/themes/Typography";

/**
 * @file orDivisor.tsx
 * @module OrDivisor
 * @description
 * Componente visual para separar seções de formulários, exibindo a palavra "or"
 * centralizada entre duas linhas horizontais.
 *
 * - Utilizado para dividir opções de autenticação (ex: login tradicional vs social).
 * - Totalmente estilizado com Tailwind CSS.
 * - Acessível e responsivo.
 *
 * @see src/utils/themes/Typography.tsx
 */

export function OrDivisor(){
  return (
        
    <div className="relative flex items-center justify-center">
<div className="w-full mx-5 border-[1px] scale-y-50  border-[rgba(0,0,0,0.30)]  "></div>
  <Typography 
  variant="MiniLabel"
  className="text-gray-400 py-[11px] px-[13px] text-opacity-50 border
   border-[rgba(0,0,0,0.30)] bg-white rounded-full absolute ">
    or
  </Typography>
</div>
  )
} 