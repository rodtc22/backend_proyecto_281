// para acceder a la tabla usuarios debemos recurrir al modelo
import { Usuario } from "../database/models";

export default {
  verificaCredenciales: async (credenciales) => {
    const ans = {
      code: 400,
      message: "Credenciales incorrectas",
    };

    const filas = await Usuario.findAll({
      where: {
        correo: credenciales.correo,
      },
    });

    if (filas) {
      const usuario = filas[0].dataValues;
      credenciales.id_usuario = usuario.id_usuario;
      if (usuario.contrasenia == credenciales.contrasenia) {
        ans.code = 200;
        ans.message = "Usuario encontrado";
        ans.data = credenciales;
      }
    }
    return ans;
  },
  agregarNuevoUsuario: async (nuevoUsuario) => {
    return await Usuario.create(nuevoUsuario);
  },
};
