import {Notifica, Administrador} from "../database/models"

export default {
    listarNotifica: async () => {
        return await Notifica.findAll();
    },
    agregarNotifica: async (nuevoNotifica) => {
        return await Notifica.create(nuevoNotifica);
    },
    obtenerNotifica: async (id) => {
        return await Notifica.findByPk(id);
    },
    editarNotifica: async (id, editNotifica) => {
        const notifica = await Notifica.findByPk(id);
        if (!notifica) return false;
        editNotifica.hora = convertHora(editNotifica.hora);
        await Notifica.update(editNotifica,{
            where: {
                id_notifica: id
            },
        });
        return true;
    },
    borrarNotifica: async (id) => {
        const notifica = await Notifica.findByPk(id);
        if (!notifica) return false;
        await Notifica.destroy({
            where: {
                id_notifica: id
            },
        });
        return true;
    },
};