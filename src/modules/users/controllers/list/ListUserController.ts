import { FastifyRequest, FastifyReply } from "fastify"  
import { ListUserServices } from '../../services/user/list/ListUserService'

/**
 * Controller responsável por listar usuários cadastrados.
 */
class ListUserController{
    /**
     * Retorna a lista de usuários cadastrados.
     */
    async handle(request: FastifyRequest, reply: FastifyReply){
        
        const listUserServices = new ListUserServices();
        const users = await listUserServices.execute();

        reply.send({users});
    } 
}

export { ListUserController }