INSERT INTO Suppliers_td(Supplier_name)
SELECT DISTINCT shop FROM stock_purchases_csv;