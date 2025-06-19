/**
 * Schema de validação para o ID do usuário.
 */
import { z } from "zod";

export const userId = z.object({
    id: z.string().nonempty()
})