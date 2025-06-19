import { PrismaClient } from '@prisma/client'

/**
 * Instância única do PrismaClient para acesso ao banco de dados.
 *
 * Utilizar este objeto para realizar queries e operações no banco de dados
 * de forma centralizada e eficiente em toda a aplicação.
 *
 */
const prismaClient = new PrismaClient();

export default prismaClient;