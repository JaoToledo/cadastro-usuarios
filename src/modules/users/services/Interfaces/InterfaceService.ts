/**
 * Parâmetros necessários para deletar um usuário.
 */
export interface DeleteUserProps{
    /** ID único do usuário a ser deletado */
    id: string;
}

/**
 * Parâmetros necessários para criar um novo usuário.
 */
export interface RegisterUserProps{ 
    /** Nome completo do usuário */
    fullName: string;
    /** Nome do usuário no site */
    userName: string;
    /** Email do usuário */
    email: string;
    /** Senha do usuário */
    password: string;
    /** Confirma senha do usuário */
}

/**
 * Parâmetros necessários para login do usuário.
 */
export interface LoginUserProps { 
    /** Email do usuário */
    email: string;
    /** Senha do usuário */
    password: string;
}