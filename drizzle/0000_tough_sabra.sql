CREATE TABLE `users` (
	`id` int AUTO_INCREMENT NOT NULL,
	`name` varchar(255) NOT NULL,
	`email` varchar(255) NOT NULL,
	`address` varchar(255) NOT NULL,
	`city` varchar(255) NOT NULL,
	`bill` decimal(10,2) NOT NULL,
	`rooftype` varchar(255) NOT NULL,
	`shift` varchar(255) NOT NULL,
	`message` varchar(255) NOT NULL,
	`plan` varchar(255) NOT NULL,
	CONSTRAINT `users_id` PRIMARY KEY(`id`),
	CONSTRAINT `users_email_unique` UNIQUE(`email`)
);
