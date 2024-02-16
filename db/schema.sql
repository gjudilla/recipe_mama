DROP DATABASE IF EXISTS users_db;
CREATE DATABASE users_db;
USE users_db;

CREATE TABLE `accounts` (
  `userName` int(11) AUTO_INCREMENT PRIMARY KEY NOT NULL 
  `userPassword` varchar(100) NOT NULL,
)
