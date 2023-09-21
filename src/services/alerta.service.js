import {Alerta} from "../database/models"
import alertaService from "./alerta.service";

export default {
    listarAlerta: async () => {
        return await Alerta.findAll({
            include: [
                
            ]
        });
    },
    agregarAlerta: async (nuevoAlerta) => {
        return await Alerta.create({
            id_alerta: nuevoAlerta.id_alerta,
            estado: nuevoAlerta.estado,
            fecha_registro: new Date().toISOString(),
            id_administrador: nuevoAlerta.id_administrador,
        });
    },
    obtenerAlerta: async (id) => {
        return await Alerta.findByPk(id, {
            include: [
                
            ]
        });
    },
    editarAlerta: async (id, editAlerta) => {
        const alerta = await Alerta.findByPk(id);
        if (!alerta) return false;
        await Alerta.update(editAlerta,{
            where: {
                id_alerta: id
            },
        });
        return true;
    },
    borrarAlerta: async (id) => {
        const alerta = await Alerta.findByPk(id);
        if (!alerta) return false;
        await Alerta.destroy({
            where: {
                id_alerta: id
            },
        });
        return true;
    },
};