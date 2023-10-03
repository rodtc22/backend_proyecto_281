// IMPORTANDO MODULOS
import express from "express";
import cors from "cors";

import authRoute from "../src/routes/auth.routes.js";
import usuarioRoute from "../src/routes/usuario.routes.js";
import administradorRoute from "../src/routes/administrador.routes.js";
import usuario_normalRoute from "../src/routes/usuario_normal.routes.js";
import actividadRoute from "../src/routes/actividad.routes.js";
import recursoRoute from "../src/routes/recurso.routes.js";
import evaluacionRoute from "../src/routes/evaluacion.routes.js";
import institucion_ayudaRoute from "../src/routes/institucion_ayuda.routes.js";
import denunciaRoute from "../src/routes/denuncia.routes.js";
import contactoRoute from "../src/routes/contacto.routes.js";
import comentarioRoute from "../src/routes/comentario.routes.js";
import alertaRoute from "../src/routes/alerta.routes.js";
import constants from "../src/config/constants.js"

const app = express();

const PORT_SERVER = constants.SERVER.PORT;
const HOST_SERVER = constants.SERVER.HOST;

app.use(express.json()); 
app.use(cors());

// Habilitamos las rutas
app.use("/api", authRoute); 
app.use("/api", usuarioRoute);
app.use("/api", administradorRoute);
app.use("/api", usuario_normalRoute);
app.use("/api", actividadRoute);
app.use("/api", recursoRoute);
app.use("/api", evaluacionRoute);
app.use("/api", institucion_ayudaRoute);
app.use("/api", denunciaRoute);
app.use("/api", contactoRoute);
app.use("/api", comentarioRoute);
app.use("/api", alertaRoute);

app.listen(PORT_SERVER, () => {
    console.log(`Servidor iniciado en el puerto http://${HOST_SERVER}:${PORT_SERVER}`);
});