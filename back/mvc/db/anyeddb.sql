CREATE DATABASE anyeddb

USE anyeddb


CREATE TABLE admins(
  id_admin int NOT NULL IDENTITY(1,1),
  [user] CHAR(30) NOT NULL,
  [name] CHAR(30) NOT NULL,
  last_name CHAR(30) NOT NULL,
  email CHAR(35) NOT NULL,
  [password] CHAR(100) NOT NULL,
  tel CHAR (10) NOT NULL,
  PRIMARY KEY (email)
)


INSERT INTO admins
  ([user],[name],last_name,email,[password],tel)

VALUES
  ('cinthyaAdmin','cinthya', 'miranda', 'cinthya@mail.com',  'cinthyapass', 22222222),
  ('edgarAdmin','edgar', 'calderas', 'edgar@mail.com',  'edgarpass', 33333333);

  SELECT *
FROM admins

CREATE TABLE products (
    id CHAR (30) NOT NULL ,
    [name] VARCHAR (50),
    stock INT NOT NULL,    
    price INT NOT NULL,
    picture VARCHAR(100),
    PRIMARY KEY (id)
)
SELECT * FROM products


INSERT INTO products (id,[name],stock,price,picture) VALUES ('1','Polaroid clasica edicion especial',1,180,'img/i5s.webp')
INSERT INTO products (id,[name],stock,price,picture) VALUES ('2','Camara polariod instantanea',10,1220,'img/i3s.webp')
INSERT INTO products (id,[name],stock,price,picture) VALUES ('3','Polaroid clasica',5,1500,'img/i2s.webp')
INSERT INTO products (id,[name],stock,price,picture) VALUES ('4','Carrete para camara antigua',20,699,'img/i1s.webp')
INSERT INTO products (id,[name],stock,price,picture) VALUES ('5','Estuche para lentes',10,530,'img/i4s.webp')


SELECT * FROM products

CREATE TABLE users
(
  id_user int NOT NULL IDENTITY(1,1),
  [user] CHAR(30) NOT NULL,
  [name] CHAR(30) NOT NULL,
  last_name CHAR(30) NOT NULL,
  email CHAR(35) NOT NULL,
  [password] CHAR(100) NOT NULL,
  tel CHAR (10) NOT NULL,
  PRIMARY KEY (email)
)
SELECT *
FROM users


INSERT INTO users
  ([user],[name],last_name,email,[password],tel)

VALUES
  ('LeonardoUser','Leonardo', 'Figueroa', 'leo@mail.com',  'leopass', 11111111),
  ('cinthyaUser','cinthya', 'miranda', 'cinthya@mail.com',  'cinthyapass', 22222222),
  ('edgarUser','edgar', 'calderas', 'edgar@mail.com',  'edgarpass', 33333333),
  ('carlaUser','carla', 'valdez', 'karla@mail.com',  'karlapass', 44444444),
  ('alaniUser','alani', 'menchelli', 'alani@mail.com',  'alanipass', 55555555),
  ('marioUser','mario', 'flores', 'mario@mail.com',  'mariopass', 66666666),
  ('ruthUser','ruth', 'valpaggini', 'ruth@mail.com',  'ruthpass', 77777777),
  ('antonietaUser','antonieta', 'rojas', 'antonieta@mail.com',  'antonietapass', 88888888),
  ('carlosUser','carlos', 'cervantes', 'carlos@mail.com',  'carlospass', 99999999),
  ('ivanUser','ivan', 'bastida', 'ivan@mail.com',  'ivanpass', 10000000);

SELECT * FROM users

SELECT [user],email,[name] FROM users WHERE [user] ='edgarUser' AND [password] = 'edgarpass'

CREATE TABLE cart (
    id_cart INT NOT NULL IDENTITY(1,1),
    user_email CHAR(35) NOT NULL,
    id_product CHAR(30) NOT NULL,
    name_product VARCHAR (100),
    mercado_libre BIT NOT NULL,
    quantity INT NOT NULL,
    price INT NOT NULL,
    picture VARCHAR(100),
    PRIMARY KEY (id_cart),
    FOREIGN KEY (user_email) REFERENCES users(email),
    
)

INSERT INTO cart (user_email,id_product,name_product,mercado_libre,quantity,price,picture) VALUES ('edgar@mail.com',1,'Polaroid clasica edicion especial',0,1,180,'img/i5s.webp');


  SELECT * FROM cart ;

SELECT * FROM cart LEFT JOIN users ON cart.user_email = users.email;

SELECT * FROM cart JOIN users ON cart.user_email = users.email AND  cart.id_product = '1';

DELETE FROM cart WHERE user_email = 'edgar@mail.com'
 SELECT * FROM cart JOIN users ON cart.user_email = users.email AND users.email = 'edgar@mail.com                '

 SELECT user_email,id_product,mercado_libre,quantity,price FROM cart JOIN users ON cart.user_email = users.email AND users.email = 'edgar@mail.com'

 INSERT INTO cart (user_email,id_product,name_product,mercado_libre,quantity,price,picture) VALUES ('cinthya@mail.com                   ','MLM809328360','Mini Caja De Luz Para Fotografía Portátil, Plegable',1,1, 189.69, 'http://http2.mlstatic.com/D_862875-MLM43821266350_102020-O.jpg')

 INSERT INTO cart (user_email,id_product,name_product,mercado_libre,quantity,price,picture) VALUES ('cinthya@mail.com                   ','MLM809328360','Mini Caja De Luz Para Fotografía Portátil, Plegable',1,1, 189.69, 'http://http2.mlstatic.com/D_862875-MLM43821266350_102020-O.jpg')

 SELECT *
 FROM users

 INSERT INTO users ([user],[name],last_name,email,[password],tel) VALUES ('bebe','an', 'Mir', 'an@hotmail.com','123', 5527562499)

 DROP TABLE cart
 DROP TABLE users