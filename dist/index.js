"use strict";

var _express = _interopRequireDefault(require("express"));
var _dotenv = _interopRequireDefault(require("dotenv"));
var _authRoutes = _interopRequireDefault(require("../src/routes/auth.routes.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// IMPORTANDO MODULOS

// dotenv.config();
require('dotenv').config();
const app = (0, _express.default)();
const PORT = process.env.PORT || 3000;

// Habilitamos las rutas
app.use("/api", _authRoutes.default);
app.listen(PORT, () => {
  console.log(`Servidor iniciado en el puerto http://127.0.0.1:${PORT}`);
});
