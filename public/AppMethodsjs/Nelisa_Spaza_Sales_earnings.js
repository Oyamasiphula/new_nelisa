    var salesCategoriesUtility = require('./Nelisa_Spaza_Sales'); 
    var salesFileUtilities = require('./sales_file_utilities');
	exports.findSalesEarningsRows = function(fileName){

		var sales = salesFileUtilities.getSales(fileName);
		var earningsPerProducts = salesFileUtilities.getQtyPerProduct(sales);
		console.log('===========================================================below - Purchased products are hidden');
		//console.log(sales);
        console.log('=========================================================== above - Purchased products are hidden')
        return earningsPerProducts
};
		
exports.getStockedProducts = function(fileName,salesLines){
        var sales = salesFileUtilities.getSales(fileName);
        var purchasedProducts = salesFileUtilities.getQtyPerProduct(sales);

	purchasedProducts = {};
    salesLines.forEach(function(line){
            //split each line into fields
            var fields = line.split(";");
            var productName = fields[2];
            var qty = fields[3];

            if(purchasedProducts[productName] === undefined){
                purchasedProducts[productName] = 0;
            };getPurchTotalCostsPerProduct

            purchasedProducts[productName] = purchasedProducts[productName] + Number(qty);
                   
        });
    return purchasedProducts;

}

exports.getEarningsPerCategory = function(fileName){
        var sales = salesFileUtilities.getSales(fileName);
        var qtyPerProductEarnings = salesCategoriesUtility.findMostPopularCategory(sales);

        console.log(sales);
        return sales;

    }

 exports.getPurchTotalCostsPerProduct = function(fileName){

         var sales = salesFileUtilities.getSales(fileName);
         var productsSold = salesFileUtilities.getQtyPerProduct(sales);
         //var totalCost = {};
         var totalProductPurchasedMap = {};
     sales.forEach(function(line){
             //split each line into fields
             var fields = line.split(";");
             var productName = fields[2];
             var productPrice = fields[5];
             productPrice = productPrice.substring(1);
             productPrice = productPrice.replace(",", ".");
             
    
             if(totalProductPurchasedMap[productName] === undefined){
                totalProductPurchasedMap[productName] = 0;
             };
             totalProductPurchasedMap[productName] = totalProductPurchasedMap[productName] + Number(productPrice);  
                });
    
     return totalProductPurchasedMap;

 };

 exports.getHistTotalCostsPerProduct = function(fileName){

         var sales = salesFileUtilities.getSales(fileName);
         var totalProductPurchasedMap = {};
     sales.forEach(function(line){
             //split each line into fields
             var fields = line.split(";");
             var productName = fields[2];
             var qty = fields[3];
             var productPrice = fields[4];
             productPrice = productPrice.substring(1);
             productPrice = productPrice.replace(",", ".");
             
    
             if(totalProductPurchasedMap[productName] === undefined){
                 totalProductPurchasedMap[productName] = 0;
             };
             totalProductPurchasedMap[productName] = totalProductPurchasedMap[productName] + Number(productPrice) * qty;  
                });
   
     return totalProductPurchasedMap;

 };
 //module.exports = getHistTotalCostsPerProduct(fileName);