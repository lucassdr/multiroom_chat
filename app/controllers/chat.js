module.exports.iniciaChat = function(app, req, res){
    var dadosForm = req.body;

    req.assert('apelido', 'Nome de usuário é obrigatório').notEmpty();
    req.assert('apelido', 'Nome de usuário deve conter entre 5 e 15 caracteres').len(5,15);

    var erros = req.validationErrors();

    if(erros){
        res.render('index', {validacao : erros})
        return;
    }

    res.render('chat');
}