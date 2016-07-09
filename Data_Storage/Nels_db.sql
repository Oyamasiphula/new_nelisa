-- CREATE DATABASE Nels_db;
CREATE USER Nelisa@localhost IDENTIFIED BY 'password';

GRANT ALL PRIVILEGES ON Nels_db.*  @localhost;
FLUSH PRIVILEGES;

use Nels_db;

create table Categories_td (
    id int not null auto_increment,
    Category_name char(150),
    primary key(id)
);

create table Products_td (
    id int not null auto_increment,
    Product_name char(30),
    Category_id int,
    FOREIGN KEY (Category_id) REFERENCES Categories_td(id),
    primary key(id)
);

create table Suppliers_td (
    id int not null auto_increment,
    Supplier_name char(50),
   	primary key(id)
);

create table Purchases_td (
    id int not null auto_increment,
    Purchases_date Date,
    Product_id int,
    qTy int,
    Suppliers_id int,
    FOREIGN KEY (Product_id) REFERENCES Products_td(id),
    product_price char(15),
    FOREIGN KEY (Supplier_id) REFERENCES Suppliers_td(id),
    primary key(id)
);

create table Sales_td (
    id int not null auto_increment,
    Sales_date Date,
    FOREIGN KEY (Product_id) REFERENCES Products_td(id),
    Product_id int,
    qTy int,
    product_price char(15),
    primary key(id)
);



