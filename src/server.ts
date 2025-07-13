/**
 * Inicializa e configura o servidor Fastify, plugins, rotas e documentação Swagger.
 */
// server.ts é o coração da API, onde tudo se inicia. O que de fato sobe o servidor. 

import fastify from "fastify"; 
import fastifyJwt from "@fastify/jwt";  
import cors from "@fastify/cors" 
import { routes } from "./routes"; 
import { validatorCompiler, serializerCompiler, ZodTypeProvider, jsonSchemaTransform } from 'fastify-type-provider-zod'
import fastifySwagger from "@fastify/swagger"
import fastifySwaggerUi from '@fastify/swagger-ui'
       

const app = fastify().withTypeProvider<ZodTypeProvider>()

app.setValidatorCompiler(validatorCompiler)
app.setSerializerCompiler(serializerCompiler)

/**
 * Função principal de inicialização do servidor.
 * 
 * Fluxo:
 *  1. Registra o middleware CORS para permitir requisições de qualquer origem.
 *  2. Registra o plugin JWT para autenticação baseada em tokens.
 *  3. Configura e registra o Swagger para documentação automática da API.
 *  4. Registra as rotas principais da aplicação.
 *  5. Define rota raiz para health check.
 *  6. Inicia o servidor HTTP na porta e host especificados.
 *  7. Em caso de erro, loga e encerra o processo.
 */
const start = async () => {
    try {
        await app.register(cors, { origin: '*' });
        
        app.register(fastifyJwt, {
            secret: 'megalovania'
        })    

        app.register(fastifySwagger, {
            openapi: {
                info: {
                    title: "Login API",
                    version: "1.0.0",
                    description: "API para login de usuários"   
                }
            },
            transform: jsonSchemaTransform,
        }) 

        app.register(fastifySwaggerUi, {
            routePrefix: '/docs',
        })

        await app.register(routes); 

        app.get('/', async (request, reply) => {
            return { message: 'API está funcionando' }
        })

        await app.listen({  
            port: 3333, 
            host: '0.0.0.0'  
        })

        console.log('Servidor rodando em http://localhost:3333')
        } catch(err) { console.error(err); process.exit(1) }
}
start();