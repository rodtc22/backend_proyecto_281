### 1. Iniciamos el proyecto (creamos un package.json para el proyecto y tener sus dependencias)
```bash
npm init
```

### 2. Instalamos express (framework)
```bash
npm install express
```

### 3. Instalamos nodemon (para no recargar cada momento el servidor)
```bash
npm install nodemon
```

### 4. Instalamos dotevn (para disponer de variables de entorno)
```
npm install dotenv --save
```

4.1. Creamos el archivo `.env` para tener variables de entorno

### 5. Para usar la sintaxis `import` debemos poner en package.json, lo siguiente:
```
"type": "module",
```

### 6. Instalamos sequelize para poder maneja la base de datos
```
npm install -g sequelize sequelize-cli
```
Vamos a crear un archivo nuevo en la raiz del proyecto`.sequelizerc`
```
const path = require('path');

module.exports = {
  'config': path.resolve('src/config', 'config.json'),
  'models-path': path.resolve('src/database/models'),
  'seeders-path': path.resolve('src/database/seeders'),
  'migrations-path': path.resolve('src/database/migrations')
};
```
Ahora necesitamos crear algunas carpetas asi que usaremos
```
sequelize init
```

### 7. En phpmyadmin creo una base de datos con el nombre `proyecto_inf281`, modifico el archivo `config/config.json`, ademas instalo un paquete para que podemos interactuar con mysql
```
npm install -g mysql2
```

### 8. Llega el momento de hacer los modelos y migraciones
1. El modelo va a estar en singular: user
2. La migracion va a estar en plural y minuscula : users

Migraciones con sequelize
```bash
sequelize model:generate --name Usuario --attributes ci:string,nombre:string,fecha_nac:date,genero:string,direccion:string,correo:string,telefono:string,nom_usuario:string,contrasenia:string
```

Lleva las migraciones a la Base de Datos, aunque es posible que nos genere un error, por eso hay que seguir con el paso 9 
```bash
sequelize db:migrate

sequelize db:migrate:undo:all
```

### 9. Instalamos babel/core (para poder usar la sintaxis import express)
```
npm install -D @babel/core @babel/preset-env @babel/cli @babel/node
npm uninstall  @babel/core @babel/preset-env @babel/cli @babel/node
```
Creamos el archivo `.babelrc` con la raiz del proyecto
```json
{
  "presets": [
    [
      "@babel/preset-env",
      {
        "targets": {
          "node": true
        }
      }
    ]
  ]
}
```

Modificamos el archivo package.json con la linea
`"dev" : "nodemon --exec babel-node src/index.js"`


> es posible que despues de clonar de git, salga error por los paquetes, asi que recomiendo poner
  ```
  npm install  mysql2
  npm install  sequelize sequelize-cli
  ```

### 10. Para poder conectar con las bases de datos de manera cool, hacemos lo siguiente
1. Creamos un archivo de configuracion llamada `sequelizeConfig.js` para sustituir el `config.json`, en la carpeta `./src/config`, gracias a eso podemos poner distintos parametros para manejar BD's en modo desarrollo o produccion

2. Modificamos el archivo `./src/database/models/index.js` indiciando que tome mi nueva configuracion
```js
const env = process.env.NODE_ENV || "development"; // le generamos su variable de entorno llamada NODE_ENV
```
```js
// tomamos la nueva configuracion, descartando la anterior
import configuracion from "../../config/sequelizeConfig";
const config = configuracion[env]; // usamos el environment
```

3. En la carpeta `./src/utils` creo el archivo `constants.js` para definir valores constantes para todo mi proyecto, ahi voy a definir si va a tomar los valores de mis variables de entorno, pero si no existen, que utilice unas que tengo por defecto.

> Notemos que ahi tenemos que importar dotenv, para que rescate en ese archivo las variables de entorno

4. En el archivo `.env` agregamos las variables (Hemos alterado los valores para que no se tomen los originales)
```python
SERVER_HOST=127.0.0.1
SERVER_PORT=3000

JWT_TOKEN_RODRIX=eeeeeo

MYSQL_ADDON_DB=b3hlwi8pnw7fk0tig9t
MYSQL_ADDON_HOST=b3hlwieifijqd9te-mysql.services.clever-cloud.com
MYSQL_ADDON_PASSWORD=BdShbTV123sdfg32jFx
MYSQL_ADDON_PORT=3308
MYSQL_ADDON_URI=mysql://ucookqg5nboew1se:BdShbTV47qdSi0few5ljieivw7fk0tig9te-mysql.services.clever-cloud.com:3308/b3hbdfieivw7fk0ti9te
MYSQL_ADDON_USER=ucookqg5nbf928uyhrs
MYSQL_ADDON_VERSION=8.0

NODE_ENV=development  #esto se cambia para decir que vamos a conectar a la BD de development o production o test, solo es cambiar esto
```
Desde este punto agrego .env al archivo .gitignore por seguridad

