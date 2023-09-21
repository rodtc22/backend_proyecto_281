import {Comentario} from "../database/models"
import comentarioService from "./comentario.service";

export default {
    listarComentario: async () => {
        return await Comentario.findAll({
            include: [
            ]
        });
    },
    agregarComentario: async (nuevoComentario) => {
        return await Comentario.create({
            id_comentario: nuevoComentario.id_comentario,
            estado: nuevoComentario.estado,
            fecha_registro: new Date().toISOString(),
            id_administrador: nuevoComentario.id_administrador,
        });
    },
    obtenerComentario: async (id) => {
        return await Comentario.findByPk(id, {
            include: [
            ]
        });
    },
    editarComentario: async (id, editComentario) => {
        const comentario = await Comentario.findByPk(id);
        if (!comentario) return false;
        await Comentario.update(editComentario,{
            where: {
                id_comentario: id
            },
        });
        return true;
    },
    borrarComentario: async (id) => {
        const comentario = await Comentario.findByPk(id);
        if (!comentario) return false;
        await Comentario.destroy({
            where: {
                id_comentario: id
            },
        });
        return true;
    },
};