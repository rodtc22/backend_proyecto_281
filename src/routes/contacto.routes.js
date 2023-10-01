import { Router } from "express";
import contactoController from "../controllers/contacto.controller";

const Route = Router()

//declaramos los endpoints
Route.get('/contacto', contactoController.listar);
Route.post('/contacto', contactoController.agregar);
Route.get('/contacto/:id', contactoController.obtener); 
Route.put('/contacto/:id', contactoController.editar);
Route.delete('/contacto/:id', contactoController.borrar);

Route.get("/contacto/usuario/:id_usuario", contactoController.obtenerContactoUsuario);
Route.put("/contacto/:id_contacto/usuario/:id_usuario", contactoController.editarContactoUsuario);
Route.delete("/contacto/:id_contacto/usuario/:id_usuario", contactoController.borrarContactoUsuario);

export default Route;