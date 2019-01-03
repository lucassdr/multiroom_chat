/* importar o modulo do framework express */
var express = require('express');

/* importar o modulo do framework consign */
var consign = require('consign');

/* importar o modulo do framework body-parser */
var bodyParser = require('body-parser');

/* importar o modulo do framework express-validator */
var expressValidator = require('express-validator');

/* iniciando o objeto do express */
var app = express();


/* configurar o ejs como engine de views */

/* setar as váriaveis que a 'view engine' e 'views' do express */
/* diz qual a engine a ser utilizada */
app.set('view engine', 'ejs');
/* diz o local da engine no projeto */
app.set('./app/views');

/* configurando os middlewares express.static */
app.use(express.static('./app/public'));

/* configurando o middleware body-parser
    possibilita recuperar os dados via JSON a partir do Body, pelo request
*/
app.use(bodyParser.urlencoded({extended : true}));

/* configurar o middleware express-validator */
app.use(expressValidator());

/* executar a função do consign */
/* efetua o autoload das rotas, dos models e dos controllers para o objeto app */
consign()
    .include('app/routes')
    .then('app/models')
    .then('app/controllers')
    .into(app);

/* exportar o objeto app */
module.exports = app;