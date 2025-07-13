import React from "react"

/**
 * @file button.tsx
 * @module Button
 * @description
 * Componente de botão reutilizável, estilizado com Tailwind CSS.
 * Suporta qualquer conteúdo filho (children) e aplica estilos de interação.
 *
 * - Estilização responsiva e acessível.
 * - Efeitos de hover, active e transição suave.
 * - Ideal para uso em formulários e ações principais.
 */

type ButtonProps = {
  children: React.ReactNode
}

export function Button( { children }: ButtonProps ) {
  return (

    <button 
    className="
    w-ful rounded-[50px] px-10 py-1.5 cursor-pointer
    bg-gray-800 hover:bg-gray-900 active:bg-black
    transition duration-150 ease-in-out shadow active:scale-95


    ">
      {children}
    </button>
  )
}