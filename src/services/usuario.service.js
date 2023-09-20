// para acceder a la tabla usuarios debemos recurrir al modelo
import { Usuario } from "../database/models";
export default {
  getListaUsuario: async () => {
    return await Usuario.findAll();
  },
  getUsuario: async (id) => {
    return await Usuario.findByPk(id);
  },
  agregarUsuario: async (nuevoUsuario) => {
    return await Usuario.create(nuevoUsuario);
  },
  editarUsuario: async (id, editUsuario) => {
    const usuario = await Usuario.findByPk(id);
    if (!usuario) return false;
    await Usuario.update(editUsuario, {
      where: {
        id_usuario: id,
      },
    });
    return true;
  },
  borrarUsuario: async (id) => {
    const usuario = Usuario.findByPk(id);
    if (!usuario) return false;
    await Usuario.destroy({
      where: {
        id_usuario: id,
      },
    });
    return true;
  },
};
