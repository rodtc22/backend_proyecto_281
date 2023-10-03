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

-- Volcando datos para la tabla proyecto_inf281.actividads: ~4 rows (aproximadamente)
DELETE FROM `actividads`;
INSERT INTO `actividads` (`id_actividad`, `nombre_actividad`, `tipo`, `descripcion`, `fecha_ini`, `fecha_fin`, `hora`, `id_administrador`, `createdAt`, `updatedAt`) VALUES
	(1, 'feria no a la violencia', 'feria', 'Dedicado para las personas que', '2023-08-31 20:00:00', '2023-08-31 20:00:00', '2023-10-03 00:23:00', 2, '2023-10-03 15:30:22', '2023-10-03 15:36:25'),
	(2, 'feria no a la violencia', 'feria', 'Dedicado para las personas que', '2023-10-31 20:00:00', '2023-10-31 20:00:00', '2023-10-03 12:30:00', 2, '2023-10-03 15:32:38', '2023-10-03 15:32:38'),
	(5, 'feria no a la violencia', 'feria', 'Dedicado para las personas que', '2023-10-31 20:00:00', '2023-10-31 20:00:00', '2023-10-03 12:30:00', 3, '2023-10-03 15:44:46', '2023-10-03 15:44:46'),
	(6, 'feria no a la violencia', 'feria', 'Dedicado para las personas que', '2023-10-31 20:00:00', '2023-10-31 20:00:00', '2023-10-03 12:30:00', 3, '2023-10-03 15:44:46', '2023-10-03 15:44:46'),
	(10, 'act1', 'feria', 'Dedicado para las personas que', '2023-10-31 20:00:00', '2023-10-31 20:00:00', '2023-10-03 12:30:00', 6, '2023-10-03 15:57:06', '2023-10-03 15:57:06'),
	(11, 'act2', 'feria', 'Dedicado para las personas que', '2023-10-31 20:00:00', '2023-10-31 20:00:00', '2023-10-03 12:30:00', 6, '2023-10-03 15:57:09', '2023-10-03 15:57:09'),
	(12, 'act3', 'feria', 'Dedicado para las personas que', '2023-10-31 20:00:00', '2023-10-31 20:00:00', '2023-10-03 12:30:00', 6, '2023-10-03 15:57:12', '2023-10-03 15:57:12');

-- Volcando datos para la tabla proyecto_inf281.administradors: ~4 rows (aproximadamente)
DELETE FROM `administradors`;
INSERT INTO `administradors` (`id_administrador`, `id_usuario`, `rol`, `createdAt`, `updatedAt`) VALUES
	(1, 13, 'administrador', '2023-10-03 14:12:15', '2023-10-03 14:16:13'),
	(2, 14, 'colaborador', '2023-10-03 14:13:06', '2023-10-03 14:13:06'),
	(3, 15, 'colaborador', '2023-10-03 14:13:21', '2023-10-03 14:13:21'),
	(4, 16, 'colaborador', '2023-10-03 14:14:07', '2023-10-03 14:17:00'),
	(6, 25, 'colaborador', '2023-10-03 15:56:48', '2023-10-03 15:56:48');

-- Volcando datos para la tabla proyecto_inf281.agregas: ~0 rows (aproximadamente)
DELETE FROM `agregas`;

-- Volcando datos para la tabla proyecto_inf281.alertas: ~0 rows (aproximadamente)
DELETE FROM `alertas`;

-- Volcando datos para la tabla proyecto_inf281.asistes: ~0 rows (aproximadamente)
DELETE FROM `asistes`;

-- Volcando datos para la tabla proyecto_inf281.comentarios: ~0 rows (aproximadamente)
DELETE FROM `comentarios`;

-- Volcando datos para la tabla proyecto_inf281.contactos: ~3 rows (aproximadamente)
DELETE FROM `contactos`;
INSERT INTO `contactos` (`id_contacto`, `nombre_contacto`, `fecha_ac`, `telefono`, `id_usuario`, `createdAt`, `updatedAt`) VALUES
	(1, 'a', NULL, '1', 12, '2023-10-03 12:35:44', '2023-10-03 12:35:44'),
	(2, 'b', NULL, 'b', 12, '2023-10-03 12:36:00', '2023-10-03 12:36:00'),
	(3, 'c', NULL, 'c', 12, '2023-10-03 12:36:04', '2023-10-03 12:36:04');

-- Volcando datos para la tabla proyecto_inf281.denuncias: ~0 rows (aproximadamente)
DELETE FROM `denuncias`;

-- Volcando datos para la tabla proyecto_inf281.evaluacions: ~0 rows (aproximadamente)
DELETE FROM `evaluacions`;

-- Volcando datos para la tabla proyecto_inf281.institucion_ayudas: ~0 rows (aproximadamente)
DELETE FROM `institucion_ayudas`;

-- Volcando datos para la tabla proyecto_inf281.notificas: ~0 rows (aproximadamente)
DELETE FROM `notificas`;

-- Volcando datos para la tabla proyecto_inf281.recibes: ~0 rows (aproximadamente)
DELETE FROM `recibes`;

