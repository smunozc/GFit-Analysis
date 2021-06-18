-- MySQL dump 10.13  Distrib 8.0.23, for Win64 (x86_64)
--
-- Host: yvu4xahse0smimsc.chr7pe7iynqr.eu-west-1.rds.amazonaws.com    Database: eqaucwmpbwco6fwn
-- ------------------------------------------------------
-- Server version	8.0.20

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
SET @MYSQLDUMP_TEMP_LOG_BIN = @@SESSION.SQL_LOG_BIN;
SET @@SESSION.SQL_LOG_BIN= 0;

--
-- GTID state at the beginning of the backup 
--

SET @@GLOBAL.GTID_PURGED=/*!80000 '+'*/ '';

--
-- Table structure for table `exercise`
--

DROP TABLE IF EXISTS `exercise`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `exercise` (
  `date` varchar(255) NOT NULL,
  `fk_user` int NOT NULL,
  `calories_burned` int DEFAULT NULL,
  `estimated_steps` int DEFAULT NULL,
  PRIMARY KEY (`date`,`fk_user`),
  KEY `FK88wyfqt1ek91nusvlpyct1ae1` (`fk_user`),
  CONSTRAINT `FK88wyfqt1ek91nusvlpyct1ae1` FOREIGN KEY (`fk_user`) REFERENCES `user` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `exercise`
--

LOCK TABLES `exercise` WRITE;
/*!40000 ALTER TABLE `exercise` DISABLE KEYS */;
INSERT INTO `exercise` VALUES ('2021/06/14',1,1745,0),('2021/06/14',3,1795,1285),('2021/06/15',1,1842,1876),('2021/06/15',2,869,933),('2021/06/15',3,1182,809),('2021/06/16',1,1909,4523),('2021/06/16',2,69,94),('2021/06/17',1,1424,364);
/*!40000 ALTER TABLE `exercise` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `reward`
--

DROP TABLE IF EXISTS `reward`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `reward` (
  `reward_id` int NOT NULL AUTO_INCREMENT,
  `badge_img` varchar(255) DEFAULT NULL,
  `badge_type` int NOT NULL,
  `condition_num` int NOT NULL,
  `data_type` int NOT NULL,
  `description` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`reward_id`),
  UNIQUE KEY `UK_8i05g773pd1s8wa6pxoumfc7e` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reward`
--

LOCK TABLES `reward` WRITE;
/*!40000 ALTER TABLE `reward` DISABLE KEYS */;
INSERT INTO `reward` VALUES (3,'https://drive.google.com/uc?id=1-8KiZsf_0lCJG4AIQShgksyCESUZss0s',0,1000,0,'The user reached 1000 steps','One small step for a man...'),(4,'https://drive.google.com/uc?id=13JnIy2Hx5woceGRyC0bSpgSv6gV71wGR',1,20000,0,'The user reached 20000 steps','Walkthrough'),(5,'https://drive.google.com/uc?id=1wcP9F3CFin2j2vJVGhGiGGYo1Ad-LznY',2,100000,0,'The user reached 100000 steps','Forrest Gump'),(6,'https://drive.google.com/uc?id=1-8KiZsf_0lCJG4AIQShgksyCESUZss0s',0,5000,1,'The user burned 5000 calories','Taking it seriously');
/*!40000 ALTER TABLE `reward` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `user_id` int NOT NULL AUTO_INCREMENT,
  `display_name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `photourl` varchar(255) DEFAULT NULL,
  `role` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `UK_ob8kqyqqgmefl0aco34akdtpe` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'Salvador Muñoz','salvador.munoz.cordero@gmail.com','https://lh3.googleusercontent.com/a-/AOh14GjKLlE_5ekZMEx7eXOvILjyzdMK1OvbTSGcSy1fGA=s96-c','admin'),(2,'salvador muñoz','salvamunozp@gmail.com','https://lh3.googleusercontent.com/a/AATXAJxCx1xD-lY2EtTQihOos2L2646-EppkYheqlELf=s96-c','user'),(3,'GFit Analysis','gfit.analysis@gmail.com','https://lh3.googleusercontent.com/a-/AOh14GiLLwLCE-GES_bMsmYk4QZLkdoHO5MYe53NJzxl=s96-c','user');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_rewards`
--

DROP TABLE IF EXISTS `user_rewards`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_rewards` (
  `reward_id` int NOT NULL,
  `user_id` int NOT NULL,
  `date` varchar(255) NOT NULL,
  PRIMARY KEY (`reward_id`,`user_id`),
  KEY `FKlsnfdvcb0joads5hv1yhju44t` (`user_id`),
  CONSTRAINT `FKlsnfdvcb0joads5hv1yhju44t` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`),
  CONSTRAINT `FKnrtk8gpr4f0r140rgb4g82mjj` FOREIGN KEY (`reward_id`) REFERENCES `reward` (`reward_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_rewards`
--

LOCK TABLES `user_rewards` WRITE;
/*!40000 ALTER TABLE `user_rewards` DISABLE KEYS */;
INSERT INTO `user_rewards` VALUES (3,1,'2021/06/15'),(3,2,'2021/06/16'),(3,3,'2021/06/15'),(6,1,'2021/06/16');
/*!40000 ALTER TABLE `user_rewards` ENABLE KEYS */;
UNLOCK TABLES;
SET @@SESSION.SQL_LOG_BIN = @MYSQLDUMP_TEMP_LOG_BIN;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-06-18 13:33:50
