DROP TABLE IF EXISTS user;
CREATE TABLE user(
   id         INTEGER  NOT NULL PRIMARY KEY 
  ,first_name VARCHAR(9) NOT NULL
  ,last_name  VARCHAR(11) NOT NULL
  ,email      VARCHAR(34) NOT NULL
  ,mobile     VARCHAR(8)
);
INSERT INTO user(id,first_name,last_name,email,mobile) VALUES (1,'Dena','Charle','dcharle0@indiegogo.com','98765433');
INSERT INTO user(id,first_name,last_name,email,mobile) VALUES (2,'Dynah','Waiting','dwaiting1@google.com.br','98765434');
INSERT INTO user(id,first_name,last_name,email,mobile) VALUES (3,'Marc','Conibeer','mconibeer2@desdev.cn','Male');
INSERT INTO user(id,first_name,last_name,email,mobile) VALUES (4,'Tyne','Hryskiewicz','thryskiewicz3@eepurl.com','98765435');
INSERT INTO user(id,first_name,last_name,email,mobile) VALUES (5,'Astrix','Standbrooke','astandbrooke4@pagesperso-orange.fr','98765436');
INSERT INTO user(id,first_name,last_name,email,mobile) VALUES (6,'Francoise','Davison','fdavison5@goo.gl','98765437');
INSERT INTO user(id,first_name,last_name,email,mobile) VALUES (7,'Matias','Dunphy','mdunphy6@squarespace.com',NULL);
INSERT INTO user(id,first_name,last_name,email,mobile) VALUES (8,'Frants','Barnewelle','fbarnewelle7@rakuten.co.jp','Male');
INSERT INTO user(id,first_name,last_name,email,mobile) VALUES (9,'Corena','Antosch','cantosch8@jugem.jp','98765438');
INSERT INTO user(id,first_name,last_name,email,mobile) VALUES (10,'Nananne','Becarra','nbecarra9@gnu.org','98765432');
