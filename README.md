<p align="center">
  <a href="https://nextjs.org/" target="blank"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Nextjs-logo.svg/1280px-Nextjs-logo.svg.png" width="200" alt="nextjs Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

<p align="center">Autenticação de usuário utilizando Next.js e API Nest.js com JWT</p>

<p align="center">
  <img alt="technology" src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white">

  <img alt="technology" src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB">

  <img alt="technology" src="https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white">
</p>

## Descrição

Projeto de autenticação com Next.js, esse projeto serve como exemplo de como fazer autenticação enviando requisições para uma API Nest.js com JWT (json web token), controlar o acesso de rotas (páginas) de acordo com o login do usuário, após fazer login salvamos o token nos cookies e o usuário tem acesso a uma página protegida por 60 segundos, ao expirar esse token o usuário é redirecionado para página de login.

## Executar o projeto

```bash
# Clone o repositório
$ git clone https://github.com/jefferson1104/nextjs-auth.git

# Clone o repositório da API
$ git clone https://github.com/jefferson1104/nestjs-auth.git

# Execute a API (nestjs-auth) localmente
$ npm run start:dev

# Execute o projeto nextjs-auth
$ npm run dev

# Rotas
/
/login
/private

# Usuários para login
jefferson1104
123456

joel3007
123456
```

## Screenshots

![screenshot](./.github/screenshot/screenshot-01.png)
![screenshot](./.github/screenshot/screenshot-02.png)
