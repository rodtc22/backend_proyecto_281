import {Actividad, Administrador} from "../database/models"

const convertHora = (data) => {
    const horaString = data;
    const partesHora = horaString.split(':');
    const hora = parseInt(partesHora[0]);
    const minutos = parseInt(partesHora[1]);
    
    const fecha = new Date();
    fecha.setHours(hora);
    fecha.setMinutes(minutos);
    fecha.setSeconds(0);
    return fecha;
}

export default {
    listarActividad: async () => {
        return await Actividad.findAll();
    },
    agregarActividad: async (nuevoActividad) => {
        nuevoActividad.hora = convertHora(nuevoActividad.hora);
        return await Actividad.create(nuevoActividad);
    },
    obtenerActividad: async (id) => {
        return await Actividad.findByPk(id);
    },
    editarActividad: async (id, editActividad) => {
        const actividad = await Actividad.findByPk(id);
        if (!actividad) return false;
        editActividad.hora = convertHora(editActividad.hora);
        await Actividad.update(editActividad,{
            where: {
                id_actividad: id
            },
        });
        return true;
    },
    borrarActividad: async (id) => {
        const actividad = await Actividad.findByPk(id);
        if (!actividad) return false;
        await Actividad.destroy({
            where: {
                id_actividad: id
            },
        });
        return true;
    },

    borrarActividadAdministrador: async (id) => {
        await Actividad.destroy({
            where: {
                id_administrador: id
            },
        });
        return true;
    },
    listarActividadAdministrador: async (id) => {
        const actividades = await Actividad.findAll({
            where: {
                id_administrador: id
            },
        });
        return actividades;
    },
};