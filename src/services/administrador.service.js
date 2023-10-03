// para acceder a la tabla usuarios debemos recurrir al modelo
import { Administrador, Usuario } from "../database/models";
import actividadService from "./actividad.service";
import institucion_ayudaService from "./institucion_ayuda.service";
import recursoService from "./recurso.service";
import usuarioService from "./usuario.service";

const getUsuario = (administrador) => {
  return {
    ci: administrador.ci,
    nombre: administrador.nombre,
    fecha_nac: administrador.fecha_nac,
    direccion: administrador.direccion,
    genero: administrador.genero,
    correo: administrador.correo,
    telefono: administrador.telefono,
    nombre_usuario: administrador.nombre_usuario,
    contrasenia: administrador.contrasenia,
  };
};

export default {
  listarAdministrador: async () => {
    return await Administrador.findAll({
      include: [{ model: Usuario }],
    });
  },
  obtenerAdministrador: async (id) => {
    return await Administrador.findByPk(id, {
      include: [{ model: Usuario }],
    });
  },
  agregarAdministrador: async (nuevoAdministrador) => {
    const usuario = getUsuario(nuevoAdministrador);
    const nusuario = await usuarioService.agregarUsuario(usuario);
    if (nusuario == null) return false;

    

    const administrador = {
      id_usuario: nusuario.id_usuario,
      rol: nuevoAdministrador.rol,
    };

    return await Administrador.create(administrador);
  },
  editarAdministrador: async (id, editAdministrador) => {
    const administrador = await Administrador.findByPk(id, {
      include: [
        Usuario // lo necesitamos para obtener el id_usuario
      ]
    });
    if (!administrador) return false;

    await Administrador.update(editAdministrador, {
      where: {
        id_administrador : id
      }
    });
    
    const idu = administrador.dataValues.id_usuario;
    await usuarioService.editarUsuario(idu, editAdministrador);
    
    return true;
  },
  borrarAdministrador: async (id) => {
    const administrador = await Administrador.findByPk(id, {
      include : [Usuario]
    });
    if (!administrador) return false;

    await Administrador.destroy({
      where: {
        id_administrador: id,
      },
    });

    //ELIMINACION EN CASCADA
    const idu = administrador.dataValues.id_usuario;
    await usuarioService.borrarUsuario(idu);
    await actividadService.borrarActividadAdministrador(id);
    // await recursoService.borrarRecursoAdministrador(id);
    // await institucion_ayudaService.borrarInstitucion_Ayuda(id);

    return true;
  },
  buscaPorIdUsuario: async (id_u) => {
    let ans = await Administrador.findAll({
      include: [
        {
          model: Usuario,
          where: {
            id_usuario: id_u,
          },
        },
      ],
    });

    const admin = ans[0];
    return admin;
  },
};
