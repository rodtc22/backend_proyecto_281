import {Denuncia} from "../database/models"
import denunciaService from "./denuncia.service";

export default {
    listarDenuncia: async () => {
        return await Denuncia.findAll({
            include: [
                
            ]
        });
    },
    agregarDenuncia: async (nuevoDenuncia) => {
        return await Denuncia.create({
            id_denuncia: nuevoDenuncia.id_denuncia,
            estado: nuevoDenuncia.estado,
            fecha_registro: new Date().toISOString(),
            id_administrador: nuevoDenuncia.id_administrador,
        });
    },
    obtenerDenuncia: async (id) => {
        return await Denuncia.findByPk(id, {
            include: [
                
            ]
        });
    },
    editarDenuncia: async (id, editDenuncia) => {
        const denuncia = await Denuncia.findByPk(id);
        if (!denuncia) return false;
        await Denuncia.update(editDenuncia,{
            where: {
                id_denuncia: id
            },
        });
        return true;
    },
    borrarDenuncia: async (id) => {
        const denuncia = await Denuncia.findByPk(id);
        if (!denuncia) return false;
        await Denuncia.destroy({
            where: {
                id_denuncia: id
            },
        });
        return true;
    },
};