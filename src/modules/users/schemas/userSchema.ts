import { z } from "zod";

export const UserSchema = z.object({
  id: z.string(),
  fullName: z.string(),
  userName: z.string(),
  email: z.string(),
  created_at: z.string().datetime().optional(),
  updated_at: z.string().datetime().optional(),
})
