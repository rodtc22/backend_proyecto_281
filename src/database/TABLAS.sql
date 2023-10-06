-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Versión del servidor:         10.4.28-MariaDB - mariadb.org binary distribution
-- SO del servidor:              Win64
-- HeidiSQL Versión:             12.5.0.6677
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

-- Volcando estructura para tabla proyecto_inf281.actividads
CREATE TABLE IF NOT EXISTS `Actividads` (
  `id_actividad` int(11) NOT NULL AUTO_INCREMENT,
  `nombre_actividad` varchar(255) DEFAULT NULL,
  `tipo` varchar(255) DEFAULT NULL,
  `descripcion` varchar(255) DEFAULT NULL,
  `fecha_ini` datetime DEFAULT NULL,
  `fecha_fin` datetime DEFAULT NULL,
  `hora` datetime DEFAULT NULL,
  `id_administrador` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id_actividad`),
  KEY `id_administrador` (`id_administrador`),
  CONSTRAINT `actividads_ibfk_1` FOREIGN KEY (`id_administrador`) REFERENCES `Administradors` (`id_administrador`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- La exportación de datos fue deseleccionada.

-- Volcando estructura para tabla proyecto_inf281.administradors
CREATE TABLE IF NOT EXISTS `Administradors` (
  `id_administrador` int(11) NOT NULL AUTO_INCREMENT,
  `id_usuario` int(11) DEFAULT NULL,
  `rol` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id_administrador`),
  KEY `id_usuario` (`id_usuario`),
  CONSTRAINT `administradors_ibfk_1` FOREIGN KEY (`id_usuario`) REFERENCES `Usuarios` (`id_usuario`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- La exportación de datos fue deseleccionada.

-- Volcando estructura para tabla proyecto_inf281.agregas
CREATE TABLE IF NOT EXISTS `Agregas` (
  `id_agrega` int(11) NOT NULL AUTO_INCREMENT,
  `id_usuario` int(11) DEFAULT NULL,
  `id_contacto` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id_agrega`),
  KEY `id_usuario` (`id_usuario`),
  KEY `id_contacto` (`id_contacto`),
  CONSTRAINT `agregas_ibfk_1` FOREIGN KEY (`id_usuario`) REFERENCES `Usuario_normals` (`id_usuario`) ON DELETE CASCADE,
  CONSTRAINT `agregas_ibfk_2` FOREIGN KEY (`id_contacto`) REFERENCES `Contactos` (`id_contacto`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- La exportación de datos fue deseleccionada.

-- Volcando estructura para tabla proyecto_inf281.alertas
CREATE TABLE IF NOT EXISTS `Alertas` (
  `id_alerta` int(11) NOT NULL AUTO_INCREMENT,
  `fecha` datetime DEFAULT NULL,
  `hora` datetime DEFAULT NULL,
  `ubicacion` varchar(255) DEFAULT NULL,
  `descripcion_incidente` varchar(255) DEFAULT NULL,
  `id_usuario` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id_alerta`),
  KEY `id_usuario` (`id_usuario`),
  CONSTRAINT `alertas_ibfk_1` FOREIGN KEY (`id_usuario`) REFERENCES `Usuario_normals` (`id_usuario`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- La exportación de datos fue deseleccionada.

-- Volcando estructura para tabla proyecto_inf281.asistes
CREATE TABLE IF NOT EXISTS `Asistes` (
  `id_asiste` int(11) NOT NULL AUTO_INCREMENT,
  `id_administrador` int(11) DEFAULT NULL,
  `id_denuncia` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id_asiste`),
  KEY `id_administrador` (`id_administrador`),
  KEY `id_denuncia` (`id_denuncia`),
  CONSTRAINT `asistes_ibfk_1` FOREIGN KEY (`id_administrador`) REFERENCES `Administradors` (`id_administrador`) ON DELETE CASCADE,
  CONSTRAINT `asistes_ibfk_2` FOREIGN KEY (`id_denuncia`) REFERENCES `Denuncias` (`id_denuncia`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- La exportación de datos fue deseleccionada.

-- Volcando estructura para tabla proyecto_inf281.comentarios
CREATE TABLE IF NOT EXISTS `Comentarios` (
  `id_comentario` int(11) NOT NULL AUTO_INCREMENT,
  `fecha` datetime DEFAULT NULL,
  `descripcion` varchar(255) DEFAULT NULL,
  `estado` tinyint(1) DEFAULT NULL,
  `id_administrador` int(11) DEFAULT NULL,
  `id_recurso` int(11) DEFAULT NULL,
  `id_usuario` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id_comentario`),
  KEY `id_administrador` (`id_administrador`),
  KEY `id_recurso` (`id_recurso`),
  KEY `id_usuario` (`id_usuario`),
  CONSTRAINT `comentarios_ibfk_1` FOREIGN KEY (`id_administrador`) REFERENCES `Administradors` (`id_administrador`) ON DELETE CASCADE,
  CONSTRAINT `comentarios_ibfk_2` FOREIGN KEY (`id_recurso`) REFERENCES `Recursos` (`id_recurso`) ON DELETE CASCADE,
  CONSTRAINT `comentarios_ibfk_3` FOREIGN KEY (`id_usuario`) REFERENCES `Usuario_normals` (`id_usuario`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- La exportación de datos fue deseleccionada.

-- Volcando estructura para tabla proyecto_inf281.contactos
CREATE TABLE IF NOT EXISTS `Contactos` (
  `id_contacto` int(11) NOT NULL AUTO_INCREMENT,
  `nombre_contacto` varchar(255) DEFAULT NULL,
  `fecha_ac` datetime DEFAULT NULL,
  `telefono` varchar(255) DEFAULT NULL,
  `id_usuario` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id_contacto`),
  KEY `id_usuario` (`id_usuario`),
  CONSTRAINT `contactos_ibfk_1` FOREIGN KEY (`id_usuario`) REFERENCES `Usuario_normals` (`id_usuario`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- La exportación de datos fue deseleccionada.

-- Volcando estructura para tabla proyecto_inf281.denuncias
CREATE TABLE IF NOT EXISTS `Denuncias` (
  `id_denuncia` int(11) NOT NULL AUTO_INCREMENT,
  `nombre_victima` varchar(255) DEFAULT NULL,
  `nombre_agresor` varchar(255) DEFAULT NULL,
  `tipo_violencia` varchar(255) DEFAULT NULL,
  `tipo_denuncia` varchar(255) DEFAULT NULL,
  `fecha` datetime DEFAULT NULL,
  `descripcion` varchar(255) DEFAULT NULL,
  `pruebas` varchar(255) DEFAULT NULL,
  `ubicacion` varchar(255) DEFAULT NULL,
  `estado` tinyint(1) DEFAULT NULL,
  `id_usuario` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id_denuncia`),
  KEY `id_usuario` (`id_usuario`),
  CONSTRAINT `denuncias_ibfk_1` FOREIGN KEY (`id_usuario`) REFERENCES `Usuario_normals` (`id_usuario`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- La exportación de datos fue deseleccionada.

-- Volcando estructura para tabla proyecto_inf281.evaluacions
CREATE TABLE IF NOT EXISTS `Evaluacions` (
  `id_evaluacion` int(11) NOT NULL AUTO_INCREMENT,
  `titulo` varchar(255) DEFAULT NULL,
  `nivel_de_riesgo` varchar(255) DEFAULT NULL,
  `recomendaciones` varchar(255) DEFAULT NULL,
  `id_usuario` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id_evaluacion`),
  KEY `id_usuario` (`id_usuario`),
  CONSTRAINT `evaluacions_ibfk_1` FOREIGN KEY (`id_usuario`) REFERENCES `Usuario_normals` (`id_usuario`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- La exportación de datos fue deseleccionada.

-- Volcando estructura para tabla proyecto_inf281.Institucion_Ayudas
CREATE TABLE IF NOT EXISTS `Institucion_Ayudas` (
  `id_inst_ayuda` int(11) NOT NULL AUTO_INCREMENT,
  `nombre_institucion` varchar(255) DEFAULT NULL,
  `telefono` varchar(255) DEFAULT NULL,
  `descripcion` varchar(255) DEFAULT NULL,
  `url` varchar(255) DEFAULT NULL,
  `id_administrador` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id_inst_ayuda`),
  KEY `id_administrador` (`id_administrador`),
  CONSTRAINT `Institucion_Ayudas_ibfk_1` FOREIGN KEY (`id_administrador`) REFERENCES `Administradors` (`id_administrador`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- La exportación de datos fue deseleccionada.

-- Volcando estructura para tabla proyecto_inf281.notificas
CREATE TABLE IF NOT EXISTS `Notificas` (
  `id_notifica` int(11) NOT NULL AUTO_INCREMENT,
  `id_contacto` int(11) DEFAULT NULL,
  `id_alerta` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id_notifica`),
  KEY `id_contacto` (`id_contacto`),
  KEY `id_alerta` (`id_alerta`),
  CONSTRAINT `notificas_ibfk_1` FOREIGN KEY (`id_contacto`) REFERENCES `Contactos` (`id_contacto`) ON DELETE CASCADE,
  CONSTRAINT `notificas_ibfk_2` FOREIGN KEY (`id_alerta`) REFERENCES `Alertas` (`id_alerta`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- La exportación de datos fue deseleccionada.

-- Volcando estructura para tabla proyecto_inf281.recibes
CREATE TABLE IF NOT EXISTS `Recibes` (
  `id_recibe` int(11) NOT NULL AUTO_INCREMENT,
  `id_inst_ayuda` int(11) DEFAULT NULL,
  `id_alerta` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id_recibe`),
  KEY `id_inst_ayuda` (`id_inst_ayuda`),
  KEY `id_alerta` (`id_alerta`),
  CONSTRAINT `recibes_ibfk_1` FOREIGN KEY (`id_inst_ayuda`) REFERENCES `Institucion_Ayudas` (`id_inst_ayuda`) ON DELETE CASCADE,
  CONSTRAINT `recibes_ibfk_2` FOREIGN KEY (`id_alerta`) REFERENCES `Alertas` (`id_alerta`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- La exportación de datos fue deseleccionada.

-- Volcando estructura para tabla proyecto_inf281.recursos
CREATE TABLE IF NOT EXISTS `Recursos` (
  `id_recurso` int(11) NOT NULL AUTO_INCREMENT,
  `titulo` varchar(255) DEFAULT NULL,
  `tipo` varchar(255) DEFAULT NULL,
  `descripcion` varchar(255) DEFAULT NULL,
  `url` varchar(255) DEFAULT NULL,
  `autor` varchar(255) DEFAULT NULL,
  `contenido` varchar(255) DEFAULT NULL,
  `visibilidad` tinyint(1) DEFAULT NULL,
  `id_administrador` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id_recurso`),
  KEY `id_administrador` (`id_administrador`),
  CONSTRAINT `recursos_ibfk_1` FOREIGN KEY (`id_administrador`) REFERENCES `Administradors` (`id_administrador`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- La exportación de datos fue deseleccionada.

-- Volcando estructura para tabla proyecto_inf281.sequelizemeta
CREATE TABLE IF NOT EXISTS `Sequelizemeta` (
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`name`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- La exportación de datos fue deseleccionada.

-- Volcando estructura para tabla proyecto_inf281.usuarios
CREATE TABLE IF NOT EXISTS `Usuarios` (
  `id_usuario` int(11) NOT NULL AUTO_INCREMENT,
  `ci` varchar(255) DEFAULT NULL,
  `nombre` varchar(255) DEFAULT NULL,
  `fecha_nac` datetime DEFAULT NULL,
  `genero` varchar(255) DEFAULT NULL,
  `direccion` varchar(255) DEFAULT NULL,
  `correo` varchar(255) DEFAULT NULL,
  `telefono` varchar(255) DEFAULT NULL,
  `nombre_usuario` varchar(255) NOT NULL,
  `contrasenia` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id_usuario`),
  UNIQUE KEY `nombre_usuario` (`nombre_usuario`),
  UNIQUE KEY `ci` (`ci`),
  UNIQUE KEY `correo` (`correo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- La exportación de datos fue deseleccionada.

-- Volcando estructura para tabla proyecto_inf281.usuario_normals
CREATE TABLE IF NOT EXISTS `Usuario_normals` (
  `id_usuario` int(11) NOT NULL,
  `estado` varchar(255) DEFAULT NULL,
  `fecha_registro` datetime DEFAULT NULL,
  `id_administrador` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  KEY `id_usuario` (`id_usuario`),
  KEY `id_administrador` (`id_administrador`),
  CONSTRAINT `usuario_normals_ibfk_1` FOREIGN KEY (`id_usuario`) REFERENCES `Usuarios` (`id_usuario`) ON DELETE CASCADE,
  CONSTRAINT `usuario_normals_ibfk_2` FOREIGN KEY (`id_administrador`) REFERENCES `Administradors` (`id_administrador`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- La exportación de datos fue deseleccionada.

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
