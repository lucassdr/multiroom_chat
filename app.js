/* importar as configurações do servidor */
var app = require('./config/server');

/* parametrizar a porta que a aplicação responderá a aplicação  */
app.listen(3000, function(){
    console.log('Servidor multichat online');
});