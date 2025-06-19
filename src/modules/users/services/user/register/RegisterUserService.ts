// Pasta services é onde irá ser salvo no banco de dados. Responsável por fazer o cadastro e manipular o banco de dados, sendo chamada pelo controller. 
import prismaClient from "../../../../../shared/prisma";
import { comparePassword, hashPassword } from '../../../../../shared/password'
import { RegisterUserProps } from '../../Interfaces/InterfaceService'

/**
 * Serviço responsável por registrar um novo usuário.
 */
export class RegisterUserService {                            
    /**
     * Executa o cadastro do usuário e retorna confirmação.
     */
    async execute({ fullName, userName, email, password, }: RegisterUserProps){   
                                                     
        if(!fullName || !userName || !email || !password) {
            throw new Error("Complete all camps") 
        }

        const emailAlreadyExists = await prismaClient.user.findUnique({
            where: {
                email: email,
            }
        });

        if (emailAlreadyExists) {
            throw new Error("Email Already Exist")
        }

        const userNameAlreadyExists = await prismaClient.user.findUnique({
            where: {
                userName: userName,
            }
        });

        if (userNameAlreadyExists) {
            throw new Error("User Name Already Exist")
        }


        const hashedPassword = await hashPassword(password);       

       const user = await prismaClient.user.create({
        data:{
            fullName,
            userName,
            email,
            password: hashedPassword, 
        }
       })

        return user 
    } 
}