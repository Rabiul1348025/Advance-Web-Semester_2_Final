-- ---------------------------------------------------------------------------------------------------------------------------------
-- UNIT		: Advanced Wed
-- Programm	: Bsc. Software Development
-- Title	: Blogging Application
-- ---------------------------------------------------------------------------------------------------------------------------------


-- CREATE DB -----------------------------------------------------------------------------------------------------------------------
DROP DATABASE IF EXISTS `adv_web`;
CREATE DATABASE IF NOT EXISTS `adv_web`;
USE `adv_web`;

--
-- CREATE DATABASE TABLES ----------------------------------------------------------------------------------------------------------
-- Parent tables
CREATE TABLE IF NOT EXISTS `USERS`(
	ID INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    USER_FIRSTNAME VARCHAR(100),
    USER_LASTNAME VARCHAR(100),
    USER_EMAIL VARCHAR(255) NOT NULL UNIQUE,
    USERNAME VARCHAR(100) NOT NULL UNIQUE,
    USER_PASSWORD VARCHAR(200) NOT NULL,
    USER_IMG VARCHAR(255),
    USER_ROLE ENUM('ADMIN','AUTHOR') NOT NULL DEFAULT 'AUTHOR',
    USER_JOINED TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
)ENGINE=INNODB;

CREATE TABLE IF NOT EXISTS `CATEGORIES` (
	CATEGORY_ID INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    CATEGORY VARCHAR(200) NOT NULL UNIQUE
);

--
-- Child tables
CREATE TABLE IF NOT EXISTS `POSTS`(
	ID INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    POST_TITLE VARCHAR(250) NOT NULL UNIQUE,
    POST_DESCRIPTION TEXT,
    POST_AUTHOR INT NOT NULL,
    POST_IMG VARCHAR(255),
    POST_CATEGORY INT NOT NULL,
    POST_PUBLISHED TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT `FK_POST_AUTHOR` FOREIGN KEY (POST_AUTHOR) REFERENCES `USERS` (ID) ON UPDATE CASCADE ON DELETE CASCADE,
    CONSTRAINT `FK_POST_CATEGORY` FOREIGN KEY (POST_CATEGORY) REFERENCES `CATEGORIES` (CATEGORY_ID) ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS `POST_COMMENTS` (
	ID INT NOT NULL,
    COMMENTOR VARCHAR(100) NOT NULL,
    COMMENTED TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    COMMENTS TEXT,
    CONSTRAINT `FK_POST` FOREIGN KEY (ID) REFERENCES `POSTS` (ID),
    CONSTRAINT `FK_COMMENTOR` FOREIGN KEY (COMMENTOR) REFERENCES `USERS` (USERNAME)
);

--
-- DEFAULT DATA
SELECT * FROM `USERS`;