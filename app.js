/* importar as configurações do servidor */
var app = require('./config/server');

/* parametrizar a porta que a aplicação responderá a aplicação  */
var server = app.listen(3000, function(){
    console.log('Servidor multichat online');
});

/* fazendo o socket.io possa ouvir na porta 3000 */
require('socket.io').listen(server);