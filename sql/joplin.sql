CREATE DATABASE `joplin`;

USE `joplin`;

DROP TABLE IF EXISTS `opus`;

CREATE TABLE `opus` (
	`fullname` char(255),
	`composer` char(255),
	`year` date DEFAULT NULL,
	`opusID` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
	PRIMARY KEY(`opusID`)
) ENGINE=InnoDB;

DROP TABLE IF EXISTS `performance`;

CREATE TABLE `performance` (
	`perfID` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
	`performer` char(255) default NULL,
	`location` char(255) default NULL,
	`url` TEXT default NULL,
	PRIMARY KEY(`perfID`)
) ENGINE=InnoDB;

DROP TABLE IF EXISTS `perfToOpus`;

CREATE TABLE `perfToOpus` (
	`opusID` int(10),
	`perfID` int(10)
) ENGINE=InnoDB;

insert into `opus`(`fullname`,`composer`,`year`) values
("6 Characteristic Pieces", "Bedrich Smetana", 1848);

insert into `performance` (`performer`,`location`,`url`) values
("Jan Novotny", DEFAULT, "https://www.youtube.com/watch?v=o0DG_vUZw38"),
("Foobar Foolord", "Moon", DEFAULT);

insert into `perfToOpus` (`opusID`,`perfID`) values
(1, 1),
(1, 2);
