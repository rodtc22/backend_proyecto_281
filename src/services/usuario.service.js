import bcrypt from "bcrypt";
// para acceder a la tabla usuarios debemos recurrir al modelo
import { Usuario } from "../database/models";

const encriptar = async (cad) => {
  const saltos = 10;
  const salt = await bcrypt.genSalt(saltos);
  return await bcrypt.hash(cad, salt);
};

const existeUsuario = async (nuevoUsuario) => {
  const fila = await Usuario.findAll({
    where: {
      correo: nuevoUsuario.correo,
    },
    where: {
      ci: nuevoUsuario.ci,
    },
  });
  return fila.length > 0;
};

export default {
  listarUsuario: async () => {
    return await Usuario.findAll();
  },
  obtenerUsuario: async (id) => {
    return await Usuario.findByPk(id);
  },
  agregarUsuario: async (nuevoUsuario) => {
    const existe = await existeUsuario(nuevoUsuario);
    if (existe) return null;
    nuevoUsuario.contrasenia = await encriptar(nuevoUsuario.contrasenia);
    return await Usuario.create(nuevoUsuario);
  },
  editarUsuario: async (id, editUsuario) => {
    const usuario = await Usuario.findByPk(id);
    if (!usuario) return false;
    
    editUsuario.contrasenia = await encriptar(editUsuario.contrasenia);
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
