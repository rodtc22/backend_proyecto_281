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

### 7. En phpmyadmin creo una base de datos con el nombre `proyecto_inf281`, modifico el archivo `config/config.json`

### 8. Llega el momento de hacer los modelos y migraciones
1. El modelo va a estar en singular: user
2. La migracion va a estar en plural y minuscula : users

Migraciones con sequelize
```bash
npx sequelize-cli model:generate --name User --attributes email:string,password:string,status:integer
```

Lleva las migraciones a la Base de Datos
```bash
npx sequelize-cli db:migrate
```










<!-- 5. Instalamos babel/core (para poder usar la sintaxis import express)
```
npm i -D @babel/core @babel/cli @babel/plugin-transform-runtime @babel/preset-env
npm u  @babel/core @babel/cli @babel/plugin-transform-runtime @babel/preset-env
```
5.1. Creamos el archivo `.babelrc` con el contenido
```json
{
    "presets": ["@babel/preset-env"],
    "plugins": ["@babel/plugin-transform-runtime"]
}
```

5.2. Modificamos el archivo package.json con la linea
`"dev": "nodemon --exec babel src/index.js",`
para poder usar el comando.
```npm run dev``` -->