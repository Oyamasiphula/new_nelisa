exports.show = function(req,res,next){
	req.getConnection(function(err, connection){
		if(err)
			return next(err);
		connection.query('SELECT SUM(qTy) AS Quantity, Product_id ,Product_name FROM Sales_td INNER JOIN Products_td ON Sales_td.Product_id = Product_td.id GROUP BY Product_name ORDER BY SUM(qTy) DESC LIMIT 0,1',[],function(err,results){
		if (err) 
			return next(err);
    	
    		res.render( 'mostPopularProduct', {
    			mostPopularProduct : results

    		});
		});
	});
}