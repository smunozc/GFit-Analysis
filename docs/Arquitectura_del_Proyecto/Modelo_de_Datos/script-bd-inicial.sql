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
-- Table `mydb`.`EXERCISE`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`EXERCISE` (
  `date` VARCHAR(45) NOT NULL,
  `calories_burned` VARCHAR(45) NOT NULL,
  `estimated_steps` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`date`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`USER`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`USER` (
  `idUSER` INT NOT NULL AUTO_INCREMENT,
  `email` VARCHAR(45) NOT NULL,
  `token` VARCHAR(45) NOT NULL,
  `username` VARCHAR(45) NOT NULL,
  `EXERCISE_date` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idUSER`, `EXERCISE_date`),
  INDEX `fk_USER_EXERCISE1_idx` (`EXERCISE_date` ASC) VISIBLE,
  CONSTRAINT `fk_USER_EXERCISE1`
    FOREIGN KEY (`EXERCISE_date`)
    REFERENCES `mydb`.`EXERCISE` (`date`)
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
  `imgUrl` VARCHAR(200) NOT NULL,
  PRIMARY KEY (`idREWARD`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`USER_has_REWARD`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`USER_has_REWARD` (
  `USER_idUSER` INT NOT NULL,
  `USER_EXERCISE_date` VARCHAR(45) NOT NULL,
  `REWARD_idREWARD` INT NOT NULL,
  PRIMARY KEY (`USER_idUSER`, `USER_EXERCISE_date`, `REWARD_idREWARD`),
  INDEX `fk_USER_has_REWARD1_REWARD1_idx` (`REWARD_idREWARD` ASC) VISIBLE,
  INDEX `fk_USER_has_REWARD1_USER1_idx` (`USER_idUSER` ASC, `USER_EXERCISE_date` ASC) VISIBLE,
  CONSTRAINT `fk_USER_has_REWARD1_USER1`
    FOREIGN KEY (`USER_idUSER` , `USER_EXERCISE_date`)
    REFERENCES `mydb`.`USER` (`idUSER` , `EXERCISE_date`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_USER_has_REWARD1_REWARD1`
    FOREIGN KEY (`REWARD_idREWARD`)
    REFERENCES `mydb`.`REWARD` (`idREWARD`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
