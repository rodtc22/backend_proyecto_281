import {MYSQL} from "./constants";

const configuracion = {
  development: {
    host: "127.0.0.1",
    username: "root",
    database: "proyecto_inf281",
    password: null,
    dialect: "mysql",
    timezone: "-04:00",
  },
  test: {
    host: MYSQL.HOST,
    username: MYSQL.USER,
    database: MYSQL.DB,
    password: MYSQL.PASSWORD,
    dialect: "mysql",
    timezone: "-04:00",
  },
  production: {
    host: MYSQL.HOST,
    username: MYSQL.USER,
    database: MYSQL.DB,
    password: MYSQL.PASSWORD,
    dialect: "mysql",
    timezone: "-04:00",
  },
};

export default configuracion;
