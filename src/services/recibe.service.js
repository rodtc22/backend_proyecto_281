import {Recibe, Administrador} from "../database/models"

export default {
    listarRecibe: async () => {
        return await Recibe.findAll();
    },
    agregarRecibe: async (nuevoRecibe) => {
        return await Recibe.create(nuevoRecibe);
    },
    obtenerRecibe: async (id) => {
        return await Recibe.findByPk(id);
    },
    editarRecibe: async (id, editRecibe) => {
        const recibe = await Recibe.findByPk(id);
        if (!recibe) return false;
        editRecibe.hora = convertHora(editRecibe.hora);
        await Recibe.update(editRecibe,{
            where: {
                id_recibe: id
            },
        });
        return true;
    },
    borrarRecibe: async (id) => {
        const recibe = await Recibe.findByPk(id);
        if (!recibe) return false;
        await Recibe.destroy({
            where: {
                id_recibe: id
            },
        });
        return true;
    },
};