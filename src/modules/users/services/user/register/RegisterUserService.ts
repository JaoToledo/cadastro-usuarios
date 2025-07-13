import prismaClient from "../../../../../shared/prisma";
import { hashPassword } from '../../../../../shared/utils/passwords'
import { RegisterUserProps } from '../../Interfaces/InterfaceService'

/**
 * Serviço responsável por registrar um novo usuário.
 */
export class RegisterUserService {                            
    /**
     * Executa o cadastro do usuário e retorna confirmação.
     */
    async execute({ 
        fullName,
         userName,
          email,
           password, }: RegisterUserProps){                                 

        const errors: Record<string, string> = {};
        
        const emailAlreadyExists = await prismaClient.user.findUnique({
            where: { email: email, }
        });
        if (emailAlreadyExists) {
            errors.email = "Email Already Exist"
        }

        const userExists = await prismaClient.user.findUnique({
            where: { userName: userName, }
        });
        if (userExists) {
            errors.userName = "User Already Exist"
        }

        if (Object.keys(errors).length > 0) {
            return { errors };
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