import { FastifyRequest, FastifyReply } from "fastify";
import { LoginUserSchema } from "../../schemas/login-user-schema";
import { LoginUserService } from '../../services/user/login/LoginUserService'
 
/**
 * Controller responsável por processar o login do usuário.
 */
class LoginUserController{ 
    /**
     * Processa a requisição de login, valida credenciais e retorna token de acesso.
     */
    async handle(request: FastifyRequest, reply: FastifyReply){  

        const {email, password} = LoginUserSchema.parse(request.body)
        
        const userService = new LoginUserService()                      
        
        const {user} = await userService.execute({email, password });    

        const token = await reply.jwtSign({id: user.id, email: user.email})

        return reply.send({
            user: {
                id: user.id,
                fullName: user.fullName,
                email: user.email,
                userName: user.userName
            },
            token 
        })   
                                                      
    }
} 

export { LoginUserController }