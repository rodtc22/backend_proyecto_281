// rutas para poder validar a los usuarios
import { Router } from "express";
import authController from "../controllers/auth.controller.js";

const Route = Router()

//Declaramos los endpoints
Route.post('/auth/login', authController.login);
Route.post('/auth/registro', authController.registro);
Route.post('/auth/logout', authController.logout);

export default Route;