import z, { boolean, optional, string } from "zod"
import { hashPassword } from "./shared/password";

export const UserSchema = z.object({
    id: z.string(),
    fullName: z.string(),
    userName: z.string(),
    email: z.string(),
    created_at: z.string().datetime().optional(),
    updated_at: z.string().datetime().optional(),
})

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

export const LoginUserSchema = z.object({
    email: z.string().email().trim(),
    password: z.string().regex(/(?=.*[A-Z])/).regex(/(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~])/).min(8).trim()
})
