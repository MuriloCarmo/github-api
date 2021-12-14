# github-api

Projeto Node/AdonisJS feito para armazenamento de repositórios do github via GitHub-API.

Para executar o Projeto é necessário ter instalado PostgreSQL. Configurar Variáveis de ambiente e credenciais do banco
no arquivo `.env`

### Pré-Requisitos globais:

NodeJS, PostgreSQL, AdoniJS/CLI<br>
Necessário criar um arquivo .env, copiar as informações .env.example e fazer a configuração com usuário, senha e nome do
banco de dados Postgre

### Instalação:

`npm install`

### Criação de Tabelas:

Criação: `node ace migration:run` <br>
Exclusão: `node ace migration:rollback`

### Para rodar o Projeto:

`npm run dev`






