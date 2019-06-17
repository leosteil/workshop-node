function NoticiasDAO(connection){

	this._connection = connection;

}

/*o método query do plugin mysql para node esperar um callback com dois parametros: erro e result*/

NoticiasDAO.prototype.getNoticias = function(callback){

	this._connection.query("SELECT * FROM NOTICIAS", callback);

}

NoticiasDAO.prototype.getNoticia = function(callback){

	this._connection.query("SELECT * FROM NOTICIAS WHERE id_noticia = 2", callback);

}

NoticiasDAO.prototype.salvarNoticia = function(noticia, callback){

	this._connection.query("INSERT INTO noticias set ?", noticia, callback);

}

NoticiasDAO.prototype.getUltimasNoticias = function(callback){

	this._connection.query('SELECT * FROM noticias order by data_criacao desc limit 5', callback);

}


module.exports = function() {

	return NoticiasDAO;

}