
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
  PRIMARY KEY (`id_usuario`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE IF NOT EXISTS `Administradors` (
  `id_administrador` int(11) NOT NULL AUTO_INCREMENT,
  `id_usuario` int(11) DEFAULT NULL,
  `rol` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id_administrador`),
  KEY `id_usuario` (`id_usuario`),
  CONSTRAINT `administradors_ibfk_1` FOREIGN KEY (`id_usuario`) REFERENCES `Usuarios` (`id_usuario`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;


CREATE TABLE IF NOT EXISTS `Usuario_normals` (
  `id_usuario` int(11) NOT NULL,
  `estado` varchar(255) DEFAULT NULL,
  `fecha_registro` datetime DEFAULT NULL,
  `id_administrador` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  KEY `id_usuario` (`id_usuario`),
  KEY `id_administrador` (`id_administrador`),
  CONSTRAINT `usuario_normals_ibfk_1` FOREIGN KEY (`id_usuario`) REFERENCES `Usuarios` (`id_usuario`),
  CONSTRAINT `usuario_normals_ibfk_2` FOREIGN KEY (`id_administrador`) REFERENCES `Administradors` (`id_administrador`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;




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
  CONSTRAINT `actividads_ibfk_1` FOREIGN KEY (`id_administrador`) REFERENCES `Administradors` (`id_administrador`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

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
  CONSTRAINT `contactos_ibfk_1` FOREIGN KEY (`id_usuario`) REFERENCES `Usuarios` (`id_usuario`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;


CREATE TABLE IF NOT EXISTS `Agregas` (
  `id_agrega` int(11) NOT NULL AUTO_INCREMENT,
  `id_usuario` int(11) DEFAULT NULL,
  `id_contacto` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id_agrega`),
  KEY `id_usuario` (`id_usuario`),
  KEY `id_contacto` (`id_contacto`),
  CONSTRAINT `agregas_ibfk_1` FOREIGN KEY (`id_usuario`) REFERENCES `Usuarios` (`id_usuario`),
  CONSTRAINT `agregas_ibfk_2` FOREIGN KEY (`id_contacto`) REFERENCES `Contactos` (`id_contacto`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

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
  CONSTRAINT `alertas_ibfk_1` FOREIGN KEY (`id_usuario`) REFERENCES `Usuarios` (`id_usuario`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;


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
  CONSTRAINT `denuncias_ibfk_1` FOREIGN KEY (`id_usuario`) REFERENCES `Usuarios` (`id_usuario`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;


CREATE TABLE IF NOT EXISTS `Asistes` (
  `id_asiste` int(11) NOT NULL AUTO_INCREMENT,
  `id_administrador` int(11) DEFAULT NULL,
  `id_denuncia` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id_asiste`),
  KEY `id_administrador` (`id_administrador`),
  KEY `id_denuncia` (`id_denuncia`),
  CONSTRAINT `asistes_ibfk_1` FOREIGN KEY (`id_administrador`) REFERENCES `Administradors` (`id_administrador`),
  CONSTRAINT `asistes_ibfk_2` FOREIGN KEY (`id_denuncia`) REFERENCES `Denuncias` (`id_denuncia`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

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
  CONSTRAINT `recursos_ibfk_1` FOREIGN KEY (`id_administrador`) REFERENCES `Administradors` (`id_administrador`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

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
  CONSTRAINT `comentarios_ibfk_1` FOREIGN KEY (`id_administrador`) REFERENCES `Administradors` (`id_administrador`),
  CONSTRAINT `comentarios_ibfk_2` FOREIGN KEY (`id_recurso`) REFERENCES `Recursos` (`id_recurso`),
  CONSTRAINT `comentarios_ibfk_3` FOREIGN KEY (`id_usuario`) REFERENCES `Usuarios` (`id_usuario`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;



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
  CONSTRAINT `evaluacions_ibfk_1` FOREIGN KEY (`id_usuario`) REFERENCES `Usuarios` (`id_usuario`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE IF NOT EXISTS `Institucion_ayudas` (
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
  CONSTRAINT `institucion_ayudas_ibfk_1` FOREIGN KEY (`id_administrador`) REFERENCES `Administradors` (`id_administrador`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;


CREATE TABLE IF NOT EXISTS `Notificas` (
  `id_notifica` int(11) NOT NULL AUTO_INCREMENT,
  `id_contacto` int(11) DEFAULT NULL,
  `id_alerta` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id_notifica`),
  KEY `id_contacto` (`id_contacto`),
  KEY `id_alerta` (`id_alerta`),
  CONSTRAINT `notificas_ibfk_1` FOREIGN KEY (`id_contacto`) REFERENCES `Contactos` (`id_contacto`),
  CONSTRAINT `notificas_ibfk_2` FOREIGN KEY (`id_alerta`) REFERENCES `Alertas` (`id_alerta`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE IF NOT EXISTS `Recibes` (
  `id_recibe` int(11) NOT NULL AUTO_INCREMENT,
  `id_inst_ayuda` int(11) DEFAULT NULL,
  `id_alerta` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id_recibe`),
  KEY `id_inst_ayuda` (`id_inst_ayuda`),
  KEY `id_alerta` (`id_alerta`),
  CONSTRAINT `recibes_ibfk_1` FOREIGN KEY (`id_inst_ayuda`) REFERENCES `Institucion_ayudas` (`id_inst_ayuda`),
  CONSTRAINT `recibes_ibfk_2` FOREIGN KEY (`id_alerta`) REFERENCES `Alertas` (`id_alerta`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE IF NOT EXISTS `sequelizemeta` (
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`name`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;


INSERT INTO `Usuarios` (`id_usuario`, `ci`, `nombre`, `fecha_nac`, `genero`, `direccion`, `correo`, `telefono`, `nombre_usuario`, `contrasenia`, `createdAt`, `updatedAt`) VALUES
	(1, '111', 'rodrigo', '1999-09-06 07:10:06', 'masculino', 'av. victor', 'rodritc@gmail.com', '111111', 'rod', 'rod1234', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
	(2, '222', 'cris', '1993-03-24 00:00:00', 'masculino', 'av. prado', 'cris@gmail.com', '222222', 'cris', 'cris1234', '2023-09-14 07:12:27', '2023-09-14 07:12:29'),
	(3, '333', 'Lourdes', '1983-04-14 00:00:00', 'femenino', 'obelisco', 'luly@gmail.com', '333333', 'luly', 'luly1234', '2023-09-14 07:13:21', '2023-09-14 07:13:23'),
	(4, '444', 'jorge', '2022-11-11 04:00:00', 'masculino', 'av. victor gutierrez', 'jorge@gmail.com', '444444', 'jorge', 'jorge1234', '2023-09-20 15:06:01', '2023-09-20 16:02:47'),
	(5, '777', 'choco', '2007-11-30 00:00:00', 'masculino', 'av. victor gutierrez', 'choco@hotmail.com', '777777', 'choco', 'choco1234', '2023-09-20 15:09:23', '2023-09-20 16:01:08'),
	(7, '555', 'irene', '1968-10-20 00:00:00', 'femenino', 'av. victor gutierrez', 'irene@hotmail.com', '444444', 'irene', 'irene1234', '2023-09-20 15:12:06', '2023-09-20 16:03:48'),
	(13, '666', 'gonzalo', '1982-11-16 20:00:00', 'masculino', 'cruce villa adela', 'gon@hotmail.com', '666666', 'gon', 'gon1234', '2023-09-21 04:43:19', '2023-09-21 04:43:19'),
	(14, 'xxx', 'xxx', '1982-11-16 20:00:00', 'masculino', 'cruce villa adela', 'xxx@hotmail.com', '666666', 'xxx', 'xxx1234', '2023-09-21 05:51:09', '2023-09-21 05:51:09'),
	(15, 'xxx', 'xxx', '1982-11-16 20:00:00', 'masculino', 'cruce villa adela', 'xxx@hotmail.com', '666666', 'xxx', 'xxx1234', '2023-09-21 07:06:18', '2023-09-21 07:06:18'),
	(16, '0000', 'jorge', '2000-11-16 20:00:00', 'masculino', 'cruce villa adela', 'xxx@hotmail.com', '666666', 'jorge', 'jorge1234', '2023-09-21 09:03:52', '2023-09-21 09:03:52'),
	(18, 'ert', 'ERT ERT ERT', '2023-09-14 20:00:00', 'MASCULINO', 'ERT', 'ert@gmail.com', 'ert', 'ert', 'ert', '2023-09-28 11:00:58', '2023-09-28 11:00:58'),
	(19, 'pruebaci', 'PRUEBANOMBRE PRUEBAPARTERNO PRUEBAMATERNO', '2023-09-14 20:00:00', 'OTRO', 'PRUEBADIRECCION', 'pruebaemail@gmail.com', 'pruebatelefono', 'pruebanombreusuario', 'prueba1234', '2023-09-28 11:06:17', '2023-09-28 11:06:17'),
	(20, 'xcvb', 'XCVB XCVB XCVB', '2023-09-08 20:00:00', 'MASCULINO', 'XCVB', 'xcvb@asdf', 'xcvb', 'xcvb', 'xcvb', '2023-09-28 12:39:38', '2023-09-28 12:39:38');

INSERT INTO `Administradors` (`id_administrador`, `id_usuario`, `rol`, `createdAt`, `updatedAt`) VALUES
	(1, 1, 'administrador', '2023-09-21 05:56:32', '2023-09-21 05:56:32'),
	(2, 2, 'colaborador', '2023-09-21 06:04:27', '2023-09-21 06:04:27'),
	(5, 14, 'administrador', '2023-09-21 06:15:17', '2023-09-21 06:15:17');

INSERT INTO `Usuario_normals` (`id_usuario`, `estado`, `fecha_registro`, `id_administrador`, `createdAt`, `updatedAt`) VALUES
	(13, 'desconectado', '2023-09-21 04:43:50', 1, '2023-09-21 04:43:50', '2023-09-21 04:44:22'),
	(13, 'desconectado', '2023-09-21 04:43:50', 1, '2023-09-21 04:43:50', '2023-09-21 04:44:22');

INSERT INTO `Actividads` (`id_actividad`, `nombre_actividad`, `tipo`, `descripcion`, `fecha_ini`, `fecha_fin`, `hora`, `id_administrador`, `createdAt`, `updatedAt`) VALUES
	(4, 'no violencia feria', 'festival', 'organizado por la policia', '2023-09-19 20:00:00', '2023-09-19 20:00:00', '2023-09-19 20:00:00', 1, '2023-09-21 05:36:39', '2023-09-21 05:45:06'),
	(12, 'no violencia feriao', 'festival', 'organizado por la policia', '2023-09-19 20:00:00', '2023-09-19 20:00:00', '2023-09-19 20:00:00', 2, '2023-09-21 05:54:44', '2023-09-21 05:54:44'),
	(13, 'no violencia feriao', 'festival', 'organizado por la policia', '2023-09-19 20:00:00', '2023-09-19 20:00:00', '2023-09-19 20:00:00', 2, '2023-09-21 05:55:33', '2023-09-21 05:55:33');


INSERT INTO `Recursos` (`id_recurso`, `titulo`, `tipo`, `descripcion`, `url`, `autor`, `contenido`, `visibilidad`, `id_administrador`, `createdAt`, `updatedAt`) VALUES
	(2, 'recurso1', 'tipo del recurso', 'recurso contra la violencia', 'https://www.google.com', 'rodrix', 'veremos que ponemos', 1, 2, '2023-09-21 06:05:43', '2023-09-21 06:05:43');

INSERT INTO `Comentarios` (`id_comentario`, `fecha`, `descripcion`, `estado`, `id_administrador`, `id_recurso`, `id_usuario`, `createdAt`, `updatedAt`) VALUES
	(2, '2023-09-21 08:19:40', 'hola como estan soy un comentario xd', 0, 2, 2, 2, '2023-09-21 08:19:40', '2023-09-21 08:19:40');

INSERT INTO `Denuncias` (`id_denuncia`, `nombre_victima`, `nombre_agresor`, `tipo_violencia`, `tipo_denuncia`, `fecha`, `descripcion`, `pruebas`, `ubicacion`, `estado`, `id_usuario`, `createdAt`, `updatedAt`) VALUES
	(3, 'homero', 'marge', 'fisica', 'grave', '2023-09-01 20:00:00', 'le esta pegando bien feo :\'v', 'talvez fotos', 'direccion de google maps', 1, 13, '2023-09-21 07:07:01', '2023-09-21 07:07:01');

INSERT INTO `Institucion_ayudas` (`id_inst_ayuda`, `nombre_institucion`, `telefono`, `descripcion`, `url`, `id_administrador`, `createdAt`, `updatedAt`) VALUES
	(4, 'policia', '110', 'centro policial del prado', 'https://www.google.com', 5, '2023-09-21 06:19:24', '2023-09-21 06:19:24');

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

