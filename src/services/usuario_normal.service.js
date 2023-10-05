import { Usuario, Usuario_normal } from "../database/models";
import administradorService from "./administrador.service";
import contactoService from "./contacto.service";
import usuarioService from "./usuario.service";

const getUsuario = (usuario_normal) => {
  return {
    ci: usuario_normal.ci,
    nombre: usuario_normal.nombre,
    fecha_nac: usuario_normal.fecha_nac,
    direccion: usuario_normal.direccion,
    genero: usuario_normal.genero,
    correo: usuario_normal.correo,
    telefono: usuario_normal.telefono,
    nombre_usuario: usuario_normal.nombre_usuario,
    contrasenia: usuario_normal.contrasenia,
  };
};

export default {
  listarUsuario_normal: async () => {
    return await Usuario_normal.findAll({
      include: [{ model: Usuario }],
    });
  },
  agregarUsuario_normal: async (nuevoUsuario_normal) => {
    const usuario = getUsuario(nuevoUsuario_normal);

    //verificar que exite el adminsitrador
    const admin = await administradorService.obtenerAdministrador(nuevoUsuario_normal.id_administrador);
    if (!admin) return;

    const nusuario = await usuarioService.agregarUsuario(usuario);
    if (nusuario == null) return false;

    const usuario_normal = {
      id_usuario: nusuario.id_usuario,
      estado: "activo",
      fecha_registro: new Date().toISOString(),
      id_administrador: nuevoUsuario_normal.id_administrador,
    };
    return await Usuario_normal.create(usuario_normal);
  },
  obtenerUsuario_normal: async (id) => {
    return await Usuario_normal.findByPk(id, {
      include: [{ model: Usuario }],
    });
  },
  editarUsuario_normal: async (id, editUsuario_normal) => {
    const usuario_normal = await Usuario_normal.findByPk(id);
    if (!usuario_normal) return false;

    await Usuario_normal.update(editUsuario_normal, {
      where: {
        id_usuario: id,
      },
    });
    await usuarioService.editarUsuario(id, editUsuario_normal);
    return true;
  },
  borrarUsuario_normal: async (id) => {
    let usuario_normal = await Usuario_normal.findByPk(id);
    if (!usuario_normal) return false;

    await Usuario_normal.destroy({
      where: {
        id_usuario: id,
      },
    });

    await usuarioService.borrarUsuario(id);
    await contactoService.borrarTodoContactoUsuario(id);
    return true;
  },

  borrarUsuario_normalAdministrador: async (id) => {
    let usuario_normal = await Usuario_normal.findByPk(id);
    if (!usuario_normal) return false;

    await Usuario_normal.destroy({
      where: {
        id_administrador: id,
      },
    });

    await usuarioService.borrarUsuario(id);
    await contactoService.borrarTodoContactoUsuario(id);
    return true;
  },
};
