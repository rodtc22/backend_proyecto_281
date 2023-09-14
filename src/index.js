

// IMPORTANDO MODULOS
import express from "express";
import dotenv from "dotenv";
import authRoute from "../src/routes/auth.routes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Habilitamos las rutas
app.use("/api", authRoute); 

app.listen(PORT, () => {
    console.log(`Servidor iniciado en el puerto http://127.0.0.1:${PORT}`);
});