import React from "react";

/**
 * @file Typography.tsx
 * @module Typography
 * @description
 * Componente de tipografia reutilizável, com variantes pré-definidas para padronizar
 * tamanhos, pesos e estilos de texto em toda a aplicação.
 *
 * - Variantes: Default, H1, Label, LabelInput, MediumLabel, MiniLabel.
 * - Permite customização adicional via prop className.
 * - Facilita a manutenção da identidade visual do projeto.
 *
 * @see https://tailwindcss.com/
 */

const typographyVariants = {
  Default: "font-roboto text-[24px] leading-[24px] font-regular",
  H1: "font-roboto text-[48px] leading-[53px] font-bold tracking-[10px]",
  Label: "font-roboto text-[24px] leading-[28px] font-normal",
  LabelInput: "font-roboto text-[24px] leading-[16px] font-normal tracking-[30%]",
  MediumLabel: "font-roboto text-[16px] leading-[18.8px] font-normal tracking-[10%]",
  MiniLabel: "font-roboto text-[14px] leading-[16px] font-normal ",
}

type TypographyVariant = keyof typeof typographyVariants;
type TypographyProps = {
  children: React.ReactNode;
  variant?: TypographyVariant
  className?: string
}

export function Typography({ variant = "Default", children, className = ""}: TypographyProps) {
  return (
    <p className={ `${typographyVariants[variant]} ${className}` }>
       {children}
     </p>

  )
}