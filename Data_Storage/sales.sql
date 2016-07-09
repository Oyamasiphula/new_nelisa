INSERT INTO Sales_td(qTy,product_price,Sales_date,Product_id)
SELECT sales_csv.no_sold,sales_csv.sales_price,sales_csv.date, Products_td.id
FROM sales_csv 
INNER JOIN Products_td
ON Products_td.Product_name = sales_csv.stock_item;
