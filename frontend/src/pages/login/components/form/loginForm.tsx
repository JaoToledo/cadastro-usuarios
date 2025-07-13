import { AuthFormInput } from "../../../../components/formInput";
import type { loginFormProps } from "./interfaces";
import Lock from '../../../../assets/icons/Lock.svg?react'
import Profile from '../../../../assets/icons/Profile.svg?react'

/**
 * @file loginForm.tsx
 * @module LoginForm
 * @description
 * Componente de formulário de login, integrando inputs customizados e validação de erros.
 *
 * - Utiliza AuthFormInput para campos de e-mail e senha.
 * - Exibe mensagens de erro específica entre os campos.
 * - Recebe o hook de formulário como prop para integração total com react-hook-form.
 * - Utiliza ícones SVG para melhor UX.
 *
 * @see src/components/formInput/index.tsx
 * @see src/pages/login/components/form/interfaces.ts
 */

export function LoginForm({ form, globalError }: loginFormProps) {

  return (
    <div className="space-y-[50px]">
      <div className={globalError ? "border border-red-500 rounded-[50px] " : "" }>
      <AuthFormInput
      control={form.control}
      name="email"
      placeholder="Email"
      type="email"
      icon={< Profile />}
      withIcon 
       />
       </div>
       <div className={globalError ? "border border-red-500 rounded-[50px] " : "" }>
       <AuthFormInput
      control={form.control}
      type="password"
      name="password"
      placeholder="Password"
      icon={< Lock />} 
      withIcon
       />
       </div>
    </div>
  )
}