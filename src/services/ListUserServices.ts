import prismaClient from "../prisma";

class ListUserServices{
    async execute(){
        
        const users = await prismaClient.user.findMany() // findMany que é para encontrar todos os usuários
        
        return users;
    }    
}

export { ListUserServices }