CREATE DATABASE  IF NOT EXISTS `train_search_db` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `train_search_db`;
-- MySQL dump 10.13  Distrib 8.0.33, for Win64 (x86_64)
--
-- Host: localhost    Database: train_search_db
-- ------------------------------------------------------
-- Server version	8.0.33

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

--
-- Table structure for table `coach`
--

DROP TABLE IF EXISTS `coach`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `coach` (
  `coach_id` int unsigned NOT NULL AUTO_INCREMENT,
  `type` varchar(255) NOT NULL,
  `seats` int NOT NULL,
  PRIMARY KEY (`coach_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `coach`
--

LOCK TABLES `coach` WRITE;
/*!40000 ALTER TABLE `coach` DISABLE KEYS */;
INSERT INTO `coach` VALUES (1,'3AC',50),(2,'2AC',20),(3,'Sleeper',30),(4,'1AC',40);
/*!40000 ALTER TABLE `coach` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `route`
--

DROP TABLE IF EXISTS `route`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `route` (
  `route_id` int unsigned NOT NULL AUTO_INCREMENT,
  `train_id` int unsigned NOT NULL,
  `station_id` int unsigned NOT NULL,
  `stop_number` int NOT NULL,
  `arrival_time` time NOT NULL,
  `departure_time` time DEFAULT NULL,
  `distance_to_next_stop` int NOT NULL,
  PRIMARY KEY (`route_id`),
  KEY `route_stationid_foreign` (`station_id`),
  KEY `route_trainid_foreign` (`train_id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `route`
--

LOCK TABLES `route` WRITE;
/*!40000 ALTER TABLE `route` DISABLE KEYS */;
INSERT INTO `route` VALUES (1,1,1,1,'08:00:00','08:15:00',30),(2,1,2,2,'09:00:00','09:15:00',25),(3,1,3,3,'10:00:00','10:15:00',20),(4,1,4,4,'11:10:00',NULL,40),(5,2,3,1,'10:00:00','10:03:00',30),(6,2,2,2,'11:05:00','11:08:00',25),(7,2,1,3,'11:30:00',NULL,20),(8,3,4,1,'09:30:00','09:45:00',40),(9,3,3,2,'10:30:00','10:34:00',30),(10,3,2,3,'11:20:00','11:25:00',25),(11,3,1,4,'13:00:00',NULL,20);
/*!40000 ALTER TABLE `route` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `seatavailability`
--

DROP TABLE IF EXISTS `seatavailability`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `seatavailability` (
  `seat_availability_id` int unsigned NOT NULL AUTO_INCREMENT,
  `route_id` int unsigned NOT NULL,
  `journey_start_date` date NOT NULL,
  `train_coach_id` int unsigned NOT NULL,
  `seats_available` int NOT NULL,
  `price_to_next_stop` int DEFAULT NULL,
  PRIMARY KEY (`seat_availability_id`),
  KEY `seatavailability_routeid_foreign` (`route_id`),
  KEY `seatavailability_traincoachid_foreign` (`train_coach_id`),
  CONSTRAINT `seatavailability_routeid_foreign` FOREIGN KEY (`route_id`) REFERENCES `route` (`route_id`),
  CONSTRAINT `seatavailability_traincoachid_foreign` FOREIGN KEY (`train_coach_id`) REFERENCES `traincoach` (`train_coach_id`)
) ENGINE=InnoDB AUTO_INCREMENT=189 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `seatavailability`
--

LOCK TABLES `seatavailability` WRITE;
/*!40000 ALTER TABLE `seatavailability` DISABLE KEYS */;
INSERT INTO `seatavailability` VALUES (145,1,'2024-04-01',1,50,200),(146,1,'2024-04-01',2,20,250),(147,1,'2024-04-01',3,30,300),(148,1,'2024-04-01',4,40,350),(149,2,'2024-04-01',1,50,100),(150,2,'2024-04-01',2,20,150),(151,2,'2024-04-01',3,30,200),(152,2,'2024-04-01',4,40,250),(153,3,'2024-04-01',1,50,300),(154,3,'2024-04-01',2,22,350),(155,3,'2024-04-01',3,30,400),(156,3,'2024-04-01',4,40,450),(157,4,'2024-04-01',1,50,0),(158,4,'2024-04-01',2,20,0),(159,4,'2024-04-01',3,30,0),(160,4,'2024-04-01',4,40,0),(161,5,'2024-04-04',1,50,0),(162,5,'2024-04-04',2,20,0),(163,5,'2024-04-04',3,30,0),(164,5,'2024-04-04',4,40,0),(165,6,'2024-04-04',1,50,0),(166,6,'2024-04-04',2,20,0),(167,6,'2024-04-04',3,30,0),(168,6,'2024-04-04',4,40,0),(169,7,'2024-04-04',1,50,0),(170,7,'2024-04-04',2,20,0),(171,7,'2024-04-04',3,30,0),(172,7,'2024-04-04',4,40,0),(173,8,'2024-04-04',1,50,0),(174,8,'2024-04-04',2,20,0),(175,8,'2024-04-04',3,30,0),(176,8,'2024-04-04',4,40,0),(177,9,'2024-04-02',1,50,0),(178,9,'2024-04-02',2,20,0),(179,9,'2024-04-02',3,30,0),(180,9,'2024-04-02',4,40,0),(181,10,'2024-04-02',1,50,0),(182,10,'2024-04-02',2,20,0),(183,10,'2024-04-02',3,30,0),(184,10,'2024-04-02',4,40,0),(185,11,'2024-04-02',1,50,0),(186,11,'2024-04-02',2,20,0),(187,11,'2024-04-02',3,30,0),(188,11,'2024-04-02',4,40,0);
/*!40000 ALTER TABLE `seatavailability` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `station`
--

DROP TABLE IF EXISTS `station`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `station` (
  `station_id` int unsigned NOT NULL AUTO_INCREMENT,
  `station_name` varchar(255) NOT NULL,
  `state` varchar(255) NOT NULL,
  PRIMARY KEY (`station_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `station`
--

LOCK TABLES `station` WRITE;
/*!40000 ALTER TABLE `station` DISABLE KEYS */;
INSERT INTO `station` VALUES (1,'LUCKNOW - LKO','UTTAR PRADESH'),(2,'KANPUR - KP','UTTAR PRADESH'),(3,'SHOHRATGARH - SOT','UTTAR PRADESH'),(4,'GHAZIPUR CITY - GCT','UTTAR PRADESH');
/*!40000 ALTER TABLE `station` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `train`
--

DROP TABLE IF EXISTS `train`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `train` (
  `train_id` int unsigned NOT NULL AUTO_INCREMENT,
  `train_name` varchar(255) NOT NULL,
  `source_station_id` int unsigned NOT NULL,
  `end_station_id` int unsigned NOT NULL,
  `total_seats` int NOT NULL,
  `total_coaches` int NOT NULL,
  `days` varchar(7) NOT NULL,
  `catering_services` varchar(255) NOT NULL,
  PRIMARY KEY (`train_id`),
  KEY `train_sourcestationid_foreign` (`source_station_id`),
  KEY `train_endstationid_foreign` (`end_station_id`),
  CONSTRAINT `train_chk_1` CHECK (regexp_like(`Days`,_utf8mb4'^[0-1]{7}$'))
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `train`
--

LOCK TABLES `train` WRITE;
/*!40000 ALTER TABLE `train` DISABLE KEYS */;
INSERT INTO `train` VALUES (1,'TRAIN 1',1,4,200,10,'0110001','Full Service'),(2,'TRAIN 2',3,1,150,8,'1010101','Limited Service'),(3,'TRAIN 3',4,1,300,12,'1111111','Luxury Dining');
/*!40000 ALTER TABLE `train` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `traincoach`
--

DROP TABLE IF EXISTS `traincoach`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `traincoach` (
  `train_coach_id` int unsigned NOT NULL AUTO_INCREMENT,
  `train_id` int unsigned NOT NULL,
  `coach_id` int unsigned NOT NULL,
  `no_of_coach` int NOT NULL,
  PRIMARY KEY (`train_coach_id`),
  KEY `traincoach_coachid_foreign` (`coach_id`),
  KEY `traincoach_trainid_foreign` (`train_id`),
  CONSTRAINT `traincoach_coachid_foreign` FOREIGN KEY (`coach_id`) REFERENCES `coach` (`coach_id`),
  CONSTRAINT `traincoach_trainid_foreign` FOREIGN KEY (`train_id`) REFERENCES `train` (`train_id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `traincoach`
--

LOCK TABLES `traincoach` WRITE;
/*!40000 ALTER TABLE `traincoach` DISABLE KEYS */;
INSERT INTO `traincoach` VALUES (1,1,1,4),(2,1,2,4),(3,1,3,2),(4,1,4,4),(5,2,1,4),(6,2,2,3),(7,2,3,4),(8,2,4,2),(9,3,1,2),(10,3,2,5),(11,3,3,4),(12,3,4,3);
/*!40000 ALTER TABLE `traincoach` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-04-12 17:16:33
