import { Button } from "../../components/button";
import { OrDivisor } from "../../components/orDivisor";
import { SocialButton } from "../../components/socialMidiaButton/socialMidiaButton";
import { useRegisterForm, type RegisterFormValues } from "../../hooks/useRegisterForm";
import { Typography } from "../../utils/themes/Typography";
import { RegisterForm } from "./components/form/registerForm";
import GoogleIcon from '../../assets/icons/GoogleIcon.svg?react'
import LinkedinIcon from '../../assets/icons/LinkedinIcon.svg?react'
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";
import { PageTransition } from "../../utils/themes/PageTransition";

/**
 * @file index.tsx
 * @module RegisterScreen
 * @description
 * Tela de cadastro de novos usuários. Gerencia o formulário de registro, validação,
 * envio dos dados para a API e tratamento de erros de backend.
 *
 * - Utiliza hook customizado para controle do formulário (useRegisterForm).
 * - Realiza requisição POST para a rota /register.
 * - Trata múltiplos formatos de erro retornados pela API.
 * - Redireciona para a tela de login após cadastro bem-sucedido.
 * - Exibe botões para login social (Google, LinkedIn).
 * - Utiliza componentes reutilizáveis para layout, tipografia e botões.
 *
 * @see src/hooks/useRegisterForm.ts
 * @see src/services/api.ts
 * @see src/components/button.tsx
 * @see src/components/socialMidiaButton/socialMidiaButton.tsx
 */

export function RegisterScreen(){

  const form = useRegisterForm()
  const { setError } = form;

  const navigate = useNavigate()

  const values = form.getValues();
  console.log(values.fullName);
  console.log(values.password);
  console.log(values.email);
  console.log(values.confirmPassword);
  console.log(values.userName);

  function handleSubmitForm(data: RegisterFormValues) {
    api.post("/register", data)
    .then(response => {
      console.log("User Registred", response.data)
      navigate("/login")
    }).catch(error => {
      const data = error.response.data;
    
      // Caso múltiplos erros
      if (data.errors) {
        if (data.errors.userName) {
          setError("userName", { type: "manual", message: data.errors.userName });
        }
        if (data.errors.email) {
          setError("email", { type: "manual", message: data.errors.email });
        }
        // Adicione outros campos se necessário
      }
      // Caso erro único (mensagem genérica)
      else if (data.message) {
        const message = data.message;
        if (message.toLowerCase().includes("user")) {
          setError("userName", { type: "manual", message });
        } else if (message.toLowerCase().includes("email")) {
          setError("email", { type: "manual", message });
        } else {
          // Se não identificar o campo, pode mostrar em um campo genérico ou alerta
          setError("userName", { type: "manual", message });
        }
      }
    });
  }

  return (
    <PageTransition>
    <div className="bg-bg_gray h-screen flex items-center justify-center">
    <div className="
    bg-white max-w-lg mx-auto w-full py-[30px] px-[50px]                  
    justify-center rounded-[28px]">
      <div>
      <Typography className="mb-[45px] text-center text-shadow-lg " variant="H1">
          SIGN UP
        </Typography>
      </div>

      <form onSubmit={form.handleSubmit(handleSubmitForm)}  >
        <RegisterForm form={form} />
        <div className="mx-auto my-[45px] px-[120px]">
          <Button>
            <Typography variant="Label" className="text-white" >
            SUBMIT  
            </Typography>
          </Button>
        </div>
      </form>

      <div className="mb-[35px]">
          <OrDivisor />
        </div>

        <div className="flex flex-row space-x-10 w-full">
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
              Sign up with Linkedin
            </Typography>
          </SocialButton>
        </div>

      </div>
    </div>
    </PageTransition>
  )
}