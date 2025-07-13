# Cadastro de Usuários – API


API robusta para autenticação, cadastro e gerenciamento de usuários, desenvolvida com Node.js, Fastify, TypeScript e Prisma ORM.  
Inclui validação avançada, autenticação JWT, documentação Swagger e integração pronta para frontend React.

---

## 📋 Funcionalidades


- **Cadastro de usuários** com validação de dados e senha forte
- **Login seguro** com autenticação JWT
- **Listagem de usuários** (endpoint para administração)
- **Documentação interativa** via Swagger em `/docs`
- **Validação de dados** com Zod e mensagens de erro detalhadas
- **CORS habilitado** para integração com frontends modernos

---

## 🚦 Endpoints principais


### `POST /register` – Cadastro de usuário

- **Body esperado:**
  ```json
  {
    "fullName": "Nome Completo",
    "userName": "usuario123",
    "email": "email@exemplo.com",
    "password": "SenhaForte123!",
    "confirmPassword": "SenhaForte123!"
  }
  ```
- **Validações:**
  - Nome completo: até 32 caracteres
  - Nome de usuário: até 20 caracteres, único
  - E-mail: formato válido, único
  - Senha: 
    - Mínimo 8, máximo 30 caracteres
    - Pelo menos uma letra maiúscula
    - Pelo menos um número
    - Pelo menos um caractere especial
  - Senha e confirmação devem ser iguais
- **Respostas:**
  - `201 Created` em caso de sucesso
  - `400 Bad Request` com objeto `errors` detalhando campos inválidos

---

### `POST /login` – Autenticação


- **Body esperado:**
  ```json
  {
    "email": "email@exemplo.com",
    "password": "SenhaForte123!"
  }
  ```
- **Respostas:**
  - `200 OK` com:
    ```json
    {
      "user": {
        "id": "...",
        "fullName": "...",
        "email": "...",
        "userName": "..."
      },
      "token": "jwt_token_aqui"
    }
    ```
  - `400 Bad Request` com mensagem de erro genérica ("E-mail ou senha incorretos")

---

### `GET /users` – Listagem de usuários


- **Resposta:**
  - `200 OK` com:
    ```json
    {
      "users": [
        {
          "id": "...",
          "fullName": "...",
          "email": "...",
          "userName": "..."
        },
        ...
      ]
    }
    ```

---

## 🔒 Validação e Segurança


- **Senhas nunca são armazenadas em texto plano**: são sempre salvas com hash seguro.
- **Validação de senha**: feita tanto no backend (Zod) quanto no frontend, garantindo requisitos de segurança.
- **JWT**: utilizado para autenticação e autorização de endpoints protegidos.
- **Mensagens de erro genéricas**: nunca expõem se o e-mail existe ou não, protegendo contra enumeração de usuários.

---

## 🛠️ Tecnologias utilizadas

- **Node.js** + **TypeScript**
- **Fastify** (servidor web)
- **Prisma ORM** (acesso ao banco de dados)
- **Zod** (validação de dados)
- **JWT** (autenticação)
- **Swagger** (documentação automática)
- **CORS** (integração frontend)

---

## 📑 Documentação automática

Acesse a documentação interativa da API em:  
```
http://localhost:3333/docs
```
Lá você pode testar todos os endpoints, ver exemplos de requisição e resposta, e explorar os schemas de validação.

---

## 🔗 Integração com o Frontend

- O frontend (React) consome os endpoints `/register` e `/login` para autenticação.
- O token JWT retornado no login pode ser armazenado no frontend para autenticação de rotas protegidas.
- Mensagens de erro detalhadas são retornadas para feedback ao usuário.

---

## 🚀 Como iniciar o projeto

1. **Clone o repositório:**
   ```bash
   git clone <url-do-repositorio>
   cd cadastro-usuarios
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Configure o banco de dados:**
   - Edite o arquivo `.env` com as credenciais do seu banco.
   - Rode as migrations do Prisma:
     ```bash
     npx prisma migrate dev
     ```

4. **Inicie o servidor:**
   ```bash
   npm run dev
   ```
   O servidor estará disponível em `http://localhost:3333`.

5. **Acesse a documentação Swagger:**
   ```
   http://localhost:3333/docs
   ```

---

## 📦 Estrutura de pastas (backend)

```
src/
  server.ts         # Inicialização do servidor Fastify
  routes.ts         # Definição das rotas principais
  modules/
    users/
      controllers/  # Controllers de registro, login, listagem
      services/     # Lógica de negócio (cadastro, autenticação)
      schemas/      # Schemas de validação Zod
  shared/           # Utilitários, helpers, schemas globais
  config/           # Configurações globais
  middlewares/      # Middlewares customizados
```

---

## 💡 Boas práticas implementadas

- Validação robusta de dados com feedback detalhado
- Separação clara de responsabilidades (controllers, services, schemas)
- Segurança em primeiro lugar (hash de senha, JWT, erros genéricos)
- Documentação automática e interativa
- Pronto para integração com qualquer frontend moderno

---

Se precisar de mais detalhes sobre endpoints, exemplos de uso ou integração, consulte a documentação Swagger ou explore os arquivos do projeto.
