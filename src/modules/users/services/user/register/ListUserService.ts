import prismaClient from "../../../../../shared/prisma";

/**
 * Serviço responsável por listar usuários cadastrados.
 */
export class ListUserServices {
    /**
     * Retorna a lista de usuários cadastrados.
     */
    async execute() {
        
        const users = await prismaClient.user.findMany() 

        const formattedUsers = users.map(user =>({
            ...user,
            created_at: user.created_at?.toISOString(),
            updated_at: user.updated_at?.toISOString(),

        }));

        
        return formattedUsers;
    }    
}