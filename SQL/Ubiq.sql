-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema Ubiq
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `Ubiq` ;

-- -----------------------------------------------------
-- Schema Ubiq
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `Ubiq` DEFAULT CHARACTER SET utf8 ;
USE `Ubiq` ;

-- -----------------------------------------------------
-- Table `Ubiq`.`Evenement`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Ubiq`.`Evenement` (
  `idEvenement` INT NOT NULL AUTO_INCREMENT,
  `nom` VARCHAR(45) NULL,
  `description` MEDIUMTEXT NULL,
  `prix` DOUBLE NULL,
  `typeEvenement` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idEvenement`),
  UNIQUE INDEX `idEvenement_UNIQUE` (`idEvenement` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Ubiq`.`photoLink`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Ubiq`.`photoLink` (
  `idphotoLink` INT NOT NULL AUTO_INCREMENT,
  `link` VARCHAR(45) NOT NULL,
  `Evenement_idEvenement` INT NOT NULL,
  PRIMARY KEY (`idphotoLink`, `Evenement_idEvenement`),
  INDEX `fk_photoLink_Evenement_idx` (`Evenement_idEvenement` ASC) VISIBLE,
  CONSTRAINT `fk_photoLink_Evenement`
    FOREIGN KEY (`Evenement_idEvenement`)
    REFERENCES `Ubiq`.`Evenement` (`idEvenement`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Ubiq`.`commentaire`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Ubiq`.`commentaire` (
  `idcommentaire` INT NOT NULL AUTO_INCREMENT,
  `commentaire` MEDIUMTEXT NOT NULL,
  `nom` VARCHAR(45) NOT NULL,
  `etoile` INT(10) NOT NULL,
  `Evenement_idEvenement` INT NOT NULL,
  PRIMARY KEY (`idcommentaire`, `Evenement_idEvenement`),
  UNIQUE INDEX `idcommentaire_UNIQUE` (`idcommentaire` ASC) VISIBLE,
  INDEX `fk_commentaire_Evenement1_idx` (`Evenement_idEvenement` ASC) VISIBLE,
  CONSTRAINT `fk_commentaire_Evenement1`
    FOREIGN KEY (`Evenement_idEvenement`)
    REFERENCES `Ubiq`.`Evenement` (`idEvenement`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Ubiq`.`chauffeur`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Ubiq`.`chauffeur` (
  `idchauffeur` INT NOT NULL AUTO_INCREMENT,
  `nom` VARCHAR(45) NOT NULL,
  `prenom` VARCHAR(45) NOT NULL,
  `telephone` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idchauffeur`),
  UNIQUE INDEX `idchauffeur_UNIQUE` (`idchauffeur` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Ubiq`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Ubiq`.`user` (
  `idchauffeur` INT NOT NULL AUTO_INCREMENT,
  `nom` VARCHAR(45) NOT NULL,
  `prenom` VARCHAR(45) NOT NULL,
  `telephone` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `mdp` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idchauffeur`),
  UNIQUE INDEX `idchauffeur_UNIQUE` (`idchauffeur` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Ubiq`.`disponibilite`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Ubiq`.`disponibilite` (
  `iddisponibilite` INT NOT NULL AUTO_INCREMENT,
  `date` DATE NULL,
  `Evenement_idEvenement` INT NOT NULL,
  `estDispo` TINYINT NULL,
  `nombrePersonneMax` INT NULL,
  PRIMARY KEY (`iddisponibilite`, `Evenement_idEvenement`),
  UNIQUE INDEX `iddisponibilite_UNIQUE` (`iddisponibilite` ASC) VISIBLE,
  INDEX `fk_disponibilite_Evenement1_idx` (`Evenement_idEvenement` ASC) VISIBLE,
  CONSTRAINT `fk_disponibilite_Evenement1`
    FOREIGN KEY (`Evenement_idEvenement`)
    REFERENCES `Ubiq`.`Evenement` (`idEvenement`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Ubiq`.`resevation`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Ubiq`.`resevation` (
  `idresevation` INT NOT NULL AUTO_INCREMENT,
  `date` DATE NOT NULL,
  `nombrePersonne` INT NOT NULL,
  `disponibilite_iddisponibilite` INT NOT NULL,
  `disponibilite_Evenement_idEvenement` INT NOT NULL,
  `user_idchauffeur` INT NOT NULL,
  PRIMARY KEY (`idresevation`, `disponibilite_iddisponibilite`, `disponibilite_Evenement_idEvenement`, `user_idchauffeur`),
  UNIQUE INDEX `idresevation_UNIQUE` (`idresevation` ASC) VISIBLE,
  INDEX `fk_resevation_disponibilite1_idx` (`disponibilite_iddisponibilite` ASC, `disponibilite_Evenement_idEvenement` ASC) VISIBLE,
  INDEX `fk_resevation_user1_idx` (`user_idchauffeur` ASC) VISIBLE,
  CONSTRAINT `fk_resevation_disponibilite1`
    FOREIGN KEY (`disponibilite_iddisponibilite` , `disponibilite_Evenement_idEvenement`)
    REFERENCES `Ubiq`.`disponibilite` (`iddisponibilite` , `Evenement_idEvenement`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_resevation_user1`
    FOREIGN KEY (`user_idchauffeur`)
    REFERENCES `Ubiq`.`user` (`idchauffeur`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
