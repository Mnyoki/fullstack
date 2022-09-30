CREATE DATABASE publications;
USE publications;
 CREATE TABLE classics (
 author VARCHAR(128),
 title VARCHAR(128),
 type VARCHAR(16),
 year CHAR(4)) ENGINE InnoDB;
 INSERT INTO classics(author, title, type, year)
 VALUES('Mark Twain','The Adventures of Tom Sawyer','Fiction','1876');
INSERT INTO classics(author, title, type, year)
 VALUES('Jane Austen','Pride and Prejudice','Fiction','1811');
INSERT INTO classics(author, title, type, year)
 VALUES('Charles Darwin','The Origin of Species','Non-Fiction','1856');
INSERT INTO classics(author, title, type, year)
 VALUES('Charles Dickens','The Old Curiosity Shop','Fiction','1841');
INSERT INTO classics(author, title, type, year)
 VALUES('William Shakespeare','Romeo and Juliet','Play','1594');
 INSERT INTO classics(author, title, category, year, isbn)
 VALUES('Charles Dickens', 'Little Dorrit', 'Fiction', '1857', '6789012345678');
 
 #Inserting lot of values at once.
 INSERT INTO classics(author, title, category, year, isbn) VALUES
 ('Robin Nixon', 'HTML CSS PHP MYSQL Javascript with jQUERY', 'Programing', '2020', '7890123456789'),
 ('Robin Sharma', 'The 5 AM Club', 'Self Help', '2017', '8901234567890');
 SELECT * FROM classics;
 
 #Joining Tables Together. 
 CREATE TABLE customers (
 name VARCHAR(128),
 isbn VARCHAR(13),
 PRIMARY KEY (isbn)) ENGINE InnoDB;
 
 INSERT INTO customers (name, isbn) VALUES ('Joe Bloggs', '1234567890123');
 INSERT INTO customers (name, isbn) VALUES ('Mary Smith', '3456789012345');
 INSERT INTO customers (name, isbn) VALUES ('Jack Wilson','4567890123456');
 INSERT INTO customers (name, isbn) VALUES ('Moses Munyoki', '8901234567890');
 
 #Joining two tables into a single SELECT. 
 SELECT name, author, title,category from customers,classics WHERE customers.isbn=classics.isbn;
 
 #Natural Join . 
 SELECT name, author, title, category FROM customers NATURAL JOIN  classics;
 
 #JOIN...ON
 SELECT name, author, title FROM customers JOIN classics ON customers.isbn=classics.isbn;
 
 #Using AS
 SELECT name, author, title FROM customers AS cust, classics AS class WHERE cust.isbn=class.isbn;
 SELECT * FROM customers;
 
 # renaming Using AS
 SELECT name AS customer FROM customers ORDER BY customer;
 
 ALTER TABLE classics RENAME pre1900;
 ALTER TABLE pre1900 RENAME classics;
 
 ALTER TABLE classics MODIFY year SMALLINT;
 ALTER TABLE classics ADD pages SMALLINT UNSIGNED;
 ALTER TABLE classics CHANGE type category VARCHAR(16);
 ALTER TABLE classics DROP pages;
 
 #creating and deleting a table
 CREATE TABLE disposable(trash INT);
 DESCRIBE disposable;
 DROP TABLE disposable;
 SHOW TABLES;
 
 ##adding indexs's for easy search.
 ALTER TABLE classics ADD INDEX(author(20));
 ALTER TABLE classics ADD INDEX(title(20));
 ALTER TABLE classics ADD INDEX(category(4));
 ALTER TABLE classics ADD INDEX(year);
 
 ALTER TABLE classics ADD FULLTEXT(author,title);

 
 ## creating tables with indexs 
 CREATE TABLE example(
 author VARCHAR(128),
 title VARCHAR(128),
 category VARCHAR(16),
 year SMALLINT,
 isbn CHAR(13),
 INDEX(author(20)),
 INDEX(title(20)),
 INDEX(category(4)),
 INDEX(year),
 PRIMARY KEY (isbn)) ENGINE InnoDB;
 DESCRIBE example;
 DROP TABLE example;

 ## creating a primary key
 
 ALTER TABLE classics ADD isbn CHAR(13);
 UPDATE classics SET isbn='1234567890123' WHERE year='1876';
 UPDATE classics SET isbn='2345678901234' WHERE year='1811';
 UPDATE classics SET isbn='3456789012345' WHERE year='1856';
 UPDATE classics SET isbn='4567890123456' WHERE year='1841';
 UPDATE classics SET isbn='5678901234567' WHERE year='1594';
 ALTER TABLE classics ADD PRIMARY KEY(isbn);
  
  #UPDATE...SET allow update the contents of a field.
  UPDATE classics SET author='Mark Twain (Samuel Langhorne Clemens)' WHERE author='Mark Twain';
  UPDATE classics SET category="Classic Fiction" WHERE category="fiction"; 
  UPDATE classics SET category="Fiction" WHERE year="1811";
  
  
  # ORDER BY sorts returned results by one or more columns
  SELECT author,title FROM classics ORDER BY author;
  SELECT author, title FROM classics ORDER BY title DESC;
  SELECT author, title, year FROM classics ORDER BY author, year DESC;
  SELECT author, title, year, isbn FROM classics ORDER BY author, year, isbn DESC;
  
  # GROUP BY
  SELECT category, COUNT(author) FROM classics GROUP BY category;
  SELECT * FROM classics;
  
  DELETE FROM classics WHERE title='Little Dorrit';   #deleting a row in a table.
  
  #using limit qualifier;
  SELECT author, title FROM classics LIMIT 3; # LIMITS TO THE FIRST 3 ELEMENTS.alter
  SELECT author, title FROM classics LIMIT 1,2;  # in 1,2 it skips the fist element in the column and displays the next two.alter
  SELECT author, title FROM classics LIMIT 3,2;  # In 3,2, it skips the first three elements and displays the next two in the list 
  
  # MATCH...AGAINST construct
  SELECT author, title FROM classics WHERE MATCH(author, title) AGAINST('and');
  SELECT author, title FROM classics WHERE MATCH( author, title) AGAINST('curiosity shop');
  SELECT author, title FROM classics WHERE MATCH(author, title) AGAINST('Charles Dickens'); # it looks for any column with any of the words and prints them out.
  /* 
  MATCH...AGAINST
  you can't search for a one specific column
  */
  
  # MATCH...AGAINST in Boolean Mode
  SELECT author, title FROM classics WHERE MATCH (author, title) AGAINST('+Charles +Dickens' IN BOOLEAN MODE); # user specific.
  SELECT author, title FROM classics  WHERE MATCH(author, title) AGAINST('"origin of"' IN BOOLEAN MODE);
  
  SELECT * FROM classics;
  
  SELECT author, title FROM classics WHERE author='Charles Dickens';
  SELECT author, title FROM classics WHERE author LIKE "char%"; # searchs for a string that start with the "char"
  SELECT author, title FROM classics WHERE title LIKE  "%Species"; #searchs for a string that ends with 'species' specifically.
  SELECT author, title FROM classics WHERE title like "%and%";  # searchs for a string that contains "and" at any point.
  
  # Using logical operators. 
  SELECT author, title FROM classics WHERE author LIKE "charles%" AND author LIKE "%Darwin";
  SELECT author , title  FROM classics WHERE author LIKE "% Mark Twain%" OR author LIKE "%Samuel Langhorne%";
  SELECT author, title FROM classics WHERE author LIKE "Charles%" AND author NOT LIKE "%Darwin";
 SELECT * FROM classics;
 SELECT author, title FROM classics where author LIKE "%Langhorne%";
 SELECT title, year FROM classics;
 SELECT COUNT(*) FROM classics;
 SELECT author FROM classics;
 SELECT DISTINCT author FROM classics;
 DESCRIBE classics;
 SHOW TABLES;

