// para acceder a la tabla usuarios debemos recurrir al modelo
import {Administrador, Usuario} from "../database/models"
import actividadService from "./actividad.service";
import institucion_ayudaService from "./institucion_ayuda.service";
import recursoService from "./recurso.service";

export default {
  listarAdministrador: async () => {
    return await Administrador.findAll({
      include: [
        {model: Usuario},
      ]
    });
  },
  obtenerAdministrador: async (id) => {
    return await Administrador.findByPk(id, {
      include: [
        {model: Usuario}
      ]
    });
  },
  agregarAdministrador: async (nuevoAdministrador) => {
    return await Administrador.create(nuevoAdministrador);
  },
  editarAdministrador: async (id, editAdministrador) => {
    const administrador = await Administrador.findByPk(id);
    if (!administrador) return false;
    await Administrador.update(editAdministrador, {
      where: {
        id_administrador: id,
      },
    });
    return true;
  },
  borrarAdministrador: async (id) => {
    const administrador = Usuario.findByPk(id);
    if (!administrador) return false;
    await actividadService.borrarActividadAdministrador(id);
    await recursoService.borrarRecursoAdministrador(id);
    await institucion_ayudaService.borrarInstitucion_Ayuda(id);
    await Administrador.destroy({
      where: {
        id_administrador: id,
      },
    });
    return true;
  },
  buscaPorIdUsuario: async (id_u) => {
    let ans = await Administrador.findAll({
      include: [
        {
          model: Usuario,
          where: {
            id_usuario : id_u
          }
        }
      ],
      attributes: ["id_administrador", "rol"]
    });
    
    
    const dato = ans[0];
    if (!dato)  return null;
    
    const admin = {
      "id_administrador" : dato.dataValues.id_administrador,
      "rol" : dato.dataValues.rol,
      "Usuario" : dato.dataValues.Usuario.dataValues,
    }
    
    return admin; // retorna el adminitrador o null;
  }
};
