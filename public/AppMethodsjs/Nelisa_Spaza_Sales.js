
var salesFileUtilities = require('./sales_file_utilities');
var salesAccessories = require('./Nelisa_Spaza_Sales_earnings');

exports.findMostPopularProduct = function(fileName,salesFileReader){

    var sales = salesFileUtilities.getSales(fileName);
    var productsSold = salesFileUtilities.getQtyPerProduct(sales);

    var productName = "";
    var qty = 0;

    for(var key in productsSold){
        var currentQty = productsSold[key] ;
        if (currentQty > qty) {
            qty = currentQty;
            productName = key;
        };
    }

    return {
        productName:productName,
        qty:qty
    };

}

exports.getSaleCostsPerProduct = function(fileName){

    var salesRows = salesFileUtilities.getSales(fileName);
    var totalSalesPerProduct = salesFileUtilities.getSaleCostsPerProduct(salesRows);
    console.log('=========================================================== below - salesRows are hidden');
    return totalSalesPerProduct;
    console.log('=========================================================== Above - salesRows are hiden');

};


var qtyPerCategoryMap = {};

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

exports.findMostPopularCategory = function(fileName,salesFileReader){

    var salesFileReader = salesFileUtilities.getSales(fileName);
    var qtyPerProduct = salesFileUtilities.getQtyPerProduct(salesFileReader);

    for(var productName in qtyPerProduct){
       
        var qty = qtyPerProduct[productName];
        var categoryName = productCategories[productName];

        if(qtyPerCategoryMap[categoryName] === undefined){
            qtyPerCategoryMap[categoryName] = 0;
        };
        qtyPerCategoryMap[categoryName] = qtyPerCategoryMap[categoryName] + Number(qty);
    }
    console.log('=========================================================== below - Popular CategoryName + Qty PerCategory map');
    console.log(qtyPerCategoryMap);
    console.log('=========================================================== end of CategoryName + Qty PerCategory map');


    var categoryName = "";
    var qty = 0;

    for(var key in qtyPerCategoryMap){
        var currentQty = qtyPerCategoryMap[key]
        if (currentQty > qty) {
            qty = currentQty;
            categoryName = key;
        };
    }

    console.log(categoryName +','+ qty);
    console.log('=========================================================== Above - Most popular categoryName + qty');
    return {
        categoryName: categoryName,
        qty:qty
    };
}

exports.findLeastPopularProduct = function(fileName,salesFileReader){

    var sales = salesFileUtilities.getSales(fileName);
    var productsSold = salesFileUtilities.getQtyPerProduct(sales);

    var productName = "";
    var qty = 10000000;

    for(var key in productsSold){
        var currentQty = productsSold[key]
        if (currentQty < qty) {
            qty = currentQty;
            productName = key;
        };
    }
    console.log('===========================================================below -leastPopular productName & qty');
    console.log(productName +','+ qty);
    return {
        productName:productName,
        qty:qty
    };

}

exports.findLeastPopularCategory = function(fileName,salesFileReader){

    var salesFileReader = salesFileUtilities.getSales(fileName);
    var qtyPerProduct = salesFileUtilities.getQtyPerProduct(salesFileReader);

    for(var productName in qtyPerProduct){
        console.log('===========================================================Below - productName');
        console.log(productName);
        var qty = qtyPerProduct[productName];
        var categoryName = productCategories[productName];
        if(qtyPerCategoryMap[categoryName] === undefined){
            qtyPerCategoryMap[categoryName] = 0;
        };
    }
    console.log('=========================================================== below - CategoryName + Qty PerCategory map');
    console.log(qtyPerCategoryMap);
    var categoryName = "";
    var qty = 10000000;

    for(var key in qtyPerCategoryMap){
        var currentQty = qtyPerCategoryMap[key];
        
        if (currentQty < qty) {
            qty = currentQty;
            categoryName = key;
        };
    }
    console.log('=========================================================== end of CategoryName + Qty PerCategory map');
    console.log(categoryName +','+ qty);
    console.log('=========================================================== Above - Least categoryName + qty');
    return {
        categoryName: categoryName,
        qty:qty
    };
};

  exports.findMostProfitableProduct = function(salesLines,fileName){
            var salesLines = salesFileUtilities.getSales(fileName);
            var productsSoldTotal = salesAccessories.getTotalCostPerProduct(salesLines);
            console.log(salesLines)
            var purchasedProductsTotal = salesAccessories.getTotalCostPerProduct(salesLines)

            
            return productsSoldTotal;
    
}

