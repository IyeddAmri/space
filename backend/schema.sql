-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema space
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema space
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `space` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `space` ;

-- -----------------------------------------------------
-- Table `space`.`quiz_questions`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `space`.`quiz_questions` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `question` TEXT NOT NULL,
  `option1` VARCHAR(255) NOT NULL,
  `option2` VARCHAR(255) NOT NULL,
  `option3` VARCHAR(255) NOT NULL,
  `option4` VARCHAR(255) NOT NULL,
  `correct_option` INT NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
