/**
 * @file index.tsx
 * @module LoginScreen
 * @description
 * Tela de login do sistema. Responsável por renderizar o formulário de autenticação,
 * gerenciar o envio dos dados para a API, tratar o fluxo de navegação após login
 * e exibir opções de login social.
 *
 * - Utiliza o hook `useLoginForm` para controle e validação do formulário.
 * - Realiza requisição POST para a rota `/login` da API.
 * - Armazena o nome do usuário autenticado no localStorage.
 * - Redireciona para a página inicial após login bem-sucedido.
 * - Exibe botões para login com Google e LinkedIn (ainda sem integração).
 * - Inclui links para criação de conta e recuperação de senha.
 * - Utiliza componentes reutilizáveis para layout, tipografia e botões.
 *
 * @see src/hooks/useLoginForm.ts
 * @see src/services/api.ts
 * @see src/components/button.tsx
 * @see src/components/socialMidiaButton/socialMidiaButton.tsx
 * @see src/components/linkComponents/CreateAccountLink.tsx
 * @see src/components/linkComponents/ForgotPasswordLink.tsx
 */
import { OrDivisor } from "../../components/orDivisor";
import { Button } from "../../components/button";
import { useLoginForm, type LoginFormValues } from "../../hooks/useLoginForm";
import { Typography } from "../../utils/themes/Typography";
import { LoginForm } from "./components/form/loginForm";
import { SocialButton } from "../../components/socialMidiaButton/socialMidiaButton";
import GoogleIcon from "../../assets/icons/GoogleIcon.svg?react"
import LinkedinIcon from '../../assets/icons/LinkedinIcon.svg?react'
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";
import { CreateAccountLink } from "../../components/linkComponents/CreateAccountLink";
import { ForgotPasswordLink } from "../../components/linkComponents/ForgotPasswordLink";
import { useState } from "react";

export function LoginScreen() {
  const form = useLoginForm()
  const navigate = useNavigate()
  const [loginError, setLoginError] = useState("")

  const values = form.getValues();
  console.log(values.password);
  console.log(values.email);

  function handleSubmitForm(data: LoginFormValues) {
    api.post("/login", {
      email: data.email,
      password: data.password,
    })
    .then(response => {
      localStorage.setItem("userName", response.data.user.userName)
      navigate("/home")
    })
    .catch(() => {
      setLoginError("Incorrect email or password")
    })
  
  }
  return (
    <div className="bg-bg_gray h-screen flex items-center  ">
      <div className="bg-white w-full max-w-lg mx-auto py-[30px] px-8  rounded-[28px] justify-center items-center ">
        <Typography className="mb-[45px] text-center text-shadow-lg " variant="H1">
          SIGN IN
        </Typography>

        <div className="absolute mt-16 ml-32 "> 
        {loginError && (
          <Typography variant="MiniLabel" className="text-center text-red-600">
            {loginError}
          </Typography>
        )}        
        </div>

        <form  onSubmit={form.handleSubmit(handleSubmitForm)} className="px-[25px]">
          <LoginForm form={form} globalError={!!loginError} />

          <div className="mx-auto my-[45px] px-[120px]">
          <Button>
            <Typography variant="Label" className="text-white" >
            LOGIN  
            </Typography>
          </Button>
        </div>
        </form>
        
        <div className="flex justify-between mb-[35px]">
          <CreateAccountLink />
          <ForgotPasswordLink />
        </div>

        <div className="mb-[35px]">
          <OrDivisor />
        </div>

        <div className="flex space-x-10">
          <SocialButton 
          icon={ <GoogleIcon className="mr-[5px]"/> }
          onClick={() => {} }>
            <Typography className="pt-[4px]" variant="MiniLabel">
              Sign in with Google
            </Typography>
          </SocialButton>

          <SocialButton 
          icon={ <LinkedinIcon className="mr-[5px] "/> }
          onClick={() => {} }>
            <Typography className="pt-[4px]" variant="MiniLabel">
              Sign in with Linkedin
            </Typography>
          </SocialButton>
        </div>
        
      </div>
    </div>

  )
}  