-- Volcando datos para la tabla proyecto_inf281.recursos: ~0 rows (aproximadamente)
DELETE FROM `recursos`;

-- Volcando datos para la tabla proyecto_inf281.sequelizemeta: ~15 rows (aproximadamente)
DELETE FROM `sequelizemeta`;
INSERT INTO `sequelizemeta` (`name`) VALUES
	('20230914080033-create-usuario.js'),
	('20230914080037-create-administrador.js'),
	('20230914080041-create-usuario-normal.js'),
	('20230914080044-create-actividad.js'),
	('20230914080046-create-recurso.js'),
	('20230914080049-create-evaluacion.js'),
	('20230914080051-create-institucion-ayuda.js'),
	('20230914080053-create-denuncia.js'),
	('20230914080055-create-contacto.js'),
	('20230914080059-create-alerta.js'),
	('20230914080102-create-agrega.js'),
	('20230914080104-create-asiste.js'),
	('20230914080107-create-recibe.js'),
	('20230914080110-create-notifica.js'),
	('20230914082551-create-comentario.js');

-- Volcando datos para la tabla proyecto_inf281.usuarios: ~16 rows (aproximadamente)
DELETE FROM `usuarios`;
INSERT INTO `usuarios` (`id_usuario`, `ci`, `nombre`, `fecha_nac`, `genero`, `direccion`, `correo`, `telefono`, `nombre_usuario`, `contrasenia`, `createdAt`, `updatedAt`) VALUES
	(1, '1', 'rod', '1978-11-16 20:00:00', 'masculino', 'murillo', 'rod@gmail.com', '1', 'rod', '$2b$10$8l1jk/0jT0ivIfyk2ycAXeg2dbbSRlOiA7aEFjLAFOwfqBSDBFm56', '2023-10-03 12:31:17', '2023-10-03 12:31:17'),
	(2, 'cris', 'cris', '1978-11-16 20:00:00', 'masculino', 'murillo', 'cris@gmail.com', '1', 'cris', '$2b$10$Gp4o0C5l2AE2udqU8bWJzu3I6HeODKBPqnQpFAO574MFZohBIfyQi', '2023-10-03 12:32:21', '2023-10-03 12:32:21'),
	(3, 'jorge', 'jorge', '1978-11-16 20:00:00', 'masculino', 'murillo', 'jorge@gmail.com', '1', 'jorge', '$2b$10$IVTaeWGmXFi3Q3PSnue/Cu1pIK.hVWevG8xbFo0xFo9RB8GwQMp8O', '2023-10-03 12:32:35', '2023-10-03 12:32:35'),
	(4, 'irene', 'irene', '1978-11-16 20:00:00', 'femenino', 'murillo', 'irene@gmail.com', '1', 'irene', '$2b$10$b/4oI1UXfi8v/J7DIY.g8uWEgLpo7awPv2Lsod9SZslFE4G6LKSBW', '2023-10-03 12:32:42', '2023-10-03 12:32:42'),
	(5, 'lourdes', 'lourdes', '1978-11-16 20:00:00', 'femenino', 'murillo', 'lourdes@gmail.com', '1', 'lourdes', '$2b$10$32N4CApM5AaO6tDKCnmSReAJC4q2ZH3O8dhcOT9fuRyx/GsbSlnVS', '2023-10-03 12:32:54', '2023-10-03 12:32:54'),
	(6, 'gonzalo', 'gonzalo', '1978-11-16 20:00:00', 'masculino', 'murillo', 'gonzalo@gmail.com', '1', 'gonzalo', '$2b$10$wobK7W8.0NIZrteicJ28YOVhuNAIvYPdGIFW6UiUvvUmefPTiDNAO', '2023-10-03 12:33:02', '2023-10-03 12:33:02'),
	(7, 'lady', 'lady', '1978-11-16 20:00:00', 'femenino', 'murillo', 'lady@gmail.com', '1', 'lady', '$2b$10$x6K/YL3WPt8YzP3Od.CYMegbOK1klzJMjOgChjs8UOla/l.MUz0dG', '2023-10-03 12:33:09', '2023-10-03 12:33:09'),
	(8, 'aaa', 'aaa', '1978-11-16 20:00:00', 'masculino', 'murillo', 'aaa@gmail.com', '1', 'aaa', '$2b$10$/8O6RmOrD4JVlEJ5chaXdeH0m43JVL3AGgji15rEP8urbG78JpMya', '2023-10-03 12:34:11', '2023-10-03 12:34:11'),
	(9, 'bbb', 'bbb', '1978-11-16 20:00:00', 'masculino', 'murillo', 'bbb@gmail.com', '1', 'bbb', '$2b$10$Xlp/B0OyRUMssMdWzk0F1.IEFixJ4FU3vctjNBBHu.PLn37YwzQX.', '2023-10-03 12:34:16', '2023-10-03 12:34:16'),
	(10, 'ccc', 'ccc', '1978-11-16 20:00:00', 'masculino', 'murillo', 'ccc@gmail.com', '1', 'ccc', '$2b$10$zJkyovA2OPTBeMwwrmz95uNsS8CPrWg/o3e1YAJZ8wjHjAbhbSRce', '2023-10-03 12:34:31', '2023-10-03 12:34:31'),
	(11, 'xxx', 'xxx', '1978-11-16 20:00:00', 'masculino', 'murillo', 'xxx@gmail.com', '1', 'xxx', '$2b$10$GdYq0k/pIvqZ698qEYRJKuxPBkCpmfvbOpUSE/pVMFkoq.Od1JuN2', '2023-10-03 12:34:37', '2023-10-03 12:34:37'),
	(12, 'yyy', 'yyy', '1978-11-16 20:00:00', 'masculino', 'murillo', 'yyy@gmail.com', '1', 'yyy', '$2b$10$wFpcalxaTg/Lc./.52OTvepp6/9stRuRN2LIoPUlEqHRq0dhtHD0.', '2023-10-03 12:34:44', '2023-10-03 12:34:44'),
	(13, '1111', 'rodrigo', '1999-09-05 20:00:00', 'Masculino', 'Los andes', 'rodrigo@gmail.com', '1111', 'rodrigo', '$2b$10$KzFGUHCsPsGJsm7ZALNXzO8k.qNExzJ2FIM9wLzFkKE.oxGnyi66G', '2023-10-03 14:12:15', '2023-10-03 14:16:13'),
	(14, '2222', 'eleazar', '2000-09-05 20:00:00', 'eleazar', 'los andes', 'eleazar@gmail.com', '2222', 'eleazar', '$2b$10$oQP2M/9Ifmgqn0zGTja5fuG/Fwl8hMVeo3IISyxh0CCuoN0m1P99m', '2023-10-03 14:13:06', '2023-10-03 14:13:06'),
	(15, '3333', 'noemi', '2000-09-05 20:00:00', 'noemi', 'los andes', 'noemi@gmail.com', '3333', 'noemi', '$2b$10$teb6NSq8H.cxW.4Iwvgf8.BlJcHkZOE34KxJe0jbuuEz4MBpRSAoy', '2023-10-03 14:13:21', '2023-10-03 14:13:21'),
	(16, '4444', 'gustavo', '1999-09-05 20:00:00', 'Masculino', 'Los andes', 'gustavo@gmail.com', '4444', 'gustavo', '$2b$10$F0iY/Z8xg5ER.RVgtb41Vu0ZPfd5rPGF7.M1Ba5QDQpXDYwdqA0Sy', '2023-10-03 14:14:07', '2023-10-03 14:17:00'),
	(25, '5555', 'zzz', '2000-09-05 20:00:00', 'zzz', 'los andes', 'zzz@gmail.com', '5555', 'zzz', '$2b$10$HYhro.rP4SLzhuJlOsCdE.3KAJ./tTBkJ1fBKGxkXk9yRRJLttApq', '2023-10-03 15:56:48', '2023-10-03 15:56:48');

