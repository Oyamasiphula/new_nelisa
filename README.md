# Nelisas_App

create database Nels_db;

CREATE USER nelisa@localhost IDENTIFIED BY 'password';
GRANT ALL PRIVILEGES ON Nels_db.* TO nelisa@localhost;
flush privileges;