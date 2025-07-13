import { z } from "zod";
import { userPasswordRequirementes } from "../../../shared/utils/authSchemas";

export const LoginUserSchema = z.object({
  email: z.string().email().trim(),
  password: userPasswordRequirementes
})