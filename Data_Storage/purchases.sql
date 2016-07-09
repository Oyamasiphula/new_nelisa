INSERT INTO Purchases_td(Purchases_date,qTy,Product_id,Supplier_id,product_price)
SELECT stock_purchases_csv.date,stock_purchases_csv.quantity, Products_td.id AS product_id, Suppliers_td.id AS supplier_id,stock_purchases_csv.cost
FROM stock_purchases_csv 
INNER JOIN Products_td
ON Products_td.Product_name = stock_purchases_csv.item
INNER JOIN Suppliers_td
ON Suppliers_td.Supplier_name = stock_purchases_csv.shop;