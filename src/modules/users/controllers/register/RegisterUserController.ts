import { FastifyRequest, FastifyReply } from 'fastify';
import { RegisterUserService } from '../../services/user/register/RegisterUserService';
import { RegisterUserSchema } from '../../schemas';


/**
 * Controller responsável por registrar um novo usuário.
 */
class RegisterUserController {
    /**
     * Processa o cadastro de usuário e retorna confirmação de criação.
     */
    async handle(request: FastifyRequest, reply: FastifyReply){  

    try {
        const {email,fullName,userName,password} = RegisterUserSchema.parse(request.body)
    
    const userService = new RegisterUserService();
    const result = await userService.execute({ fullName, userName, email, password });  

    if (result && "errors" in result) {
        return reply.status(400).send({ errors: result.errors })
    }

    reply.send(result); 
    } catch (error) {
        if (error instanceof Error) {
            return reply.status(400).send({ errors: error.message});
        }
        return reply.status(400).send({message: 'Unknow error on user register'});
        
    }                                 
    }
} 

export { RegisterUserController }
