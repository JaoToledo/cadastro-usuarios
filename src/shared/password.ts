import { hash, compare } from 'bcryptjs';

/**
 * Quantidade de rounds de salt para o hash da senha.
 */
const saltRounds = 10;

/**
 * Gera um hash seguro para a senha informada.
 * @param password Senha em texto puro.
 * @returns Hash da senha.
 */
export async function hashPassword(password: string): Promise<string> {
    return hash(password, saltRounds);
}

/**
 * Compara uma senha em texto puro com um hash.
 * @param password Senha em texto puro.
 * @param hashedPassword Hash da senha.
 * @returns True se a senha for válida, false caso contrário.
 */
export async function comparePassword(password:string, hashedPassword: string): Promise<boolean> {
    return compare(password, hashedPassword);
}


