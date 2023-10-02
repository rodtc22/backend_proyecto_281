import bcrypt from "bcrypt";
import nodemailer from "nodemailer";

// para acceder a la tabla usuarios debemos recurrir al modelo
import { Usuario} from "../database/models";
import administradorService from "../services/administrador.service";
import usuarioService from "./usuario.service";

export default {
  verificaCredenciales: async (credenciales) => {
    const ans = {
      code: 400,
      message: "Credenciales incorrectas",
    };

    //verificamos que exista un usuario con este correo
    const filas = await Usuario.findAll({
      where: {
        correo: credenciales.correo,
      },
    });

    if (filas) {
      const usuario = filas[0].dataValues;
      credenciales.rol = "usuario_normal";
            
      const id_usuario = usuario.id_usuario;
      credenciales.id_usuario = id_usuario;

      //validar correos iguales
      const iguales = await bcrypt.compare(credenciales.contrasenia, usuario.contrasenia);
      if (iguales) {
        // buscamos si es administrador o no para ponerle su rol
        const uadmin = await administradorService.buscaPorIdUsuario(id_usuario); 
        if (uadmin) {
          credenciales.rol = uadmin.rol;
        } 

        ans.code = 200;
        ans.message = "Usuario encontrado";
        ans.data = credenciales;

      }
    }
    return ans;
  },
  agregarNuevoUsuario: async (nuevoUsuario) => {
    await usuarioService.agregarUsuario(nuevoUsuario);
    return true;
  },

};
