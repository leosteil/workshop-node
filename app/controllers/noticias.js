module.exports.noticias = function(application, req, res) {

	var connection = application.config.dbConnection();
	var noticiasModel = new application.app.models.NoticiasDAO(connection);

	noticiasModel.getNoticias( function(erro, result){

		res.render("noticias/noticias", {noticias : result});

	});

}

module.exports.noticia = function (application, req, res) {

	var connection = application.config.dbConnection();
	var noticiasModel = new application.app.models.NoticiasDAO(connection);

	console.log(req.query);
	exit();

	var id_noticia = req.query; 

	noticiasModel.getNoticia(id_noticia, function(erro, result){
		
		res.render("noticias/noticia", {noticia : result});

	});

}
