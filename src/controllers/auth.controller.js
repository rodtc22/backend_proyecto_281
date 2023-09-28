import authService from "../services/auth.service";

export default {
  login: async (req, res) => {
    try {
      const auth = await authService.verificaCredenciales(req.body);
      return res.status(auth.code).json( {"data": auth.data} );
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },
  registro: async (req, res) => {
    try {
      const usuario = await authService.agregarNuevoUsuario(req.body);
      return res.status(200).json({
        data: usuario,
        message: "El usuario se ha agregado con exito",
      });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },
  logout: (req, res) => {
    return res
      .status(200)
      .json({ message: "Soy el controlador del logout :(" });
  },
};
