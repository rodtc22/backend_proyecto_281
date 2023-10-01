// para acceder a la tabla usuarios debemos recurrir al modelo
import { Usuario} from "../database/models";
import administradorService from "../services/administrador.service";

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
      
      const id_usuario = usuario.id_usuario;
      credenciales.id_usuario = id_usuario;
      credenciales.rol = "usuario_normal";

      if (usuario.contrasenia == credenciales.contrasenia) {
        
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
    console.log(ans);
    return ans;
  },
  agregarNuevoUsuario: async (nuevoUsuario) => {
    return await Usuario.create(nuevoUsuario);
  },
};
