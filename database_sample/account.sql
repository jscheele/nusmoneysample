DROP TABLE IF EXISTS account;
CREATE TABLE account(
   user_id      INTEGER  NOT NULL
  ,account_id   INTEGER  NOT NULL PRIMARY KEY 
  ,account_name VARCHAR(20) NOT NULL
  ,account_type VARCHAR(7) NOT NULL
  ,balance      NUMERIC(7,2) NOT NULL
);
INSERT INTO account(user_id,account_id,account_name,account_type,balance) VALUES (1,1,'Everyday','cheque',479.87);
INSERT INTO account(user_id,account_id,account_name,account_type,balance) VALUES (1,2,'Term Deposit','savings',2098.95);
INSERT INTO account(user_id,account_id,account_name,account_type,balance) VALUES (1,3,'Visa Platinum','credit',339.78);
