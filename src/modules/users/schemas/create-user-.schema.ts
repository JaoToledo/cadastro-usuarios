/**
 * Schema de validação para cadastro de novo usuário.
 */
import { boolean, z, } from "zod";

export const RegisterUserSchema = z.object({
    fullName: z.string().max(32),
    userName: z.string().max(20),
    email: z.string().email(),
    password: z.string().regex(/(?=.*[A-Z])/).regex(/(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~])/).min(8).trim(),
    confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords doesn't match!",
    path: ["confirmPassword"],
});

