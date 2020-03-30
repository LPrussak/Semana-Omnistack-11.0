const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const app = express();

app.use(cors());//aqui coloca o link de onde a aplicação está hospedada

// informar que utiliza JSON para o corpo das requisições | colocar antes das requisições
// transforma o JSON em um obj JS
app.use(express.json());
app.use(routes);



app.listen(3333);

/** MÉTODOS HTTP:
 *GET: Buscar uma informação do back-end | executado pelo browser
 *POST: Criar uma informação no back-end
 *PUT: Alterar uma informação no back-end
 *DELETE: deletar uma informação no back-end 
 */

 /** TIPOS DE PARÂMETROS
  * Query Params(filtro): Parâmetros nomeados(name=) enviados na rota (url) após "?"
    * http://localhost:3333/users?page=2&name=Larissa&idade=20
  * Route Parms: Parâmetros utilizados para identificar recursos especificos(único usuário)
  * Request Parms: (é o que sobra) Corpo da requisição, utilizado pra criar ou alterar recursos
  */

  /** TIPOS DE BANCO DE DADOS
   * SQL: MySQL, SQLite, PostgreSQL, Oracle, SQL Server
   * NoSQL: MongoDB, CouchDB (não-relacionais)
   */

   /**
    * Driver: SELECT * FROM users
    * Query Builder: table('users').select('*').where() - knex.js 
    */



