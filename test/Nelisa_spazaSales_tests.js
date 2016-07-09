var assert = require("assert");
var productsSoldReader = require('../modules/Nelisa_Spaza_Sales');
var purchasedProductsReader = require('../modules/Nelisa_Spaza_Sales_earnings');
var SalesFileProcessing = require('../modules/sales_file_utilities');
var profits = require('../modules/Nelisas_profit');

//var profits = require('../modules/profit');


describe("Nelisa's spaza sales processing", function(){

    it('should find all the sales rows in the file', function(){

    	var reader = SalesFileProcessing.getSales('./data/NelisaSalesHistory.csv');
    	assert.equal(448, reader.length);

    });

   it('should find the most popular product plus qty', function(){
        var reader = productsSoldReader.findMostPopularProduct('./data/NelisaSalesHistory.csv');
        assert.deepEqual({"productName":"Mixed Sweets 5s","qty":172},reader);
    });

    it('should find most popular category name plus qty', function(){
            var salesPerProduct = productsSoldReader.findMostPopularCategory('./data/NelisaSalesHistory.csv');
             assert.deepEqual(salesPerProduct, {"categoryName" : "Short_Life_Groceries", "qty" : 397}); 

        });

    it('should find least popular product name plus qty', function(){
            var salesPerProduct = productsSoldReader.findLeastPopularProduct('./data/NelisaSalesHistory.csv');
             assert.deepEqual(salesPerProduct,{"productName":"Rose (plastic)","qty":14} ); 

        });

    it('should find least popular category name plus qty', function(){
            var salesPerProduct = productsSoldReader.findLeastPopularCategory('./data/NelisaSalesHistory.csv');
             assert.deepEqual(salesPerProduct, {"categoryName" : "Novelty_Goods", "qty" : 28}); 

        });

});
   describe("Nelisa's spaza sales earnings file processing", function(){

    it('should find the total costs per product', function(){
        var salesPerProduct = productsSoldReader.getSaleCostsPerProduct('./data/NelisaSalesHistory.csv');

        assert.equal(1420, salesPerProduct["Milk 1l"]); 
        assert.equal(1410, salesPerProduct["Iwisa Pap 5kg"]); 
        assert.equal(700, salesPerProduct["Heart Chocolates"]); 

    });

    it('should find the total cost per category', function(){
        var salesPerProduct = SalesFileProcessing.getSalesPerProductsCategory('./data/NelisaSalesHistory.csv');                     
                    
                         assert.equal(6105, salesPerProduct['Short_Life_Groceries']);
                         assert.equal(1714, salesPerProduct['Tinned_Food']);
                         assert.equal(2207, salesPerProduct['Beverages']);
                         assert.equal(2586, salesPerProduct['Long_Life_Groceries']);
                         assert.equal(1080, salesPerProduct['Toiletries']);
                         assert.equal(456, salesPerProduct['Fruit']);
                         assert.equal(1155, salesPerProduct['Luxuries']);
                         assert.equal(266, salesPerProduct['Novelty_Goods']);
         });

});

