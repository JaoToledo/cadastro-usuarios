import prismaClient from "../prisma";

interface DeleteUserProps{
    id: string;
}

class DeleteUserService{
    async execute({ id }: DeleteUserProps){

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

    return { message: "Deleted!"}

    }
}

export {DeleteUserService}