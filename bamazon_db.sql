DROP DATABASE IF EXISTS bamazon_db;
CREATE DATABASE bamazon_db;
USE bamazon_db;
CREATE TABLE products (
item_id integer not null,
product_name varchar(50) not null,
department_name varchar(50) not null,
price float(6,2) not null,
stock_quantity integer not null
);

insert into products
 (item_id, product_name, department_name, price, stock_quantity)
 value (1, "HP Laptop", "Computers", 800.00, 25);
 
 insert into products
 (item_id, product_name, department_name, price, stock_quantity)
 value (2, "Toshiba Laptop", "Computers", 500.00, 25);
 
 insert into products
 (item_id, product_name, department_name, price, stock_quantity)
 value (3, "Dell Laptop", "Computers", 700.00, 10);
 
 insert into products
 (item_id, product_name, department_name, price, stock_quantity)
 value (4, "Apple Laptop", "Computers", 1800.00, 10);
 
 insert into products
 (item_id, product_name, department_name, price, stock_quantity)
 value (5, "HP Desktop", "Computers", 900.00, 25);
 
 insert into products
 (item_id, product_name, department_name, price, stock_quantity)
 value (6, "Dell Desktop", "Computers", 900.00, 10);
 
 insert into products
 (item_id, product_name, department_name, price, stock_quantity)
 value (7, "HP Server", "Computers", 2400.00, 15);
 
 insert into products
 (item_id, product_name, department_name, price, stock_quantity)
 value (8, "Dell Server", "Computers", 1200.00, 10);
 
 insert into products
 (item_id, product_name, department_name, price, stock_quantity)
 value (9, "Apple Desktop", "Computers", 2800.00, 10);
 
 insert into products
 (item_id, product_name, department_name, price, stock_quantity)
 value (10, "Apple I-Pad", "Computers", 800.00, 20);
 