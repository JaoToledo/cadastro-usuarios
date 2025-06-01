// Pasta services é onde irá ser salvo no banco de dados. Responsável por fazer o cadastro e manipular o banco de dados, sendo chamada pelo controller. 
import prismaClient from "../prisma";

interface CreateUserProps{ // Interface serve para garantir que os dados que está sendo passado apra o método "execute" estão no formato correto. E se for passado valors que nçao sejam string por exemplo, o typescript apontara um erro.
    name: string;
    email: string;
}

class CreateUserService {                              // <-- "class CreateUserService" significa que criei uma classe com o nome "CreateUserService"
    async execute({ name, email }: CreateUserProps){   // <-- "execute()" é o metodo da classe. O async indinca que este método é assóincrono (pode usar await)
                                                     // Métodos são ações que a classe irá executar. No caso "execute()" irá criar um usuário no banco usando Prisma
        if(!name || !email){
            throw new Error("Complete all camps") // Caso não enviar o nome ou email, aparecerá um erro "Preencha todos os campos"
        }

       const user = await prismaClient.user.create({
        data:{
            name,
            email,
            Status: true    
        }
       })

        return user 
    } 
}

export {CreateUserService}