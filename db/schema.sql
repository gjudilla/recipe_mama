DROP DATABASE IF EXISTS users_db;
CREATE DATABASE users_db;
USE users_db;

CREATE TABLE `accounts` (
  `userID` int(30) NOT NULL AUTO_INCREMENT,
  `userName` varchar(50) NOT NULL,
  `userPassword` varchar(50) NOT NULL,
)
