USE anyeddb



CREATE TABLE products (
    id INT NOT NULL IDENTITY(1,1),
    [name] VARCHAR (50),
    stock INT NOT NULL,    
    price INT NOT NULL,
    picture VARCHAR(100),
    PRIMARY KEY (id)
)
SELECT * FROM products

INSERT INTO products ([name],stock,price,picture) VALUES ('Polaroid clasica edicion especial',1,180,'img/i5s.webp')
INSERT INTO products ([name],stock,price,picture) VALUES ('Camara polariod instantanea',10,1220,'img/i3s.webp')
INSERT INTO products ([name],stock,price,picture) VALUES ('Polaroid clasica',5,1500,'img/i2s.webp')
INSERT INTO products ([name],stock,price,picture) VALUES ('Carrete para camara antigua',20,699,'img/i1s.webp')
INSERT INTO products ([name],stock,price,picture) VALUES ('Estuche para lentes',10,530,'img/i4s.webp')

SELECT * FROM products
DROP TABLE users
CREATE TABLE users
(
  id_user int NOT NULL IDENTITY(1,1),
  [user] CHAR(30) NOT NULL,
  [name] CHAR(30) NOT NULL,
  last_name CHAR(30) NOT NULL,
  email CHAR(35) NOT NULL,
  [password] CHAR(100) NOT NULL,
  tel int NOT NULL,
  PRIMARY KEY (email)
)
SELECT *
FROM users

-----------------------------------------------------------

INSERT INTO users
  ([user],[name],last_name,email,[password],tel)

VALUES
  
  ('cinthyaUser','cinthya', 'miranda', 'cinthya@mail.com',  'cinthyapass', 22222222),
  ('edgarUser','edgar', 'bastida', 'edgar@mail.com',  'edgarpass', 33333333);
  ('carlaUser','carla', 'valdez', 'karla@mail.com',  'karlapass', 44444444),
  ('alaniUser','alani', 'menchelli', 'alani@mail.com',  'alanipass', 55555555),
  ('marioUser','mario', 'flores', 'mario@mail.com',  'mariopass', 66666666),
  ('ruthUser','ruth', 'valpaggini', 'ruth@mail.com',  'ruthpass', 77777777),
  ('antonietaUser','antonieta', 'rojas', 'antonieta@mail.com',  'antonietapass', 88888888),
  ('carlosUser','carlos', 'cervantes', 'carlos@mail.com',  'carlospass', 99999999),
  ('ivanUser','ivan', 'bastida', 'ivan@mail.com',  'ivanpass', 10000000);

SELECT * FROM users

DELETE FROM users WHERE [user] ='ivansito'
SELECT [user],email,[name] FROM users WHERE [user] ='edgarUser' AND [password] = 'edgarpass'

---------------------------------------------------------------------------

CREATE TABLE cart (
    id_cart INT NOT NULL IDENTITY(1,1),
    user_email CHAR(35) NOT NULL,
    id_product INT NOT NULL,
    mercado_libre BIT NOT NULL,
    quantity INT NOT NULL,
    price INT NOT NULL,
    PRIMARY KEY (id_cart),
    FOREIGN KEY (user_email) REFERENCES users(email),
    FOREIGN KEY (id_product) REFERENCES products(id),

)


INSERT INTO cart
  (user_email,id_product,mercado_libre,quantity,price)

VALUES
  ('edgar@mail.com',1, 1,1, 180),
  ('edgar@mail.com',2, 1,1, 180)

  SELECT * FROM cart 

SELECT * FROM cart JOIN users ON cart.user_email = users.email
;

SELECT * FROM cart LEFT JOIN users ON cart.user_email = users.email AND users.email = 'edgar@mail.com' 