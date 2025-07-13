/**
 * Parâmetros necessários para deletar um usuário.
 * @interface DeleteUserProps
 * @property {string} id - ID único do usuário a ser deletado
 *
 * Parâmetros necessários para criar um novo usuário.
 * @interface RegisterUserProps
 * @property {string} fullName - Nome completo do usuário
 * @property {string} userName - Nome do usuário no site
 * @property {string} email - Email do usuário
 * @property {string} password - Senha do usuário
 * @property {string} [confirmPassword] - Confirma senha do usuário
 *
 * Parâmetros necessários para login do usuário.
 * @interface LoginUserProps
 * @property {string} email - Email do usuário
 * @property {string} password - Senha do usuário
 */

/**
 * Parâmetros necessários para deletar um usuário.
 */
export interface RegisterUserProps{ 
    fullName: string;
    userName: string;
    email: string;
    password: string;
  
}
export interface LoginUserProps { 
    email: string;
    password: string;
}