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

# Script

## Docker

  - npm i
  - docker compose up -d
  - npx prisma migrate dev
  - npm run test
  - npm run test:e2e
  - npm run dev
