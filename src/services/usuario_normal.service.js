import {Usuario, Usuario_normal} from "../database/models"
import usuarioService from "./usuario.service";

export default {
    listarUsuario_normal: async () => {
        return await Usuario_normal.findAll({
            include: [
                {model : Usuario}
            ]
        });
    },
    agregarUsuario_normal: async (nuevoUsuario_normal) => {
        const usuario = {
            "ci" : nuevoUsuario_normal.ci,
            "nombre" : nuevoUsuario_normal.nombre,
            "fecha_nac" : nuevoUsuario_normal.fecha_nac,
            "direccion" : nuevoUsuario_normal.direccion,
            "genero" : nuevoUsuario_normal.genero,
            "correo" : nuevoUsuario_normal.correo,
            "telefono" : nuevoUsuario_normal.telefono,
            "nombre_usuario" : nuevoUsuario_normal.nombre_usuario,
            "contrasenia" : nuevoUsuario_normal.contrasenia,
        }
        
        const nusuario = await usuarioService.agregarUsuario(usuario);
        if (nusuario == null) return false;

        const usuario_normal = {
            id_usuario: nusuario.id_usuario,
            estado: "activo",
            fecha_registro: new Date().toISOString(),
            id_administrador: nuevoUsuario_normal.id_administrador,
        };
        return await Usuario_normal.create(usuario_normal);
    },
    obtenerUsuario_normal: async (id) => {
        return await Usuario_normal.findByPk(id, {
            include: [
                {model: Usuario}
            ]
        });
    },
    editarUsuario_normal: async (id, editUsuario_normal) => {
        const usuario_normal = await Usuario_normal.findByPk(id);
        if (!usuario_normal) return false;
        await usuarioService.editarUsuario(id, editUsuario_normal);
        return true;
    },
    borrarUsuario_normal: async (id) => {
        console.log(id);
        let usuario_normal = await Usuario_normal.findByPk(id);
        if (!usuario_normal) return false;
        usuario_normal = usuario_normal.dataValues;
        // console.log(usuario_normal);
        await usuarioService.borrarUsuario(id);
        const datos = await Usuario_normal.destroy({
            where: {
                id_usuario: id
            },
        });
        console.log("datos",datos);
        return true;
    },
};