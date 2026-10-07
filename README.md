# E-commerce Backend
Backend de um sistema de e-commerce desenvolvido com NestJS, Prisma e SQLite.
## Tecnologias
- Node.js
- NestJS
- TypeScript
- Prisma ORM
- SQLite
- JWT
- bcrypt
- class-validator
## Entidades
- Usuario
- Profile
- Loja
- Produto
- Pedido
- ItemPedido
Relacionamentos
- Um usuário pode possuir um perfil.
- Um usuário pode possuir várias lojas.
- Uma loja pode possuir vários produtos.
- Um usuário pode possuir vários pedidos.
- Um pedido pode possuir vários itens.
- Cada item de pedido está relacionado a um produto.
## Como executar
Instale as dependências:
npm install

Crie um arquivo .env na raiz do projeto com:
DATABASE_URL="file:./dev.db"
JWT_SECRET="sua-chave-secreta"

Execute as migrations:
npx prisma migrate dev

Gere o Prisma Client:
npx prisma generate

Inicie o projeto:
npm run start:dev

A API ficará disponível em:
http://localhost:3000

## Principais rotas
Usuários
POST   /users
GET    /users
GET    /users/:id
PUT    /users/:id
DELETE /users/:id

Autenticação
POST /auth/login

Profiles
POST   /profiles
GET    /profiles
GET    /profiles/:id
PUT    /profiles/:id
DELETE /profiles/:id

Lojas
POST   /lojas
GET    /lojas
GET    /lojas/:id
PUT    /lojas/:id
DELETE /lojas/:id

Produtos
POST   /produtos
GET    /produtos
GET    /produtos/:id
PUT    /produtos/:id
DELETE /produtos/:id

Pedidos
POST   /pedidos
GET    /pedidos
GET    /pedidos/:id
PUT    /pedidos/:id
DELETE /pedidos/:id

Itens de Pedido
POST   /itens-pedido
GET    /itens-pedido
GET    /itens-pedido/:id
PUT    /itens-pedido/:id
DELETE /itens-pedido/:id

Autenticação
As rotas protegidas utilizam token JWT no formato:
Authorization: Bearer SEU_TOKEN

Autor
Augusto Spanholo