import { FastifyRequest, FastifyReply } from "fastify"  
import { ListUserServices } from '../services/ListUserServices'


class ListUserController{
    async handle(request: FastifyRequest, reply: FastifyReply){
        
        const listUserServices = new ListUserServices();
        const users = await listUserServices.execute();

        reply.send(users);
    } 
}

export { ListUserController }