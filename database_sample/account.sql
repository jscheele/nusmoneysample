DROP TABLE IF EXISTS account;
CREATE TABLE account(
   user    INTEGER  NOT NULL
  ,id      INTEGER  NOT NULL PRIMARY KEY 
  ,account VARCHAR(7) NOT NULL
  ,balance NUMERIC(7,2) NOT NULL
);
INSERT INTO account(user,id,account,balance) VALUES (1,1,'cheque',479.87);
INSERT INTO account(user,id,account,balance) VALUES (1,2,'savings',2098.95);
INSERT INTO account(user,id,account,balance) VALUES (1,3,'credit',339.78);
