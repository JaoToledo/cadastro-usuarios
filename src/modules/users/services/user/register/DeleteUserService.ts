import prismaClient from "../../../../../shared/prisma";
import { DeleteUserProps } from '../../Interfaces/InterfaceService'

/**
 * Serviço responsável por deletar um usuário pelo ID.
 */
export class DeleteUserService {
    /**
     * Executa a exclusão do usuário pelo ID informado.
     */
    async execute({ id }: DeleteUserProps) {

        if(!id){
            throw new Error("Invalid Solicitation.")
        }

        const findUser = await prismaClient.user.findFirst({
            where:{
                id: id  
            }
        })

        if(!findUser){
            throw new Error("User does not exist!")
        }

        await prismaClient.user.delete({
            where:{
                id: findUser.id 
            }
        })

        return { message: "User Deleted"}
    }
}