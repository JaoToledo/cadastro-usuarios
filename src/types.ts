import { FastifyInstance, RawReplyDefaultExpression, RawRequestDefaultExpression, RawServerDefault, FastifyBaseLogger,  } from "fastify";
import { ZodTypeProvider } from "fastify-type-provider-zod";

/**
 * Instância do Fastify tipada para uso com Zod.
 */
export type FastifyTypedInstance = FastifyInstance<
RawServerDefault,
RawRequestDefaultExpression,
RawReplyDefaultExpression, 
FastifyBaseLogger,
ZodTypeProvider
>