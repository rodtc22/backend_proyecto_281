import {
  Comentario,
  Administrador,
  Recurso,
  Usuario_normal,
} from "../database/models";

export default {
  listarComentario: async () => {
    return await Comentario.findAll({
      include: [
        { model: Administrador },
        { model: Recurso },
        { model: Usuario_normal },
      ],
    });
  },

//   // UNA FORMA MAS ESPECIALIZADA DE EXTRAER DATOS
//   listarComentario: async () => {
//     return await Comentario.findAll({
//       include: [
//         {
//           model: Administrador,
//           attributes: ["rol"],
//           include: [{ model: Usuario, attributes: ["nombre"] }],
//         },
//         { model: Recurso },
//         {
//           model: Usuario,
//           attributes: ["id_usuario", "correo", "nombre_usuario"],
//         },
//       ],
//     });
//   },
  agregarComentario: async (nuevoComentario) => {
    return await Comentario.create({
      fecha: new Date().toISOString(),
      descripcion: nuevoComentario.descripcion,
      estado: 0,
      id_administrador: nuevoComentario.id_administrador,
      id_recurso: nuevoComentario.id_recurso,
      id_usuario: nuevoComentario.id_usuario,
    });
  },
  obtenerComentario: async (id) => {
    return await Comentario.findByPk(id, {
      include: [
        { model: Administrador },
        { model: Recurso },
        { model: Usuario_normal },
      ],
    });
  },
  editarComentario: async (id, editComentario) => {
    const comentario = await Comentario.findByPk(id);
    if (!comentario) return false;
    await Comentario.update(editComentario, {
      where: {
        id_comentario: id,
      },
    });
    return true;
  },
  borrarComentario: async (id) => {
    const comentario = await Comentario.findByPk(id);
    if (!comentario) return false;
    await Comentario.destroy({
      where: {
        id_comentario: id,
      },
    });
    return true;
  },

  borrarComentarioUsuario: async (id) => {
    await Comentario.destroy({
      where: {
        id_usuario: id,
      },
    });
    return true;
  },
  listarComentarioUsuario: async (id) => {
    await Comentario.findAll({
      where: {
        id_usuario: id,
      },
    });
    return true;
  },
};
