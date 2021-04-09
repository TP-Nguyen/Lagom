-- MySQL dump 10.13  Distrib 8.0.20, for Win64 (x86_64)
--
-- Host: 195.37.176.178    Database: 20_Gruppe5_DB
-- ------------------------------------------------------
-- Server version	5.7.33-0ubuntu0.18.04.1

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
-- Table structure for table `Bild`
--

DROP TABLE IF EXISTS `Bild`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Bild` (
  `BildID` int(11) NOT NULL AUTO_INCREMENT,
  `Pfad` text NOT NULL,
  `GalerieID` int(11) NOT NULL,
  PRIMARY KEY (`BildID`),
  KEY `GalerieID_idx` (`GalerieID`)
) ENGINE=InnoDB AUTO_INCREMENT=9010 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Bild`
--

LOCK TABLES `Bild` WRITE;
/*!40000 ALTER TABLE `Bild` DISABLE KEYS */;
INSERT INTO `Bild` VALUES (9001,'/assets/Galerie/123.jpg',7000),(9002,'/assets/Galerie/135.jpg',7000),(9003,'/assets/Galerie/357.jpg',7000),(9004,'/assets/Galerie/453.jpg',7001),(9005,'/assets/Galerie/456.jpg',7001),(9006,'/assets/Galerie/482.jpg',7001),(9007,'/assets/Galerie/534.jpg',7002),(9008,'/assets/Galerie/786.jpg',7002),(9009,'/assets/Galerie/834.jpg',7002);
/*!40000 ALTER TABLE `Bild` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Eintrag`
--

DROP TABLE IF EXISTS `Eintrag`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Eintrag` (
  `EintragID` int(11) NOT NULL AUTO_INCREMENT,
  `Datum` text NOT NULL,
  `Titel` text NOT NULL,
  `Untertitel` text,
  `Text` text,
  `Notiz` text,
  `Anmerkung` text,
  PRIMARY KEY (`EintragID`)
) ENGINE=InnoDB AUTO_INCREMENT=3195 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Eintrag`
--

LOCK TABLES `Eintrag` WRITE;
/*!40000 ALTER TABLE `Eintrag` DISABLE KEYS */;
INSERT INTO `Eintrag` VALUES (3001,'2020-06-29','Tag 1: MySQL Start','Schritt 2','Zuerst muss man sich MySQL runterladen.','Beim Mac gibt es Sonderheiten.','Es macht Spaß!'),(3002,'2020-05-12','Meeting','Besprechung mit der Crew',NULL,'Auf Discord','Pünktlich sein!'),(3005,'2020-05-31','Auslandsbewerbungsdeadline!',NULL,NULL,NULL,NULL),(3006,'2020-06-13','Party!','Auf Discord',NULL,'Bier mitbringen',NULL),(3008,'2020-05-10','Termin mit Professor','Mit Benjamin Tannert',NULL,'Pünktlich sein',NULL),(3009,'2020-06-02','International Week','Keine Vorlesung machen',NULL,NULL,NULL),(3011,'2020-12-21','Lars Geburtstag','In Bremen',NULL,NULL,NULL),(3012,'2020-08-23','Alisa Einweihungsparty','In Schnekpe','Fahr mit Auto',NULL,NULL),(3013,'2020-08-30','Augenarzt','Rezept mitnehmen',NULL,NULL,NULL),(3014,'2021-01-30','Bafög anmelden',NULL,NULL,NULL,NULL),(3018,'2020-06-18','DB Treffen','Auf Discord','Bald fertig!',NULL,NULL),(3019,'2020-06-19','Finish Round','Datenbanken','Fertig werden','Konzentriert bleiben!',''),(3020,'2020-06-23','Doku schreiben','','','',''),(3021,'2020-06-20','Datenbank',NULL,'Dokumentation erstellen',NULL,NULL),(3022,'2020-06-19','Working','Wir müssen fertig werden! ','','',''),(3023,'2020-07-07','Datenbank Präsentation',NULL,'online Zoom',NULL,NULL),(3024,'2020-06-30','Doku mit hochladen','Doku als PDF',NULL,NULL,NULL),(3025,'2020-07-07','Präsentation','','Datenbank auf Zoom','',''),(3026,'2020-07-01','Augenarzt',NULL,NULL,NULL,'im Medicum'),(3027,'2020-07-10','neuer Monitor kaufen','','','',''),(3028,'2020-06-30','BAFÖG',NULL,'Wintersemester',NULL,NULL),(3029,'2020-06-19','Monatskarte kaufen',NULL,NULL,NULL,NULL),(3031,'2020-08-03','Geburtstag Katharina',NULL,NULL,NULL,NULL),(3032,'2020-07-23','Opas Grab besuchen',NULL,NULL,NULL,NULL),(3033,'2020-07-25','Onkel Geburtstag',NULL,NULL,NULL,'Geschenk besorgen'),(3034,'2020-06-22','Friseur Termin','In der Neustadt',NULL,NULL,NULL),(3035,'2020-07-03','Dachboden ausbauen',NULL,NULL,NULL,NULL),(3036,'2020-06-10','Windows update!','Plane viel Zeit ein','',NULL,NULL),(3038,'2020-06-19','Eintrag erstellen','','','',''),(3040,'2020-07-15','Gartenhaus','',NULL,NULL,NULL),(3041,'2020-08-06','Telekom kündigen',NULL,NULL,NULL,NULL),(3042,'2020-07-07','Ikea ',NULL,NULL,NULL,NULL),(3043,'2020-09-01','iPhone 12',NULL,NULL,NULL,NULL),(3044,'2020-06-20','Nach Syke fahren','','','',''),(3047,'2020-07-13','Urlaub buchen',' Japan',NULL,NULL,NULL),(3048,'2020-07-12','Thao schreiben',NULL,NULL,NULL,NULL),(3049,'2020-06-07','Einladungen verschicken',NULL,NULL,NULL,NULL),(3050,'2020-09-01','Sky & Netflix kündigen',NULL,NULL,NULL,NULL),(3051,'2020-08-03','Wecker einstellen',NULL,NULL,NULL,NULL),(3054,'2020-08-30','Tokyo Flug',NULL,NULL,NULL,NULL),(3055,'2020-06-24','Meeting Zoom','','','',''),(3057,'2020-06-30','Trinken',NULL,'',NULL,NULL),(3061,'2020-06-19','Fitness Goal','Ran halten!','','',''),(3073,'2020-07-12','Breminale','','','',''),(3074,'2020-12-01','Weihnachtsbaum kaufen','','','',''),(3075,'2020-08-08','Jeden Tag joggen gehen','','','',''),(3076,'2020-06-26','Früh schlafen gehen','vor 23 Uhr','','',''),(3078,'2020-07-01','Sparkassen Termin','','','',''),(3081,'2020-06-26','Uhrzeit funktioniert!','','','',''),(3082,'2020-06-30','Englisch Examen','','','',''),(3083,'2020-06-26','Motion Design Noten','Haben wir heute bekommen ','Wir sind unzufrieden ',NULL,NULL),(3084,'2020-06-26','Neusten Stand auf Github pushen','','','',''),(3085,'2020-07-07','Mülltone reinholen','','','',''),(3086,'2020-08-14','Geburtstagstorte rausholen','','','',''),(3087,'2020-07-03','Treffen mit freunden','Am Deich','An der Weser','',''),(3090,'2020-11-01','Jahrestag mit meiner Freundin','','','',''),(3091,'2020-09-04','Mama Geburtstag','','','',''),(3092,'2020-07-07','Nach Münster gefahren','','','',''),(3093,'2020-06-28','Zugtickets kaufen','Super Sparpreis','','',''),(3094,'2021-01-06','In Eiswasser schwimmen','','','',''),(3095,'2020-10-29','Papa Geburtstag','','','',''),(3096,'2020-05-06','Raspery Pi konfiguriert','','','',''),(3097,'2020-10-01','Rauchen aufhören','','','',''),(3098,'2020-10-28','Fitnessstudio abmelden','','','',''),(3099,'2020-09-03','Flug nach Riga','','','',''),(3100,'2020-11-04','Papa Postkarte schicken',NULL,NULL,NULL,NULL),(3101,'2020-08-29','Tasche packen',NULL,NULL,NULL,NULL),(3102,'2020-02-09','Neue Wohnung finden','','','',''),(3103,'2020-12-31','Dachboden aufgeräumt',NULL,NULL,NULL,NULL),(3104,'2020-09-03','Wand streichen','','','',''),(3106,'2020-10-27','Lampe kaufen','','','',''),(3107,'2020-12-24','Weihnachten','','','',''),(3108,'2020-08-18','Laptop neu gekauft','','','',''),(3109,'2020-07-28','Alle Projekte fertig','','','',''),(3110,'2020-09-18','Verein kündigen','','','',''),(3111,'2020-09-03','Opa geburtstag','','','',''),(3112,'2020-09-01','Opa geschenk kaufen','','','',''),(3163,'2020-07-01','Mülleimer reinbringen','','','',''),(3173,'2020-06-29','Abgabe','Datenbank','','',''),(3176,'2020-06-28','Letzer Tag!','','','',''),(3177,'0003-03-12','dfa','','','',''),(3180,'2020-07-23','Date mit Alisa..','','','',''),(3181,'2020-07-29','Deo kaufen','Axe am besten','','',''),(3182,'2020-07-29','Alisa anrufen','Über Discord? ','','',''),(3183,'2020-08-01','Erstes Mal Alisa umarmt!!!','','','',''),(3184,'2020-08-02','Dennis schlecht reden','','','Geschenk nicht vergessen',''),(3188,'2020-01-20','Tante susi','','','',''),(3189,'2020-07-07','Noten auf qis ','','','',''),(3194,'2020-07-07','Datenbanken','','','','');
/*!40000 ALTER TABLE `Eintrag` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Erinnerung`
--

DROP TABLE IF EXISTS `Erinnerung`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Erinnerung` (
  `ErinnerungID` int(11) NOT NULL AUTO_INCREMENT,
  `WorkspaceID` int(11) NOT NULL,
  `EintragID` int(11) NOT NULL,
  `Uhrzeit` text,
  PRIMARY KEY (`ErinnerungID`),
  KEY `EintragID_idx` (`EintragID`),
  KEY `WorkspaceID_idx` (`WorkspaceID`),
  CONSTRAINT `Erinnerung_EintragID` FOREIGN KEY (`EintragID`) REFERENCES `Eintrag` (`EintragID`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `Erinnerung_WorkspaceID` FOREIGN KEY (`WorkspaceID`) REFERENCES `Workspace` (`WorkspaceID`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=5028 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Erinnerung`
--

LOCK TABLES `Erinnerung` WRITE;
/*!40000 ALTER TABLE `Erinnerung` DISABLE KEYS */;
INSERT INTO `Erinnerung` VALUES (5002,2003,3008,NULL),(5003,2001,3020,'15:00'),(5004,2003,3051,NULL),(5006,2005,3013,'08:00'),(5009,2002,3024,'15:15'),(5010,2001,3026,'10:00'),(5011,2005,3031,'20:00'),(5013,2003,3073,'19:00'),(5014,2003,3078,'13:00'),(5015,2003,3081,'15:38'),(5016,2003,3082,'15:00'),(5017,2003,3084,'12:23'),(5018,2004,3086,'18:00'),(5019,2006,3090,''),(5020,2007,3093,'10:00'),(5021,2008,3098,''),(5022,2009,3106,''),(5023,2010,3110,''),(5027,2038,3181,'11:00');
/*!40000 ALTER TABLE `Erinnerung` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Galerie`
--

DROP TABLE IF EXISTS `Galerie`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Galerie` (
  `GalerieID` int(11) NOT NULL AUTO_INCREMENT,
  `WorkspaceID` int(11) NOT NULL,
  PRIMARY KEY (`GalerieID`),
  KEY `WorkspaceID_idx` (`WorkspaceID`),
  CONSTRAINT `Galerie_WorkspaceID` FOREIGN KEY (`WorkspaceID`) REFERENCES `Workspace` (`WorkspaceID`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=7004 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Galerie`
--

LOCK TABLES `Galerie` WRITE;
/*!40000 ALTER TABLE `Galerie` DISABLE KEYS */;
INSERT INTO `Galerie` VALUES (7002,2001),(7001,2002),(7000,2003),(7003,2004);
/*!40000 ALTER TABLE `Galerie` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Kalender`
--

DROP TABLE IF EXISTS `Kalender`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Kalender` (
  `KalenderID` int(11) NOT NULL AUTO_INCREMENT,
  `WorkspaceID` int(11) NOT NULL,
  `EintragID` int(11) NOT NULL,
  `Uhrzeit` text,
  PRIMARY KEY (`KalenderID`),
  KEY `WorkspaceID_idx` (`WorkspaceID`),
  KEY `EintragID_idx` (`EintragID`),
  CONSTRAINT `Kalender_EintragID` FOREIGN KEY (`EintragID`) REFERENCES `Eintrag` (`EintragID`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `Kalender_WorkspaceID` FOREIGN KEY (`WorkspaceID`) REFERENCES `Workspace` (`WorkspaceID`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=6027 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Kalender`
--

LOCK TABLES `Kalender` WRITE;
/*!40000 ALTER TABLE `Kalender` DISABLE KEYS */;
INSERT INTO `Kalender` VALUES (6001,2003,3023,'12:30'),(6002,2002,3011,'08:00'),(6003,2001,3006,'20:00'),(6006,2001,3057,'09:00'),(6008,2002,3025,'13:00'),(6009,2004,3034,'01:00'),(6010,2001,3033,'21:00'),(6011,2005,3032,'16:00'),(6014,2003,3085,'09:00'),(6015,2003,3087,'17:00'),(6016,2006,3091,''),(6017,2007,3095,''),(6018,2008,3099,''),(6019,2009,3107,''),(6020,2010,3111,''),(6024,2038,3182,'14:00'),(6026,2004,3194,'09:00');
/*!40000 ALTER TABLE `Kalender` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Motivation`
--

DROP TABLE IF EXISTS `Motivation`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Motivation` (
  `MotivationID` int(11) NOT NULL AUTO_INCREMENT,
  `Text` text NOT NULL,
  PRIMARY KEY (`MotivationID`)
) ENGINE=InnoDB AUTO_INCREMENT=100012 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Motivation`
--

LOCK TABLES `Motivation` WRITE;
/*!40000 ALTER TABLE `Motivation` DISABLE KEYS */;
INSERT INTO `Motivation` VALUES (100001,'Du wirst es schaffen!'),(100002,'Do it! Do it!'),(100003,'You don\'t have to be great to start. But you do have to start to be great. '),(100004,'Der Weg ist das Ziel.'),(100005,'Live is better, when you are laughing.'),(100006,'Hakuna Matata!'),(100007,'Your only limit is you!'),(100008,'Be a voice, not an echo!'),(100009,'Only dead fish follow the stream! '),(100010,'Dreams don\'t work unless you do! '),(100011,'You only live once!');
/*!40000 ALTER TABLE `Motivation` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Nutzer`
--

DROP TABLE IF EXISTS `Nutzer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Nutzer` (
  `NutzerID` int(11) NOT NULL AUTO_INCREMENT,
  `Nutzername` text NOT NULL,
  `GanzerName` text NOT NULL,
  `Email` text NOT NULL,
  `Passwort` text NOT NULL,
  PRIMARY KEY (`NutzerID`)
) ENGINE=InnoDB AUTO_INCREMENT=47 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Nutzer`
--

LOCK TABLES `Nutzer` WRITE;
/*!40000 ALTER TABLE `Nutzer` DISABLE KEYS */;
INSERT INTO `Nutzer` VALUES (1,'ylitvin','Yuliya Litvin','ylitvin@stud.hs-bremen.de','12345'),(2,'pnguyen','Thao Nguyen','pnguyen@stud.hs-bremen.de','12345'),(3,'lobist','Lars Obist','lobst@stud.hs-bremen.de','12345'),(4,'btannert','Benjamin Tannert','btannert@stud.hs-bremen.de','benjaminT'),(5,'tschuster','Tabea Schuster','tschuster@stud.hs-bremen.de','12345'),(6,'nwennesheimer','Niels Wennesheimer','nwennesheimer@stud.hs-bremen.de','12345'),(7,'mahmad','Moumita Ahmad','mahmad@stud.hs-bremen.de','12345'),(8,'aschumann','Alisa Schumann','aschumann@stud.hs-bremen.de','12345'),(9,'tseehers','Tom Seevers','tseehers@stud.hs-bremen.de','12345'),(10,'rjacobse','Robin Jacobse','rjacobse@stud.hs-bremen.de','12345'),(44,'mhodler','Moritz Ferdinand Hodler','mhodler@hs-bremen.de','ilovealisa'),(45,'obiWanKenobi','Obi-Wan Kenobi','obiWanKenobi@stud.hs-bremen.de','12345'),(46,'a','B','ab@ab.de','12345');
/*!40000 ALTER TABLE `Nutzer` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Tagebuch`
--

DROP TABLE IF EXISTS `Tagebuch`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Tagebuch` (
  `TagebuchID` int(11) NOT NULL AUTO_INCREMENT,
  `WorkspaceID` int(11) NOT NULL,
  `EintragID` int(11) NOT NULL,
  PRIMARY KEY (`TagebuchID`),
  KEY `EintragID_idx` (`EintragID`),
  KEY `WorkspaceID_idx` (`WorkspaceID`),
  CONSTRAINT `Tagebuch_EintragID` FOREIGN KEY (`EintragID`) REFERENCES `Eintrag` (`EintragID`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `Tagebuch_WorkspaceID` FOREIGN KEY (`WorkspaceID`) REFERENCES `Workspace` (`WorkspaceID`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=4041 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Tagebuch`
--

LOCK TABLES `Tagebuch` WRITE;
/*!40000 ALTER TABLE `Tagebuch` DISABLE KEYS */;
INSERT INTO `Tagebuch` VALUES (4001,2001,3001),(4002,2005,3022),(4003,2001,3012),(4005,2003,3018),(4006,2001,3019),(4011,2001,3021),(4012,2005,3021),(4023,2004,3055),(4024,2001,3041),(4025,2002,3040),(4027,2004,3036),(4028,2005,3035),(4029,2001,3083),(4030,2006,3092),(4031,2007,3096),(4032,2008,3100),(4033,2009,3103),(4034,2010,3108),(4039,2003,3176),(4040,2038,3183);
/*!40000 ALTER TABLE `Tagebuch` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ToDo`
--

DROP TABLE IF EXISTS `ToDo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ToDo` (
  `ToDoID` int(11) NOT NULL AUTO_INCREMENT,
  `WorkspaceID` int(11) NOT NULL,
  `EintragID` int(11) NOT NULL,
  `Erledigt` tinyint(4) NOT NULL DEFAULT '0',
  PRIMARY KEY (`ToDoID`),
  KEY `WorkspaceID_idx` (`WorkspaceID`),
  KEY `EintragID_idx` (`EintragID`),
  CONSTRAINT `ToDo_EintragID` FOREIGN KEY (`EintragID`) REFERENCES `Eintrag` (`EintragID`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `ToDo_WorkspaceID` FOREIGN KEY (`WorkspaceID`) REFERENCES `Workspace` (`WorkspaceID`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=8081 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ToDo`
--

LOCK TABLES `ToDo` WRITE;
/*!40000 ALTER TABLE `ToDo` DISABLE KEYS */;
INSERT INTO `ToDo` VALUES (8001,2004,3005,1),(8002,2004,3009,1),(8003,2002,3038,0),(8005,2002,3055,1),(8006,2002,3014,0),(8009,2001,3048,1),(8010,2002,3047,1),(8013,2005,3044,1),(8014,2006,3043,0),(8015,2007,3042,0),(8016,2004,3027,0),(8017,2005,3028,0),(8018,2001,3029,0),(8024,2008,3101,0),(8025,2009,3104,0),(8027,2010,3112,0),(8068,2003,3163,0),(8079,2038,3184,1),(8080,2003,3188,0);
/*!40000 ALTER TABLE `ToDo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Workspace`
--

DROP TABLE IF EXISTS `Workspace`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Workspace` (
  `WorkspaceID` int(11) NOT NULL AUTO_INCREMENT,
  `NutzerID` int(11) NOT NULL,
  `MotivationID` int(11) NOT NULL,
  PRIMARY KEY (`WorkspaceID`),
  KEY `NutzerID_idx` (`NutzerID`),
  KEY `MotivationID_idx` (`MotivationID`),
  CONSTRAINT `MotivationID` FOREIGN KEY (`MotivationID`) REFERENCES `Motivation` (`MotivationID`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `NutzerID` FOREIGN KEY (`NutzerID`) REFERENCES `Nutzer` (`NutzerID`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=2041 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Workspace`
--

LOCK TABLES `Workspace` WRITE;
/*!40000 ALTER TABLE `Workspace` DISABLE KEYS */;
INSERT INTO `Workspace` VALUES (2001,1,100003),(2002,2,100006),(2003,3,100007),(2004,4,100010),(2005,5,100005),(2006,6,100003),(2007,7,100002),(2008,8,100001),(2009,9,100009),(2010,10,100006),(2038,44,100006),(2039,45,100008),(2040,46,100004);
/*!40000 ALTER TABLE `Workspace` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Ziel`
--

DROP TABLE IF EXISTS `Ziel`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Ziel` (
  `ZielID` int(11) NOT NULL AUTO_INCREMENT,
  `WorkspaceID` int(11) NOT NULL,
  `EintragID` int(11) NOT NULL,
  PRIMARY KEY (`ZielID`),
  KEY `WorkspaceID_idx` (`WorkspaceID`),
  KEY `EintragID` (`EintragID`),
  CONSTRAINT `Ziel_EintagID` FOREIGN KEY (`EintragID`) REFERENCES `Eintrag` (`EintragID`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `Ziel_WorkspaceID` FOREIGN KEY (`WorkspaceID`) REFERENCES `Workspace` (`WorkspaceID`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=1026 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Ziel`
--

LOCK TABLES `Ziel` WRITE;
/*!40000 ALTER TABLE `Ziel` DISABLE KEYS */;
INSERT INTO `Ziel` VALUES (1000,2001,3002),(1005,2002,3054),(1009,2005,3050),(1010,2006,3049),(1011,2001,3061),(1012,2003,3074),(1013,2003,3075),(1014,2003,3076),(1015,2007,3094),(1016,2008,3097),(1017,2009,3102),(1018,2010,3109),(1022,2002,3173),(1023,2038,3180),(1025,2004,3189);
/*!40000 ALTER TABLE `Ziel` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-04-08 23:34:10
