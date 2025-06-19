// É o mapa de rotas da API. que define o que será feito quando X rota for acessada.

import fastify, { FastifyInstance } from "fastify";
import { RegisterUserController } from './modules/users/controllers/register/RegisterUserController'
import { ListUserController } from './modules/users/controllers/register/ListUserController'
import { DeleteUserController } from './modules/users/controllers/register/DeleteUserController'
import { LoginUserController } from './modules/users/controllers/login/LoginUserController'
import z, { boolean, optional, string } from "zod"
import { FastifyTypedInstance } from "./types";
import { RegisterUserSchema, LoginUserSchema, UserSchema } from './Schemas'

/**
 * Define as rotas da API de usuários, incluindo cadastro, login, listagem e exclusão.
 * Cada rota possui validação de schema e documentação para o Swagger.
 */
export async function routes(app: FastifyTypedInstance ) {

    app.get("/users", {
        schema: {
            summary: 'Users list',
            tags: ['users'],
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
            tags: ['users'],
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
            tags: ['auth'],
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
    
    app.delete("/user", {
        schema: {
            summary: 'Deletar usuário',
            tags: ['users'],
            querystring: z.object({
                id: z.string({
                    required_error: "Needed User ID",
                    invalid_type_error: "User ID Must be a string"
                }).min(1, "ID can't be empty")
            }),
            response: {
                200: z.object({
                    message: z.string().describe('User Deleted')
                })
            }
        }
    }, async (request, reply) => { 
        return new DeleteUserController().handle(request, reply)
    })
}