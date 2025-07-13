/**
 * @file useLoginForm.ts
 * @module useLoginForm
 * @description
 * Hook customizado para gerenciamento do formulário de login, integrando validação com Zod e React Hook Form.
 *
 * - Define o schema de validação para login (e-mail e senha).
 * - Utiliza zodResolver para validação automática dos campos.
 * - Retorna o hook useForm já tipado e configurado com valores padrão.
 * - Facilita a integração do formulário de login com componentes controlados e validação robusta.
 *
 * @see https://react-hook-form.com/
 * @see https://zod.dev/
 * @see @hookform/resolvers/zod
 */
import z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, type UseFormReturn  } from 'react-hook-form'


const loginFormSchema = z.object({
  email: z.string().email(),
  password: z.string(),
})

export type LoginFormValues = z.infer<typeof loginFormSchema>
export type LoginFormReturn = UseFormReturn<LoginFormValues>

export function useLoginForm() {
  return useForm<LoginFormValues>({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: zodResolver(loginFormSchema),
  })
}