-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema registrations
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `registrations` ;

-- -----------------------------------------------------
-- Schema registrations
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `registrations` DEFAULT CHARACTER SET utf8 ;
USE `registrations` ;

-- -----------------------------------------------------
-- Table `registrations`.`registrations`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `registrations`.`registrations` ;

CREATE TABLE IF NOT EXISTS `registrations`.`registrations` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `first_name` VARCHAR(45) NULL,
  `last_name` VARCHAR(95) NULL,
  `email` VARCHAR(100) NULL,
  `password` VARCHAR(60) NULL,
  `created_at` DATETIME NULL DEFAULT NOW(),
  `updated_at` DATETIME NULL DEFAULT NOW() ON UPDATE NOW(),
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
