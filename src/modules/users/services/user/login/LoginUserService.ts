import { comparePassword } from "../../../../../shared/utils/passwords";
import prismaClient from "../../../../../shared/prisma";
import { LoginUserProps } from "../../Interfaces/InterfaceService";


/**
 * Serviço de autenticação de usuário.
 * Responsável por validar email e senha e retornar os dados do usuário autenticado.
 *
 * Fluxo:
 * 1. Verifica se email e senha foram informados.
 * 2. Busca o usuário no banco de dados pelo email.
 * 3. Se não encontrar, lança erro "Email not found".
 * 4. Compara a senha informada com o hash salvo no banco.
 * 5. Se não bater, lança erro "Incorret Password".
 * 6. Se tudo estiver correto, retorna os dados do usuário (sem a senha).
 *
 * @param {LoginUserProps} { email, password } - Dados de login do usuário.
 * @returns {Promise<{ user: { id: string, fullName: string, email: string, userName: string } }>}
 * Objeto contendo os dados do usuário autenticado.
 *
 * @throws {Error} Se faltar email ou senha, se o email não existir ou se a senha estiver incorreta.
 */
export class LoginUserService {
    async execute({email, password,}: LoginUserProps){

        if (!email || !password) {
            throw new Error("Complete all fields")
        }

        const user = await prismaClient.user.findUnique({
            where: { email: email }
        });
        const passwordMatch = user && await comparePassword(password, user.password);

        if (!user || !passwordMatch){
            throw new Error("Incorret email or password")
        } 
        return{
            user: {
                id: user.id,
                fullName: user.fullName,
                email: user.email,
                userName: user.userName   
            }   
        }
    } 
}