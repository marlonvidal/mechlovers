-- --------------------------------------------------------
-- Host:                         localhost
-- Server version:               5.6.41 - MySQL Community Server (GPL)
-- Server OS:                    Linux
-- HeidiSQL Version:             9.5.0.5196
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- Dumping database structure for mechlovers.usuario
CREATE DATABASE IF NOT EXISTS `mechlovers_usuarios` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `mechlovers_usuarios`;

-- Dumping structure for table mechlovers.usuario.perfil_acesso
CREATE TABLE IF NOT EXISTS `perfil_acesso` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `tipo` varchar(10) NOT NULL,
  `descricao` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

-- Dumping data for table mechlovers.usuario.perfil_acesso: ~0 rows (approximately)
/*!40000 ALTER TABLE `perfil_acesso` DISABLE KEYS */;
INSERT INTO `perfil_acesso` (`id`, `tipo`, `descricao`) VALUES
	(1, 'ADMIN', 'Usuario administrador do sistema'),
	(2, 'OPERADOR', 'Usuario operador do sistema. Tem acesso restrito a algumas funcionalidades');
/*!40000 ALTER TABLE `perfil_acesso` ENABLE KEYS */;

-- Dumping structure for table mechlovers.usuario.usuario
CREATE TABLE IF NOT EXISTS `usuario` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_perfil_acesso` int(11) NOT NULL,
  `nome` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `senha` varchar(500) NOT NULL,
  `ativo` tinyint(4) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`),
  KEY `fk_usuario_perfil_acesso` (`id_perfil_acesso`),
  CONSTRAINT `fk_usuario_perfil_acesso` FOREIGN KEY (`id_perfil_acesso`) REFERENCES `perfil_acesso` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Dumping data for table mechlovers.usuario.usuario: ~0 rows (approximately)
/*!40000 ALTER TABLE `usuario` DISABLE KEYS */;
/*!40000 ALTER TABLE `usuario` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
