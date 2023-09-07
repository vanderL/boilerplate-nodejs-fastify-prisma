# App

Boilerplate Residência de Software

## RFs (Requisitos funcionais)

- [x] Deve ser possível se cadastrar;
- [x] Deve ser possível se autenticar;
- [x] Deve ser possível obter o perfil de um usuário logado;

## RNs (Regras de negócio)

- [x] O usuário não deve poder se cadastrar com um e-mail duplicado;

## RNFs (Requisitos não-funcionais)

- [x] A senha do usuário precisa estar criptografada;
- [x] Os dados da aplicação precisam estar persistidos em um banco PostgreSQL;
- [x] Todas listas de dados precisam estar paginadas com 20 itens por páginas;
- [x] O usuário deve ser indentificado por um JWT (JSON Web Token);

## Rodando localmente

Clone o projeto

```bash
  git clone https://github.com/vanderL/boilerplate-nodejs-fastify-prisma.git
```

Entre no diretório do projeto

```bash
  cd api-typescript-fastify-prisma
```

Instale as dependências

```bash
  npm install
```

Rode a imagem do docker

```bash
  docker compose up -d
```

Rode as migrations do prisma

```bash
  npx prisma migrate dev
```

## Rodando os testes

Para rodar os testes unitários, rode o seguinte comando

```bash
  npm run test
```

Para rodar os testes de integração, rode o seguinte comando

```bash
  npm run test:e2e
```

## Iniciando o projeto

Para rodar os testes unitários, rode o seguinte comando

```bash
  npm run dev
```

## Variáveis de Ambiente

Para rodar esse projeto, você vai precisar adicionar as seguintes variáveis de ambiente no seu .env

`NODE_ENV`

`JWT_SECRET`

`DATABASE_URL`

Valores default

`NODE_ENV=dev`

`JWT_SECRET=3539976c318f230c6ed42dbfa56aceb0`

`DATABASE_URL="postgresql://docker:docker@localhost:5432/residencia?schema=public"`

## Stack utilizada

Node, Fastify, Prisma, Vistest, Supertest, Docker
