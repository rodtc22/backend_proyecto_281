import {Agrega, Administrador} from "../database/models"

export default {
    listarAgrega: async () => {
        return await Agrega.findAll();
    },
    agregarAgrega: async (nuevoAgrega) => {
        return await Agrega.create(nuevoAgrega);
    },
    obtenerAgrega: async (id) => {
        return await Agrega.findByPk(id);
    },
    editarAgrega: async (id, editAgrega) => {
        const agrega = await Agrega.findByPk(id);
        if (!agrega) return false;
        editAgrega.hora = convertHora(editAgrega.hora);
        await Agrega.update(editAgrega,{
            where: {
                id_agrega: id
            },
        });
        return true;
    },
    borrarAgrega: async (id) => {
        const agrega = await Agrega.findByPk(id);
        if (!agrega) return false;
        await Agrega.destroy({
            where: {
                id_agrega: id
            },
        });
        return true;
    },
};