// para acceder a la tabla usuarios debemos recurrir al modelo
import { Usuario } from "../database/models";
import usuario_normalService from "./usuario_normal.service";
import administradorService from "./administrador.service";



export default {
  listarUsuario: async () => {
    return await Usuario.findAll();
  },
  obtenerUsuario: async (id) => {
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
    usuario_normalService.borrarUsuario_normal(id);
    administradorService.borrarAdministrador(id);
    await Usuario.destroy({
      where: {
        id_usuario: id,
      }
    });
    return true;
  },
};
