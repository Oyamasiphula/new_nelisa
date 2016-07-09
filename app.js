// 'use strict';

 var express = require('express'),
 	exphbs = require('express-handlebars'),
 	mysql = require('mysql'),
 	myConnection = require('express-myconnection'),
 	bodyParser = require('body-parser'),
  cookieParser = require('cookie-parser'),
 	session = require('express-session'),
  passport = require('passport'),
  passportLocal = require('passport-local'),
 	products = require('./routes/products'),
 	productsCategories = require('./routes/categories'),
 	sales = require('./routes/sales'),
 	salesProfits = require('./routes/salesProfits');


var app = express();

var dbOptions = {
      host: 'localhost',
      user: 'nelisa',
      password: 'password',
      port: 3306,
      database: 'Nels_db'
};


app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// static files which would be then referenced by its root (/folder/directory/) public_folder will be ignored for file refencing
app.use(express.static(__dirname + '/public'));
// static files which would be then referenced by its root (/folder/directory/) and on this following block /bower_components directory will be ignored for file refencing
app.use('/bower_components',  express.static(__dirname + '/bower_components'));

//setup middleware
app.use(myConnection(mysql, dbOptions, 'single'));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())
// app.use(session({secret: "Haha haha", saveUninitialized : false, resave: true, cookie : {maxAge : 5*60000}}));
// app.set("x-powered-by", false);
app.use(myConnection(mysql, dbOptions, 'single'));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser());
app.use(session({
  secret:process.env.SESSION_SECRET || 'secret',
  resave:false,
  saveUninitialized:false
}))

app.use(passport.initialize());
app.use(passport.session());
// parse application/json
app.use(bodyParser.json());

passport.use(new passportLocal.Strategy(function(username,password,done){
  if (username === password) {
    done(null, {id:username,
             name :username
       // password:password
                });
  } else{
      alert("Please sign up or create an an account as a new spaza shop owner!")
      redirect("/sign_up");
// note this will be the result of the failing validation and this is how we tell passport that the validation has failed
        done(null,null);
    }
}));

passport.serializeUser(function (user, done){
  done(null,user.id);
});

passport.deserializeUser(function(id,done){
  done(null, {id:id,
           name:id
  });
});

app.get("/SignORlogin",function(req,res,next){
      res.render("login");
})
app.post("/SignORlogin",passport.authenticate("local"),function(req,res){
  res.redirect('/');
})

app.get('/', function(req, res){
	res.render('home',{
    isAuthenticated: req.isAuthenticated(),
             user :req.user
  });

});
// products routes
app.get('/products/', products.show);
app.get('/products/search/:query',products.search);
app.get('/products/edit/:id', products.showEdit);
app.post('/products/edit/:id', products.update);
app.get('/products/add/', products.showAdd);
app.post('/products/add/', products.add);
app.get('/products/delete/:id', products.delete);

	// productsCategories routes
app.get('/addProductsCategories' , productsCategories.showAdd);
app.get('/productsCategories', productsCategories.show);
app.get('/productsCategories/search/:query',productsCategories.searchCategories)
app.get('/productsCategories/edit/:id', productsCategories.get);
app.post('/productsCategories/update/:id', productsCategories.update);
app.post('/productsCategories/add/', productsCategories.add);
app.get('/productsCategories/delete/:id', productsCategories.delete);
	// Sales routes
app.get('/sales', sales.showSales);
app.get('/sales/search/:query', sales.searchSales);
app.get('/sales/showAddSales/', sales.showAddSales)
app.post('/sales/add', sales.add);
app.get('/sales/edit/:id', sales.editSales);
app.post('/sales/edit/:id/', sales.update);
	// 2nd Sales route(s) for salesSummary
app.get('/salesSummary/showCategories', sales.showCategories);
app.get('/salesSummary/earningsPerCategory/search/:query', sales.searchEarningsPerCategory);
app.get('/salesSummary/showCategories/search/:query', sales.searchSalesSum);
app.get('/salesSummary/earningsPerCategory', sales.earningsPerCategory);
	// 3nd Sales route(s) for salesProfits
app.get('/salesProfits' ,salesProfits.show);
app.get('/salesProfits/search/:query' ,salesProfits.searchProfitsPerProduct);
app.get('/about', products.about);

/*we call "getProductCategories()" therefore "findCatNames = productCategories.findProductCategories();"is being excetuted -
by having original function's method for that instance new variable is must be created so that we prevent to get error of undefined values*/
//
app.get('/message' , function(req, res){
	//Create routes
	res.send('I got it !!!');

});

/*'/productCategories'is being used as our HTTP host name when you type eg this url name - url("http://localhost:2000/productCategories").end
 dont type "end" use text inside "quotes" then our function route  - "function res.render('productsCategories')" will work as an exception.
 for that matter "findProductCategories" function's results/output inside routes is being parsed as"findCatNames" will be rendered */

app.listen(port, function(){
	console.log('listening on *:' + port);
});
