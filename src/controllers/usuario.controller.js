// import usuarioService from "../services/usuario.service";
import models from "../database/models";

export default {
  listar: async (req, res) => {
    try {
      const usuarios = await models.Usuario.findAll();
      return res.status(200).json({data: usuarios});
    } catch (error) {
      return res.status(500).json({message: error.message})
    }
  },
  obtener: async (req, res) => {
    try {
      const id = req.params.id;
      console.log("idsd ",id)
      const usuario = await models.Usuario.findByPk(id);
      return res.status(200).json({data: usuario});
    } catch (error) {
      return res.status(500).json({message: error.message})
    }
  },
  agregar: (req, res) => {
    console.log(req.query)
    return res.status(200).json({ message: "controller usuario agregar" });
  },
  editar: (req, res) => {
    return res.status(200).json({ message: "controller usuario editar" });
  },
  borrar: (req, res) => {
    return res.status(200).json({ message: "controller usuario borrar" });
  },
};
