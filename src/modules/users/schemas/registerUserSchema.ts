import { z } from "zod";
import { userPasswordRequirementes } from "../../../shared/utils/authSchemas";

export const RegisterUserSchema = z.object({
  fullName: z.string().max(32),
  userName: z.string().max(20),
  email: z.string().email(),
  password: userPasswordRequirementes,
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords doesn't match!",
  path: ["confirmPassword"],
});