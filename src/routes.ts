// É o mapa de rotas da API. que define o que será feito quando X rota for acessada.

import { FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply } from "fastify";
import { CreateUserController } from './controllers/CreateUserController'
import { ListUserController } from './controllers/ListUserController'
import { DeleteUserController } from './controllers/DeleteUserController'




export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions) {

    fastify.get("/teste", async (request: FastifyRequest, reply: FastifyReply) => { // GET é um método HTTPS que busca dados, usado para pegar informações do servidor

        return { ok: true}
    })

    fastify.post("/user", async (request: FastifyRequest, reply: FastifyReply) => { //POST Envia/Cria dados. usado para enviar dados ao servidor.   
        return new CreateUserController().handle(request, reply)
    })

    fastify.get("/users", async (request: FastifyRequest, reply: FastifyReply) => { 
        return new ListUserController().handle(request, reply)
    })

    fastify.delete("/user", async (request: FastifyRequest, reply: FastifyReply) => { //Delete deleta o que foi pedido para deletar
        return new DeleteUserController().handle(request, reply)
    })
}