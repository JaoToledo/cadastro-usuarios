// Controller recebe e responde a requisição. Responsável por receber os dados do cliente (request) e responde o cliente (reply)

import { FastifyRequest, FastifyReply } from 'fastify';
import { RegisterUserService } from '../../services/user/register/RegisterUserService';
import { RegisterUserSchema } from '../../schemas';
import { unknown } from 'zod';
import { hashPassword } from '../../../../shared/password';

/**
 * Controller responsável por registrar um novo usuário.
 */
class RegisterUserController {
    /**
     * Processa o cadastro de usuário e retorna confirmação de criação.
     */
    async handle(request: FastifyRequest, reply: FastifyReply){  

   const {email,fullName,userName,password} = RegisterUserSchema.parse(request.body)
    
    const userService = new RegisterUserService()                          // <- Inicializando a classe que foi criada em services
    
    const user = await userService.execute({ fullName, userName, email, password });            //O executo nada mais é do que o nome do método que foi criado na pasta services, e será chamado.

    reply.send(user)                                                   // <- devoler para a API o que o serviço está devolvendo
    }
} 

export { RegisterUserController }
