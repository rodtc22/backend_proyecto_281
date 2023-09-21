import {Contacto} from "../database/models"
import contactoService from "./contacto.service";

export default {
    listarContacto: async () => {
        return await Contacto.findAll({
            include: [
            ]
        });
    },
    agregarContacto: async (nuevoContacto) => {
        return await Contacto.create({
            id_contacto: nuevoContacto.id_contacto,
            estado: nuevoContacto.estado,
            fecha_registro: new Date().toISOString(),
            id_administrador: nuevoContacto.id_administrador,
        });
    },
    obtenerContacto: async (id) => {
        return await Contacto.findByPk(id, {
            include: [
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
};