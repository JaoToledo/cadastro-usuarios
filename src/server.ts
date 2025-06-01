// server.ts é o coração da API, onde tudo se inicia. O que de fato sobe o servidor. 

import fastify from "fastify"; // Fastify é um framework para Node.js. Sua função é receber aquisiçoes e enviar respostas.
import cors from "@fastify/cors" // Cors é um plugin do Fastify que permite que o navegador do usuário aceite requisições de outros dominios (como um front)
import { routes } from "./routes"; //importa as rotas que foram definidas no routes.ts



const app = fastify({ logger: true }) // Cria o servidor em sí. O const app é o servidor, uma instancia do fastify. A instancia é uma função que cria o servidor.

app.setErrorHandler((error, request, reply) => {
    reply.code(400).send({ message: error.message })
})

const start = async () => {
    try {
        await app.register(cors, { methods: ['GET', 'POST', 'DELETE'] }); // "cors" permite que o beckend aceite requisições de outros dominios (como um front)
        await app.register(routes); // "routes" carrega todas as rotas que foi definido no routes.ts     

        await app.listen({   // Inicia o servidor na porta 3333, permitindo outras pessoas acessarem também na rede local
            port: 3333, 
            host: '0.0.0.0'  // Permite conexões de qualquer IP
        })
        
        console.log('Servidor rodando em http://localhost:3333')
    } catch(err) {
        console.error('Erro ao iniciar o servidor:', err)
        process.exit(1)
    }
}

start();