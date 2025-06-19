/**
 * Schema de validação para login de usuário (email e senha).
 */
import { z } from "zod";
import { hashPassword } from "../../../shared/password";

export const LoginUserSchema = z.object({
    email: z.string().email().trim(),
    password: z.string().regex(/(?=.*[A-Z])/).regex(/(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~])/).min(8).trim()
})