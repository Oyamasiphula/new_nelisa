exports.searchSales = function(req, res, next){
			var pullProductsEarnings = req.params.query;
				pullProductsEarnings = '%' + pullProductsEarnings + '%';

	req.getConnection(function(err, connection){
		connection.query('SELECT Sales_td.Product_id, SUM(Sales_td.qTy * Sales_td.product_price) AS Tot_Earnings_Per_Product, Product_name FROM Sales_td INNER JOIN Products_td ON Sales_td.Product_id = Products_td.id WHERE Products_td.Product_name LIKE ? group by Products_td.Product_name ASC', [pullProductsEarnings,pullProductsEarnings], function(err, results){
				if(err)
					return next("error selecting : %s ", err)
			res.render('searchProductsEarnings',{
				searchSalesVals : results,
				layout : false
			});
		});
	});
};

exports.searchSalesSum = function(req, res, next){
			var pullSumOfEarnings = req.params.query;
				pullSumOfEarnings = '%' + pullSumOfEarnings + '%';

	req.getConnection(function(err, connection){
		connection.query('SELECT Categories_td.Category_name, SUM(Sales_td.qTy * Sales_td.product_price) AS Tot_Earnings_Per_Product, Product_name FROM Sales_td INNER JOIN Products_td ON Sales_td.Product_id = Products_td.id INNER JOIN Categories_td ON Products_td.Category_id = Categories_td.id WHERE Product_name LIKE ? OR Categories_td.Category_name like ? group by Products_td.Product_name ASC', [pullSumOfEarnings,pullSumOfEarnings], function(err, results){
				if(err)
					return next("error selecting : %s ", err)
			res.render('searchSalesSum',{
				pullAllSales: results,
				layout : false
			});
		});

	});

};

exports.searchEarningsPerCategory = function(req, res, next){
			var pullCategoryName = req.params.query;
				pullCategoryName = '%'+ pullCategoryName +'%';
			var getCategoryName = 'SELECT Categories_td.Category_name, SUM(Sales_td.qTy * Sales_td.product_price) AS Tot_Earnings_Per_Product FROM Sales_td INNER JOIN Products_td ON Sales_td.Product_id = Products_td.id INNER JOIN Categories_td ON Products_td.Category_id = Categories_td.id WHERE Category_name LIKE ? group by Categories_td.Category_name ASC';	
	
	req.getConnection(function(err, connection){
		connection.query(getCategoryName,[pullCategoryName,pullCategoryName], function(err, results){
				if(err)
					return('error searching : %s', err)
			res.render('searchEarningPerCategory',{
				pullCategoryNameAsAResult : results,
				ayout : false
			});
		});
	});
};

exports.showSales = function(req, res, next){
			var id = req.params.id;
			var data = JSON.parse(JSON.stringify(req.body));

	req.getConnection(function(err,connection){
		connection.query('SELECT Categories_td.Category_name, SUM(Sales_td.qTy * Sales_td.product_price) AS Tot_Earnings_Per_Product, Product_name FROM Sales_td INNER JOIN Products_td ON Sales_td.Product_id = Products_td.id INNER JOIN Categories_td ON Products_td.Category_id = Categories_td.id group by Products_td.Product_name', [],function(err,results){
				if(err)
					return next("error selecting : %s ", err);
			res.render('sales' ,{
				Sales : results
			});			
		});
	});
};
exports.editSales = function(req, res, next){
var Id = req.params.Id;
	req.getConnection(function(err, connection){
		connection.query('SELECT id, product_price, qTy,Product_id FROM Sales_td WHERE id = ?', [id], function(err,rows){
			if(err){
				console.log("Error Selecting : %s ",err );
			}

			res.render('salesEdit',{page_title:"Edit Customers - Node.js", data : rows});
		});
	});
};
exports.showCategories = function(req, res, next){
			var id = req.params.id;
			var data = JSON.parse(JSON.stringify(req.body));

	req.getConnection(function(err ,connection){	
		connection.query('SELECT Categories_td.Category_name, SUM(Sales_td.qTy * Sales_td.product_price) AS Tot_Earnings_Per_Product, Product_name FROM Sales_td INNER JOIN Products_td ON Sales_td.Product_id = Products_td.id INNER JOIN Categories_td ON Products_td.Category_id = Categories_td.id group by Products_td.Product_name',[] ,function(err, EarningsPerProductsCategory){
				if(err)
					return next("error selecting : %s " ,err);
			res.render('salesSummary', {
				sumOfEarnings : EarningsPerProductsCategory
			});
		});
	});
};

exports.earningsPerCategory = function(req, res, next){
			var id = req.params.id;
			var data = JSON.parse(JSON.stringify(req.body));

	req.getConnection(function(err ,connection){		
		connection.query('SELECT Categories_td.Category_name, SUM(Sales_td.qTy * Sales_td.product_price) AS Tot_Earnings_Per_Product FROM Sales_td INNER JOIN Products_td ON Sales_td.Product_id = Products_td.id INNER JOIN Categories_td ON Products_td.Category_id = Categories_td.id group by Products_td.Category_id',[] ,function(err, EarningsPerCategoryData){
			if(err)
				return next("error selecting : %s " ,err)
			res.render('salesEarningsPerCat', {
				sumOfEarningsPerCategory : EarningsPerCategoryData
			});
		});
	});
};

exports.showAddSales = function(req, res, next){
	req.getConnection(function(err, connection){
		
		connection.query('SELECT Sales_td.id, Products_td.Product_name, Sales_date, product_price, qTy FROM Sales_td, Products_td WHERE Products_td.id = Sales_td.Product_id order by Sales_td.id;', [], function(error, results) {
			if (err) 
				return next("Error selecting : %s ",err);
			connection.query('SELECT Product_name FROM Products_td', [], function(err, productNameOption) {
				if (err) 
					return next("Error selecting : %s ",err);
				res.render( 'addSales', {
					pushMoreSales : results,
					addProduct : productNameOption
				});
			});
		});
	});
};

exports.add = function (req, res, next) {
			var input = JSON.parse(JSON.stringify(req.body));
			var data = {
							product_price : input.product_price,
							qTy : input.qTy,
							Sales_date : input.Sales_date
						};

	req.getConnection(function(err, connection){
		if (err)
			throw next(err);		
		connection.query('insert into Sales_td set Product_id = (SELECT id FROM Products_td WHERE Product_name = ?), ?', [input.product_name,data], function(err, results) {
				if (err){
					throw next("Error inserting : %s ",err );
				}
					res.redirect('/sales');
		});
	});
};

exports.update = function(req, res, next){
			var data = JSON.parse(JSON.stringify(req.body));
			var id = req.params.id;

	req.getConnection(function(err, connection){
		connection.query('UPDATE Sales_td SET ? WHERE id = ?', [data, id], function(err, rows){
			if (err){
				return next("Error Updating : %s ",err );
			}
			res.redirect('/sales');
		});
	});
};

exports.delete = function(req, res, next){
	var id = req.params.id;
	req.getConnection(function(err, connection){
		connection.query('DELETE FROM Sales_td WHERE id = ?', [id], function(err,rows){
			if(err){
				return next("Error deleting : %s ",err );
			}
			res.redirect('/sales');
		});
	});
};