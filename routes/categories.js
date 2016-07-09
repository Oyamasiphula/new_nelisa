/***
 * A very basic CRUD example using MySQL
 */ 
//todo - fix the error handling
exports.searchCategories = function(req, res, next){

    req.getConnection(function(err, connection){

        var pullCatNameReq = req.params.query;
            pullCatNameReq = '%' + pullCatNameReq + '%';

        var CategoryName = 'SELECT Category_name from Categories_td WHERE Category_name LIKE ?';
        
        connection.query(CategoryName,[pullCatNameReq, pullCatNameReq],function(err, catNameAsResult){

                res.render('searchCategories',{
                    categoryName : catNameAsResult,
                    layout : false
                });

        });

    });

};

exports.show = function (req, res, next) {
    req.getConnection(function(err, connection){

    var showMostPopularCat = 'SELECT Categories_td.Category_name ,SUM(Sales_td.qTy) AS Quantity FROM Sales_td INNER JOIN Products_td ON Sales_td.Product_id = Products_td.id INNER JOIN Categories_td ON Products_td.Category_id = Categories_td.id GROUP BY Categories_td.Category_name ORDER BY Quantity DESC LIMIT 0,1';
        
    var showLeastPopularCAt = 'SELECT Categories_td.Category_name ,SUM(Sales_td.qTy) AS Quantity FROM Sales_td INNER JOIN Products_td ON Sales_td.Product_id = Products_td.id INNER JOIN Categories_td ON Products_td.Category_id = Categories_td.id GROUP BY Categories_td.Category_name ORDER BY Quantity ASC LIMIT 0,1';    
    
        connection.query(showMostPopularCat, [], function(err, showMostPopularCat){
            if(err)
                return next(err)
        connection.query(showLeastPopularCAt, [], function(err, showLeastPopularCAt){
            if(err){
                return next(err)
            }
        connection.query('SELECT * from Categories_td', [], function(err, results) {
            if (err){ 
                return next(err);
            }
            res.render( 'productsCategories',{
                categories : results,
                showMostPopularCat : showMostPopularCat,
                showLeastPopularCAt : showLeastPopularCAt
                       
                    });
                 });
            });
        });
     });
};

exports.showAdd = function(req, res, next){
    res.render('addProductsCategories');
};

exports.add = function (req, res, next) {
    req.getConnection(function(err, connection){
        
        var input = JSON.parse(JSON.stringify(req.body));
        
        var data = { Category_name : input.Category_name };
           
        connection.query('insert into Categories_td set ?', data, function(err, results) {
            if (err){
                    return next(err);
            }

            res.redirect('/productsCategories');
        });
    });
};

exports.get = function(req, res, next){
        var id = req.params.id;
    req.getConnection(function(err, connection){

        connection.query('SELECT * FROM Categories_td WHERE id = ?', [id], function(err,rows){
            if(err){
                        return next(err);
            }

            res.render('editProductsCategories',{page_title:"Edit Customers - Node.js", data : rows[0]});      
        }); 
    });
};

exports.update = function(req, res, next){

        var data = JSON.parse(JSON.stringify(req.body));
        var id = req.params.id;
    req.getConnection(function(err, connection){
        connection.query('UPDATE Categories_td SET ? WHERE id = ?', [data, id], function(err, rows){
            
            if (err){
              return next(err);
            }
            res.redirect('/productsCategories');
        });
    });
};

exports.delete = function(req, res, next){
    var id = req.params.id;
    req.getConnection(function(err, connection){

        connection.query('DELETE FROM Categories_td WHERE id = ?', [id], function(err,rows){
            if(err){
                    return next(err);
            }
            res.redirect('/productsCategories');
        });
         
    });
};

