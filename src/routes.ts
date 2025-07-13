import { RegisterUserController } from './modules/users/controllers/register/RegisterUserController'
import { ListUserController } from './modules/users/controllers/list/ListUserController'
import { LoginUserController } from './modules/users/controllers/login/LoginUserController'
import z from "zod"
import { FastifyTypedInstance } from "./types";
import { RegisterUserSchema, LoginUserSchema, UserSchema } from './modules/users/schemas'

/**
 * Define as rotas da API de usuários, incluindo cadastro, login, listagem e exclusão.
 * Cada rota possui validação de schema e documentação para o Swagger.
 */
export async function routes(app: FastifyTypedInstance ) {

    app.get("/users", {
        schema: {
            summary: 'Users list',
            tags: ['List'],
            response: {
                200: z.object({
                    users: z.array(UserSchema), 
                })
            }
        }
    }, async (request, reply) => { 
        return new ListUserController().handle(request, reply)
    })

    app.post("/register", {
        schema: {
            tags: ['Register'],
            summary: 'Create a new account',  
            body: RegisterUserSchema,
           
            response: {             
                201: z.null().describe('User Created'),
            }
        }
    }, async (request, reply) => { 

        const { email, fullName, userName, confirmPassword, password } = request.body

        return new RegisterUserController().handle(request, reply)
    })

    app.post("/login", {
        schema: {
            tags: ['Login'],
            summary: 'Login to your account',
            body: LoginUserSchema,
            response: {
                200: z.object({
                    user: z.object({
                        id: z.string(),
                        fullName: z.string(),
                        email: z.string(),
                        userName: z.string()
                    }),
                    token: z.string()
                })
            }
        }
    }, async (request, reply) => {
        return new LoginUserController().handle(request, reply)
    })
}