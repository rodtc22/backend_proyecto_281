// IMPORTANDO MODULOS
import express from "express";
import dotenv from "dotenv";

import authRoute from "../src/routes/auth.routes.js";
import usuarioRoute from "../src/routes/usuario.routes.js";

dotenv.config();
const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json()); 

// Habilitamos las rutas
// app.use("/api", authRoute); 
app.use("/api", usuarioRoute);

app.listen(PORT, () => {
    console.log(`Servidor iniciado en el puerto http://127.0.0.1:${PORT}`);
});