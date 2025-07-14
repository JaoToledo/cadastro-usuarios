/**
 * @file registerForm.tsx
 * @module RegisterForm
 * @description
 * Componente de formulário de cadastro de usuário, integrando inputs customizados, validação de erros e dicas de senha.
 *
 * - Utiliza AuthFormInput para todos os campos do formulário (nome, usuário, email, senha, confirmação).
 * - Exibe mensagens de erro específicas abaixo dos campos.
 * - Mostra caixa de requisitos de senha ao focar no campo de senha.
 * - Recebe o hook de formulário como prop para integração total com react-hook-form.
 * - Utiliza componentes auxiliares para requisitos de senha.
 *
 * @see src/components/formInput/index.tsx
 * @see src/pages/register/components/form/passwordBox.tsx
 * @see src/pages/register/components/form/interfaces.ts
 */
import { AuthFormInput } from "../../../../components/formInput"
import { PasswordRequirementsBox } from "./passwordBox";
import type { RegisterFormProps } from "./interfaces"
import { useState } from "react";

export function RegisterForm({ form }: RegisterFormProps){

  const { clearErrors } = form;

  const [showPasswordBox, setShowPasswordBox] = useState(false);
  const passwordValue = form.watch("password");

  return (  
    <div className="w-full space-y-[50px]">
      <div>
        <AuthFormInput 
        control={form.control}
        name="fullName"
        placeholder="Full Name"
        />
        </div>
        
        <div>
        <AuthFormInput 
        control={form.control}
        name="userName"
        placeholder="User Name"
        />
        </div>

        <div> 
        <AuthFormInput 
        control={form.control}
        name="email"
        placeholder="Email"
        />
        </div>
        
        <div> 
        <AuthFormInput 
        control={form.control}
        name="password"
        type="password"
        placeholder="Password"
        onFocus={() => setShowPasswordBox(true)}
        onBlur={() => setShowPasswordBox(false)}
        />
        <div className="absolute ml-115 mt-[-115px]">
          {showPasswordBox && (
            <PasswordRequirementsBox password={passwordValue} />
          )}
          </div>
        </div>

        <div> 
        <AuthFormInput 
        control={form.control}
        name="confirmPassword"
        onFocus={() => clearErrors("confirmPassword")}
        type="password"
        placeholder="Confirm Password"
        />
      </div>
    </div>
  )
}