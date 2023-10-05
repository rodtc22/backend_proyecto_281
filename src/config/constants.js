import dotenv from "dotenv";
dotenv.config();

module.exports = {
  CODIGO_HTTP: {
    OK: 200,
    CREATED: 201,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    INTERNAL_SERVER_ERROR: 500,
  },
  ERROR_MESSAGES: {
    INVALID_EMAIL: "Direccion de correo invalida",
    INVALID_PASSWORD: "Contrasenia invalida",
    USER_NOT_FOUND: "Usuario no encontrado",
  },
  MYSQL: {
    HOST: process.env.MYSQL_ADDON_HOST || "127.0.0.1",
    DB: process.env.MYSQL_ADDON_DB || "proyecto_inf281",
    USER: process.env.MYSQL_ADDON_USER || "root",
    PASSWORD: process.env.MYSQL_ADDON_PASSWORD || null,
    PORT: process.env.MYSQL_ADDON_PORT || "3000",
    URI: process.env.MYSQL_ADDON_URI || null,
    VERSION: process.env.MYSQL_ADDON_VERSION || "8.0",
  },
  SERVER: {
    HOST: process.env.SERVER_HOST || "127.0.0.1",
    PORT: process.env.PORT || "3000",
  },
};
