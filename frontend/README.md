# Cadastro de Usuários

Este projeto é uma aplicação web completa para cadastro e autenticação de usuários, composta por um frontend moderno em React (Vite + TypeScript + Tailwind CSS) e uma API backend (Node.js/Express, não inclusa nesta pasta). O sistema permite o registro, login e gerenciamento de usuários, com foco em experiência do usuário, validação robusta e arquitetura escalável.

## Funcionalidades

- Cadastro de novos usuários com validação avançada de dados
- Login seguro com feedback visual de erros
- Exibição do nome do usuário autenticado na tela inicial
- Integração com autenticação social (Google, LinkedIn) [em desenvolvimento]
- Layout responsivo e acessível
- Separação clara entre frontend e backend

## Tecnologias Utilizadas

- [React](https://react.dev/) + [Vite](https://vitejs.dev/) para o frontend
- [TypeScript](https://www.typescriptlang.org/) para tipagem estática
- [Tailwind CSS](https://tailwindcss.com/) para estilização rápida e responsiva
- [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/) para validação de formulários
- [Framer Motion](https://www.framer.com/motion/) para animações de transição
- [Axios](https://axios-http.com/) para requisições HTTP

## Estrutura do Projeto

```
frontend/
  src/
    components/         # Componentes reutilizáveis (botões, inputs, etc)
    hooks/              # Hooks customizados para lógica de formulários
    pages/              # Páginas principais (login, registro, home)
    services/           # Configuração de API e serviços externos
    utils/              # Utilitários, temas e validações
    assets/             # Ícones e imagens
  public/               # Arquivos estáticos
  package.json          # Dependências e scripts do frontend
  tailwind.config.js    # Configuração do Tailwind CSS
  ...
```

## Pré-requisitos

- [Node.js](https://nodejs.org/) (versão 18 ou superior recomendada)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)
- Backend/API rodando separadamente (consulte o README da API para detalhes)

## Instalação e Execução

1. **Clone o repositório e acesse a pasta do frontend:**

   ```bash
   git clone <url-do-repositorio>
   cd frontend
   ```

2. **Instale as dependências:**

   ```bash
   npm install
   # ou
   yarn install
   ```

3. **Configure as variáveis de ambiente (se necessário):**

   - Por padrão, a aplicação espera que a API esteja rodando em `http://localhost:3333`.
   - Para alterar, edite o arquivo de configuração da API em `src/services/api.ts`.

4. **Inicie o servidor de desenvolvimento:**

   ```bash
   npm run dev
   # ou
   yarn dev
   ```

5. **Acesse a aplicação:**

   Abra o navegador em [http://localhost:5173](http://localhost:5173) (ou a porta indicada no terminal).

## Observações

- O projeto segue boas práticas de acessibilidade, responsividade e organização de código.


