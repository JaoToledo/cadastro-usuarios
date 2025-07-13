/**
 * @file useRegisterForm.ts
 * @module useRegisterForm
 * @description
 * Hook customizado para gerenciamento do formulário de registro de usuário, integrando validação avançada com Zod e React Hook Form.
 *
 * - Define o schema de validação para todos os campos do registro, incluindo regras de senha e confirmação.
 * - Utiliza passwordRequirements para validação robusta de senha.
 * - Aplica validação cruzada para garantir que as senhas coincidam.
 * - Retorna o hook useForm já tipado e configurado com valores padrão e validação automática.
 * - Facilita a integração do formulário de registro com componentes controlados e UX aprimorada.
 *
 * @see https://react-hook-form.com/
 * @see https://zod.dev/
 * @see @hookform/resolvers/zod
 * @see src/utils/zodDefinedSchemas/authSchemas.ts
 */
// Hook personalizado para gerenciar o formulário de registro de usuário com validação usando Zod e React Hook Form
import z from "zod";
import { passwordRequirements } from "../utils/zodDefinedSchemas/authSchemas";
import { useForm, type UseFormReturn} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const userRegisterSchema = z.object({
  fullName: z.string().max(60), 
  userName: z.string().max(24), 
  email: z.string().email(),    
  password: passwordRequirements, 
  confirmPassword: z.string()     
})

.refine((data) => data.password === data.confirmPassword, {
  message: "Passwords doesn't match",
  path: ["confirmPassword"],
})

export type RegisterFormValues = z.infer<typeof userRegisterSchema>
export type RegisterFormReturn = UseFormReturn<RegisterFormValues>

export function useRegisterForm() {
  return useForm<RegisterFormValues>({
    defaultValues: {
      fullName: '',
      userName: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    resolver: zodResolver(userRegisterSchema), 
    mode: "onSubmit",
    criteriaMode: "all",
  })
}