describe("Nelisa's spaza sales purchases file processing",function(){

    it('should find the purchases rows in the file to get the length of lines from csv', function(){
           var purchasedProducts = SalesFileProcessing.getSales("./data/NelisaPurchases.csv");
             assert.equal(153, purchasedProducts.length); 
        });

    it('should find the purchased products rows', function(){
            var earningsPerProduct = purchasedProductsReader.findSalesEarningsRows('./data/NelisaPurchases.csv');
            var result = earningsPerProduct;
             assert.deepEqual(earningsPerProduct,result); 

        });

    it('should find the total Costs per product from Nelisas purchases file', function(){
        var purchasedProductsCosts = purchasedProductsReader.getPurchTotalCostsPerProduct('./data/NelisaPurchases.csv');
            //var productsSoldCosts = purchasedProductsReader.getTotalCostPerProduct('./data/NelisaSalesHistory.csv');

             assert.equal(2238, purchasedProductsCosts["Imasi"]);
             assert.equal(2070, purchasedProductsCosts["Mixed Sweets 5s"]);
             assert.equal(1270, purchasedProductsCosts["Bread"]);
             assert.equal(1061.5, purchasedProductsCosts["Milk 1l"]);
             assert.equal(1020, purchasedProductsCosts["Iwisa Pap 5kg"]);
             assert.equal(808, purchasedProductsCosts["Top Class Soy Mince"]);  
             assert.equal(500, purchasedProductsCosts["Heart Chocolates"]);
             assert.equal(676, purchasedProductsCosts["Chakalaka Can"]); 
             assert.equal(598.5, purchasedProductsCosts["Coke 500ml"]);
             assert.equal(520, purchasedProductsCosts["Shampoo 1 litre"]);
             assert.equal(200, purchasedProductsCosts["Rose (plastic)"]); 
             assert.equal(479, purchasedProductsCosts["Gold Dish Vegetable Curry Can"]);
             assert.equal(433.5, purchasedProductsCosts["Fanta 500ml"]);  
             assert.equal(357, purchasedProductsCosts["Cream Soda 500ml"]); 
             assert.equal(156, purchasedProductsCosts["Soap Bar"]); 
             assert.equal(72, purchasedProductsCosts["Bananas - loose"]);
             assert.equal(40, purchasedProductsCosts["Valentine Cards"]); 
        });

    it('should find the total costs per product from NelisasSalesHistory', function(){
        var productsSoldCosts = purchasedProductsReader.getHistTotalCostsPerProduct('./data/NelisaSalesHistory.csv');

                assert.equal(1420, productsSoldCosts["Milk 1l"]); 
                assert.equal(1410, productsSoldCosts["Iwisa Pap 5kg"]); 
                assert.equal(700, productsSoldCosts["Heart Chocolates"]); 

    });

    it('should find profits for each product', function(){
        //nelisasProfitsPerProd = profits.getProfitPerProducts(fileName);
    var nelisasProfit = profits.getProfitPerProducts();

                assert.equal(264, nelisasProfit['Chakalaka Can']);
                assert.equal(435, nelisasProfit['Coke 500ml']);
                assert.equal(205.5, nelisasProfit['Cream Soda 500ml']);
                assert.equal(177.5, nelisasProfit['Fanta 500ml']);
                assert.equal(295, nelisasProfit['Gold Dish Vegetable Curry Can']);
                assert.equal(887, nelisasProfit['Imasi']);
                assert.equal(390, nelisasProfit['Iwisa Pap 5kg']);
                assert.equal(358.5, nelisasProfit['Milk 1l']);
                assert.equal(368, nelisasProfit['Top Class Soy Mince']);
                assert.equal(156, nelisasProfit['Bananas - loose']);
                assert.equal(-567, nelisasProfit['Apples - loose']);
                assert.equal(-1615, nelisasProfit['Mixed Sweets 5s']);
                assert.equal(260, nelisasProfit['Shampoo 1 litre']);
                assert.equal(144, nelisasProfit['Soap Bar']);
                assert.equal(290, nelisasProfit['Bread']);
                assert.equal(10, nelisasProfit['Rose (plastic)']);
                assert.equal(200, nelisasProfit['Heart Chocolates']);
                assert.equal(16 , nelisasProfit['Valentine Cards']);

    });
it('should find the most profitable product', function(){
    var mostProfitableProd = profits.getMosprofitableProduct();
        assert.deepEqual(mostProfitableProd,{"productName":"Imasi","profit": 887});
    })

it('should find the least profitable product', function(){
    var mostProitableProd = profits.getLeastProfitableProduct();
        assert.deepEqual(mostProitableProd,{"productName":"Mixed Sweets 5s","profit":-1615});
    })
it('should find most profitable category', function(){
    var mostProfitableProduct = profits.getMostProfitableCategory();
        assert.deepEqual(mostProfitableProduct, {"categoryName" : "Short_Life_Groceries", "currentProfitPrice" : 1535.5}); 

        });
});

