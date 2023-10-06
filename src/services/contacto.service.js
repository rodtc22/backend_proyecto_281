import {Agrega, Contacto, Usuario_normal} from "../database/models"
import agregaService from "./agrega.service";
export default {
    listarContacto: async () => {
        return await Contacto.findAll({
            include: [
                {model: Usuario_normal}
            ]
        });
    },
    agregarContacto: async (nuevoContacto) => {
        const contacto = await Contacto.create(nuevoContacto);
        // usamos el modelo de sequelize
        // await Agrega.create(contacto.dataValues);
        
        // usamos el servicio
        //await agregaService.agregarAgrega(contacto.dataValues);
        return contacto;
    },
    obtenerContacto: async (id) => {
        return await Contacto.findByPk(id, {
            include: [
                {model: Usuario_normal}
            ]
        });
    },
    editarContacto: async (id, editContacto) => {
        const contacto = await Contacto.findByPk(id);
        if (!contacto) return false;
        await Contacto.update(editContacto,{
            where: {
                id_contacto: id
            },
        });
        return true;
    },
    borrarContacto: async (id) => {
        const contacto = await Contacto.findByPk(id);
        if (!contacto) return false;
        await Contacto.destroy({
            where: {
                id_contacto: id
            },
        });
        return true;
    },

    listarContactoUsuario: async (id) => {
        const datos = await Contacto.findAll({
            where: {
                id_usuario: id
            },
        });
        return datos;
    },
    
    borrarContactoUsuario: async (id_u, id_c) => {
        const datos = await Contacto.destroy({
            where: {
                id_usuario: id_u,
                id_contacto: id_c
            },
        });
        return datos > 0;
    },
    borrarTodoContactoUsuario: async (id_u) => {
        const datos = await Contacto.destroy({
            where: {
                id_usuario: id_u,
            },
        });
        return datos > 0;
    },
    editarContactoUsuario: async (id_u, id_c, editContacto) => {
        const contacto = await Contacto.update(editContacto, {
            where: {
                id_usuario: id_u,
                id_contacto: id_c
            }
        });
        return true;
    }
};