exports.getRegularSales = function(req, res ,next){

		var id = req.params.id;
		var data = JSON.parse(JSON.stringify(req.body));

			req.getconection(function(err,connection){
				
					connection.query('SELECT AVG(qTy * product_price) AS Regular_Sales ,Product_id ,Product_name FROM Sales_td INNER JOIN Products_td ON Sales_td.Product_id = Products_td.id GROUP BY AVG(qTy * product_price) LIMIT 0,1 DESC',function(){
						if (err)
								return next("error selecting : %s", err)

					});

			})


}