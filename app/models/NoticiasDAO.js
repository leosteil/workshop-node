function NoticiasDAO(connection){

	this._connection = connection;

}

/*o método query do plugin mysql para node esperar um callback com dois parametros: erro e result*/

NoticiasDAO.prototype.getNoticias = function(callback){

	this._connection.query("SELECT * FROM noticias ORDER BY data_criacao DESC", callback);

}

NoticiasDAO.prototype.getNoticia = function(id_noticia, callback){

	this._connection.query('SELECT * FROM NOTICIAS WHERE id_noticia = '+ id_noticia.id_noticia +'', callback);

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