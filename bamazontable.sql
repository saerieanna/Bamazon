CREATE DATABASE Bamazon_db;

use Bamazon_db;

CREATE TABLE products(
item_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(100) NOT NULL,
  department_name VARCHAR(45) NOT NULL,
  price INT default 0,
  stock_quantity INT default 0,
  PRIMARY KEY (item_id)
);

select * from products;

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Finding Dory","Movies", 10.00, 55);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("OPI Naughty in Nice nail polish","Beauty", 8.00, 7);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Bluetooth earbuds that don't look dumb","Music accessories", 60.00, 15);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Water Bottle Dehumidifier","Bamazon Interesting Finds", 25.00, 25);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Canine Lion Costume","Bamazon Interesting Finds", 22.00, 5);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Step Brothers","Movies", 5.00, 70);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Caboodle","Beauty", 12.00, 22);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("karaoke machine","Music accessories", 75.00, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("They're real- Mascara","Beauty", 29.00, 47);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Pride and Prejudice","Movies", 7.00, 3);


select * from products;
