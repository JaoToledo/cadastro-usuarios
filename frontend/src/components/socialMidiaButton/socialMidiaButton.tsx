import React from "react"

/**
 * @file socialMidiaButton.tsx
 * @module SocialButton
 * @description
 * Componente de botão para autenticação social (Google, LinkedIn, etc).
 * Suporta ícone, children e callback de clique.
 *
 * - Estilização responsiva e acessível.
 * - Efeitos visuais de interação.
 * - Permite customização adicional via className.
 *
 * @see https://tailwindcss.com/
 */

type SocialButtonProps = {
  icon: React.ReactNode;
  children: React.ReactNode;
  onClick: () => void;
  className?: string;
 }

export function SocialButton({ icon, children, onClick, className = "" }: SocialButtonProps) {
  return (
  <button
  type="button"
  onClick={onClick}
  className={` 
    w-full h-[35px] py-[5px] pl-[20px]
    flex flex-row  cursor-pointer rounded-[50px]
    shadow-[0px_4px_5px_1px_rgba(0,0,0,0.15)]
    transition duration-150 active:scale-95    
   ${className}`}
  > 
    {icon}
    {children}
  </button>
  )
}
