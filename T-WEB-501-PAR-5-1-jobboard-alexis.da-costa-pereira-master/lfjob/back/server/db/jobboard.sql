-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema jobboard
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema jobboard
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `jobboard` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `jobboard` ;

-- -----------------------------------------------------
-- Table `jobboard`.`admin`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `jobboard`.`admin` (
  `adminID` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `firstName` VARCHAR(30) NOT NULL,
  `lastName` VARCHAR(30) NOT NULL,
  `adminEmail` VARCHAR(90) GENERATED ALWAYS AS (concat(`firstName`,_utf8mb4'.',`lastName`,_utf8mb4'@lfjob.fr')) STORED,
  `adminPassword` VARCHAR(60) NOT NULL,
  PRIMARY KEY (`adminID`),
  UNIQUE INDEX `adminID` (`adminID` ASC) VISIBLE,
  UNIQUE INDEX `adminEmail` (`adminEmail` ASC) VISIBLE,
  UNIQUE INDEX `adminPassword` (`adminPassword` ASC) VISIBLE)
ENGINE = InnoDB
AUTO_INCREMENT = 2
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `jobboard`.`companies`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `jobboard`.`companies` (
  `id_companie` INT NOT NULL AUTO_INCREMENT,
  `compName` VARCHAR(45) NOT NULL,
  `compWebsite` VARCHAR(60) NOT NULL,
  `compPhone` INT NOT NULL,
  `compEmail` VARCHAR(45) NOT NULL,
  `compAdress` VARCHAR(150) NOT NULL,
  `compCity` VARCHAR(80) NOT NULL,
  `compIndustry` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id_companie`),
  UNIQUE INDEX `id_companie_UNIQUE` (`id_companie` ASC) VISIBLE)
ENGINE = InnoDB
AUTO_INCREMENT = 5
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `jobboard`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `jobboard`.`users` (
  `id_people` INT NOT NULL AUTO_INCREMENT,
  `firstName` VARCHAR(45) NOT NULL,
  `lastName` VARCHAR(45) NOT NULL,
  `company` VARCHAR(50) NULL DEFAULT NULL,
  `people_email` VARCHAR(60) NOT NULL,
  `people_address` VARCHAR(150) NOT NULL,
  `people_city` VARCHAR(80) NOT NULL,
  `isManager` TINYINT NOT NULL,
  `people_secondAdress` VARCHAR(255) NULL DEFAULT NULL,
  `password` VARCHAR(255) NULL DEFAULT NULL,
  `zip` VARCHAR(9999) NULL DEFAULT NULL,
  PRIMARY KEY (`id_people`),
  UNIQUE INDEX `id_people_UNIQUE` (`id_people` ASC) VISIBLE,
  UNIQUE INDEX `people_email_UNIQUE` (`people_email` ASC) VISIBLE)
ENGINE = InnoDB
AUTO_INCREMENT = 36
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `jobboard`.`advertisement`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `jobboard`.`advertisement` (
  `id_advertisement` INT NOT NULL AUTO_INCREMENT,
  `id_companie` INT NOT NULL,
  `id_manager` INT NOT NULL,
  `title` VARCHAR(45) NOT NULL,
  `city` VARCHAR(50) NULL DEFAULT NULL,
  `salaire` TEXT NOT NULL,
  `typeContrat` VARCHAR(15) NULL DEFAULT NULL,
  `description` TEXT NOT NULL,
  `isAvailable` TINYINT NULL DEFAULT NULL,
  PRIMARY KEY (`id_advertisement`),
  INDEX `id_companie_idx` (`id_companie` ASC) VISIBLE,
  INDEX `id_manager_idx` (`id_manager` ASC) VISIBLE,
  CONSTRAINT `id_companie`
    FOREIGN KEY (`id_companie`)
    REFERENCES `jobboard`.`companies` (`id_companie`),
  CONSTRAINT `id_manager`
    FOREIGN KEY (`id_manager`)
    REFERENCES `jobboard`.`users` (`id_people`))
ENGINE = InnoDB
AUTO_INCREMENT = 7
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `jobboard`.`postmessage`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `jobboard`.`postmessage` (
  `id_postmessage` INT NOT NULL AUTO_INCREMENT,
  `id_redacteur` INT NULL DEFAULT NULL,
  `id_advertisement` INT NULL DEFAULT NULL,
  `title` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `message` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id_postmessage`),
  INDEX `FK_idredac_idx` (`id_redacteur` ASC) VISIBLE,
  INDEX `FK_idadv_idx` (`id_advertisement` ASC) VISIBLE,
  CONSTRAINT `FK_idadv`
    FOREIGN KEY (`id_advertisement`)
    REFERENCES `jobboard`.`advertisement` (`id_advertisement`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `FK_idredac`
    FOREIGN KEY (`id_redacteur`)
    REFERENCES `jobboard`.`users` (`id_people`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB
AUTO_INCREMENT = 14
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
