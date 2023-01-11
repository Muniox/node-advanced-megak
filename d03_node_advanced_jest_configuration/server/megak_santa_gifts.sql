-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Wersja serwera:               10.5.9-MariaDB - mariadb.org binary distribution
-- Serwer OS:                    Win64
-- HeidiSQL Wersja:              11.3.0.6295
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Zrzut struktury bazy danych megak_santa_gifts
CREATE DATABASE IF NOT EXISTS `megak_santa_gifts` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci */;
USE `megak_santa_gifts`;

-- Zrzut struktury tabela megak_santa_gifts.children
CREATE TABLE IF NOT EXISTS `children` (
  `id` varchar(36) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT uuid(),
  `name` varchar(25) COLLATE utf8mb4_unicode_ci NOT NULL,
  `giftId` varchar(36) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_children_gifts` (`giftId`),
  CONSTRAINT `FK_children_gifts` FOREIGN KEY (`giftId`) REFERENCES `gifts` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Zrzucanie danych dla tabeli megak_santa_gifts.children: ~0 rows (około)
/*!40000 ALTER TABLE `children` DISABLE KEYS */;
/*!40000 ALTER TABLE `children` ENABLE KEYS */;

-- Zrzut struktury tabela megak_santa_gifts.gifts
CREATE TABLE IF NOT EXISTS `gifts` (
  `id` varchar(36) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT uuid(),
  `name` varchar(55) COLLATE utf8mb4_unicode_ci NOT NULL,
  `count` int(6) NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Zrzucanie danych dla tabeli megak_santa_gifts.gifts: ~0 rows (około)
/*!40000 ALTER TABLE `gifts` DISABLE KEYS */;
/*!40000 ALTER TABLE `gifts` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
