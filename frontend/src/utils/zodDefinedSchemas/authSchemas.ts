import { z } from 'zod'

export const passwordRequirements = z
.string()
.min(8)
.max(30, ",Max 30 characters")
.regex(/[!@#$%^&*(),.?":{}|<>_\-\\[\]/]/)
.regex(/[0-9]/)
.regex(/[A-Z]/)