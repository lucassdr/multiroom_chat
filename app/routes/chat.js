module.exports = function(app){
    app.post('/chat', function(req, res){
        res.render('chat');
        // res.send('teste');
    });
}