import { FastifyRequest, FastifyReply } from 'fastify'
import { DeleteUserService } from '../../services/user/register/DeleteUserService';
import { userId } from '../../schemas';

/**
 * Controller responsável por deletar um usuário.
 */
class DeleteUserController {
    /**
     * Processa a exclusão de um usuário pelo ID.
     */
    async handle(request: FastifyRequest, reply: FastifyReply) {
        try {
            const { id } = request.query as { id: string }

            if (!id) {
                return reply.status(400).send({ message: "Needed ID User" })
            }

            const userIdValid = userId.parse({ id })

            const userService = new DeleteUserService();

            await userService.execute({ id: userIdValid.id })

            return reply.status(200).send({ message: "User Deleted"})
        }catch (error) {
            if (error instanceof Error) {

                if (error.message === "User does not exist!") {
                    return reply.status(404).send({ message: error.message})
                }

                return reply.status(500).send({ message: "Interal server error"})
            } 
        }
        }
    }


export { DeleteUserController }