-- Volcando datos para la tabla proyecto_inf281.usuario_normals: ~12 rows (aproximadamente)
DELETE FROM `usuario_normals`;
INSERT INTO `usuario_normals` (`id_usuario`, `estado`, `fecha_registro`, `id_administrador`, `createdAt`, `updatedAt`) VALUES
	(1, 'activo', '2023-10-03 12:31:17', NULL, '2023-10-03 12:31:17', '2023-10-03 12:31:17'),
	(2, 'activo', '2023-10-03 12:32:21', NULL, '2023-10-03 12:32:21', '2023-10-03 12:32:21'),
	(3, 'activo', '2023-10-03 12:32:35', NULL, '2023-10-03 12:32:35', '2023-10-03 12:32:35'),
	(4, 'activo', '2023-10-03 12:32:42', NULL, '2023-10-03 12:32:42', '2023-10-03 12:32:42'),
	(5, 'activo', '2023-10-03 12:32:54', NULL, '2023-10-03 12:32:54', '2023-10-03 12:32:54'),
	(6, 'activo', '2023-10-03 12:33:02', NULL, '2023-10-03 12:33:02', '2023-10-03 12:33:02'),
	(7, 'activo', '2023-10-03 12:33:09', NULL, '2023-10-03 12:33:09', '2023-10-03 12:33:09'),
	(8, 'activo', '2023-10-03 12:34:11', NULL, '2023-10-03 12:34:11', '2023-10-03 12:34:11'),
	(9, 'activo', '2023-10-03 12:34:16', NULL, '2023-10-03 12:34:16', '2023-10-03 12:34:16'),
	(10, 'activo', '2023-10-03 12:34:31', NULL, '2023-10-03 12:34:31', '2023-10-03 12:34:31'),
	(11, 'activo', '2023-10-03 12:34:37', NULL, '2023-10-03 12:34:37', '2023-10-03 12:34:37'),
	(12, 'activo', '2023-10-03 12:34:44', NULL, '2023-10-03 12:34:44', '2023-10-03 12:34:44');

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
