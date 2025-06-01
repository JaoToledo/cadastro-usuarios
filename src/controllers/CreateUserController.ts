// Controller recebe e responde a requisição. Responsável por receber os dados do cliente (request) e responde o cliente (reply)

import { FastifyRequest, FastifyReply } from 'fastify';
import { CreateUserService } from '../services/CreateUserServices'

class CreateUserController{ // <- cuida da lógica da rota
    async handle(request: FastifyRequest, reply: FastifyReply){             // <- "handle" método que recebe a requisiçõ e envia resposta.
                                                                           // <- FastifyRequest dá acesso ao body, params, query | FastifyReply é usado para mandar a resposta HTTPS
                                                                          // "HTTPS" Usado para transferir dados entre um navegador. Criptografa os dados. 

    const { name, email} = request.body as { name: string, email: string}

    const userService = new CreateUserService()                          // <- Inicializando a classe que foi criada em services
    
    const user = await userService.execute({ name, email });            //O executo nada mais é do que o nome do método que foi criado na pasta services, e será chamado.

    reply.send(user)                                                   // <- devoler para a API o que o serviço está devolvendo
    }
} 

export { CreateUserController }