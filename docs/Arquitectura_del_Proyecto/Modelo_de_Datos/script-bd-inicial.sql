-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8 ;
USE `mydb` ;

-- -----------------------------------------------------
-- Table `mydb`.`USER`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`USER` (
  `idUSER` INT NOT NULL AUTO_INCREMENT,
  `token` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `username` VARCHAR(45) NOT NULL,
  `profilePicture` BLOB NOT NULL,
  `role` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idUSER`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`EXERCISE`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`EXERCISE` (
  `date` VARCHAR(45) NOT NULL,
  `calories_burned` VARCHAR(45) NOT NULL,
  `estimated_steps` VARCHAR(45) NOT NULL,
  `USER_idUSER` INT NOT NULL,
  PRIMARY KEY (`date`, `USER_idUSER`),
  INDEX `fk_EXERCISE_USER1_idx` (`USER_idUSER` ASC) VISIBLE,
  CONSTRAINT `fk_EXERCISE_USER1`
    FOREIGN KEY (`USER_idUSER`)
    REFERENCES `mydb`.`USER` (`idUSER`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`REWARD`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`REWARD` (
  `idREWARD` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `type` VARCHAR(45) NOT NULL,
  `badgeImg` BLOB NOT NULL,
  PRIMARY KEY (`idREWARD`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`REWARD_has_USER`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`REWARD_has_USER` (
  `REWARD_idREWARD` INT NOT NULL,
  `USER_idUSER` INT NOT NULL,
  PRIMARY KEY (`REWARD_idREWARD`, `USER_idUSER`),
  INDEX `fk_REWARD_has_USER_USER1_idx` (`USER_idUSER` ASC) VISIBLE,
  INDEX `fk_REWARD_has_USER_REWARD1_idx` (`REWARD_idREWARD` ASC) VISIBLE,
  CONSTRAINT `fk_REWARD_has_USER_REWARD1`
    FOREIGN KEY (`REWARD_idREWARD`)
    REFERENCES `mydb`.`REWARD` (`idREWARD`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_REWARD_has_USER_USER1`
    FOREIGN KEY (`USER_idUSER`)
    REFERENCES `mydb`.`USER` (`idUSER`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
