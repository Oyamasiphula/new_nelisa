var totalSalesCost = require("./Nelisa_Spaza_Sales_earnings");
var saleFileProcess = require('./sales_file_utilities');
var profitPerProduct = require('./Nelisas_profit')
var purchasesFile = './files/NelisaPurchases.csv';
var salesFile = './files/NelisaSalesHistory.csv';

var totalCostsPerProductPurchasedMap = totalSalesCost.getPurchTotalCostsPerProduct(purchasesFile);
var totalSalesCostPerProductMap = totalSalesCost.getHistTotalCostsPerProduct(salesFile);

var profitMap = {};

exports.getProfitPerProducts = function(salesFile,purchasesFile){
 	
  	for(productName in totalCostsPerProductPurchasedMap){
  	var totalProfit = totalSalesCostPerProductMap[productName] - totalCostsPerProductPurchasedMap[productName]	
			profitMap[productName] = totalProfit;
			};
	//console.log(profitMap);
	return (profitMap);	

 	};

 exports.getMosprofitableProduct = function(profitMap){
 	var profitPerProdMap = profitPerProduct.getProfitPerProducts(profitMap);

 	var productName = "";
    var profitPricePerProduct = 0;

    for(var key in profitPerProdMap){
        var currentPrice = profitPerProdMap[key] ;
        if (currentPrice > profitPricePerProduct) {
            profitPricePerProduct = currentPrice;
            productName = key;
        };
    }
    console.log('=========================================================== above - Purchased products are hidden')
    console.log("{productName: " + productName + " , profit: " + profitPricePerProduct +"}");
    console.log('=========================================================== above - Purchased products are hidden')

    return {
        productName:productName,
        profit:profitPricePerProduct
    };
 }

 exports.getLeastProfitableProduct = function(profitMap){
 	var profitPerProdMap = profitPerProduct.getProfitPerProducts(profitMap);
 	//console.log(profitPerProdMap);

 	var productName = "";
    var profitPricePerProduct = 100000000000;

    for(var key in profitPerProdMap){
        var currentPrice = profitPerProdMap[key] ;
        if (currentPrice < profitPricePerProduct) {
            profitPricePerProduct = currentPrice;
            productName = key;
        };
    }
    console.log('=========================================================== above - Purchased products are hidden')
    console.log("{productName: " + productName + " , profit: " + profitPricePerProduct +"}");
    console.log('=========================================================== above - Purchased products are hidden')

    return {
        productName:productName,
        profit:profitPricePerProduct
    };

 };

 	var profitPricePerCategoryMap = {};

	var productCategories = {
						    'Fanta 500ml' : 'Beverages',
						    'Coke 500ml' : 'Beverages',
						    'Cream Soda 500ml' : 'Beverages',
						    'Shampoo 1 litre' : 'Toiletries',
						    'Soap Bar' : 'Toiletries',
						    'Mixed Sweets 5s' : 'Luxuries',
						    'Heart Chocolates' : 'Luxuries',
						    'Iwisa Pap 5kg' : 'Long_Life_Groceries',
						    'Top Class Soy Mince' : 'Long_Life_Groceries',
						    'Bread' : 'Short_Life_Groceries',
						    'Milk 1l' : 'Short_Life_Groceries',
						    'Imasi' : 'Short_Life_Groceries',
						    'Rose (plastic)' : 'Novelty_Goods',
						    'Valentine Cards' : 'Novelty_Goods',
						    'Bananas - loose' : 'Fruit',
						    'Apples - loose' : 'Fruit',
						    'Chakalaka Can' : 'Tinned_Food',
						    'Gold Dish Vegetable Curry Can' : 'Tinned_Food'
							};

 exports.getMostProfitableCategory = function(){

 		var profitPerProdMap = profitPerProduct.getProfitPerProducts(profitMap);
 	//console.log(profitPerProdMap);
    for(var productName in profitPerProdMap){
       
        var ProfitPrice = profitPerProdMap[productName];
        var categoryName = productCategories[productName];

        if(profitPricePerCategoryMap[categoryName] === undefined){
            profitPricePerCategoryMap[categoryName] = 0;
        };
        profitPricePerCategoryMap[categoryName] = profitPricePerCategoryMap[categoryName] + Number(ProfitPrice);
    }
    console.log('=========================================================== below - Popular CategoryName + Qty PerCategory map');
    console.log(profitPricePerCategoryMap);
    console.log('=========================================================== end of CategoryName + Qty PerCategory map');


    var categoryName = "";
    var ProfitPrice = 0;

    for(var key in profitPricePerCategoryMap){
        var currentProfitPrice = profitPricePerCategoryMap[key]
        if (currentProfitPrice > ProfitPrice) {
            ProfitPrice = currentProfitPrice;
            categoryName = key;
        };
    };

   console.log("{categoryName: " + categoryName + " , profit: " + ProfitPrice +"}");
   console.log('=========================================================== above - most MostProfitableCategory');
     return {
        categoryName: categoryName,
        currentProfitPrice:ProfitPrice
    };
 };