import {Asiste, Administrador} from "../database/models"

export default {
    listarAsiste: async () => {
        return await Asiste.findAll();
    },
    agregarAsiste: async (nuevoAsiste) => {
        return await Asiste.create(nuevoAsiste);
    },
    obtenerAsiste: async (id) => {
        return await Asiste.findByPk(id);
    },
    editarAsiste: async (id, editAsiste) => {
        const asiste = await Asiste.findByPk(id);
        if (!asiste) return false;
        editAsiste.hora = convertHora(editAsiste.hora);
        await Asiste.update(editAsiste,{
            where: {
                id_asiste: id
            },
        });
        return true;
    },
    borrarAsiste: async (id) => {
        const asiste = await Asiste.findByPk(id);
        if (!asiste) return false;
        await Asiste.destroy({
            where: {
                id_asiste: id
            },
        });
        return true;
    },
};