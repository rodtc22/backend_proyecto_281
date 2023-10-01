import contactoService from "../services/contacto.service";

export default {
  listar: async (req, res) => {
    try {
      const contactos = await contactoService.listarContacto();
      return res.status(200).json({ data: contactos });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },
  obtener: async (req, res) => {
    try {
      const contacto = await contactoService.obtenerContacto(req.params.id);
      return res.status(200).json({ data: contacto });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },
  agregar: async (req, res) => {
    try {
      const contacto = await contactoService.agregarContacto(req.body);
      return res
        .status(201)
        .json({ message: "El contacto se ha agregado: ", data: contacto });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },
  editar: async (req, res) => {
    try {
      let can = await contactoService.editarContacto(req.params.id, req.body);
      if (can)
        return res.status(200).json({ message: "El contacto se ha editado" });
      return res.status(404).json({ message: "El contacto no existe" });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },
  borrar: async (req, res) => {
    try {
      let can = await contactoService.borrarContacto(req.params.id);
      if (can)
        return res.status(200).json({ message: "El contacto se ha borrado" });
      return res.status(404).json({ message: "El contacto no existe" });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },
  obtenerContactoUsuario: async (req, res) => {
    try {
      const contactos = await contactoService.listarContactoUsuario(req.params.id_usuario);
      return res.status(200).json({ data: contactos });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },
  borrarContactoUsuario: async (req, res) => {
    try {
      let can = await contactoService.borrarContactoUsuario(req.params.id_usuario, req.params.id_contacto);
      if (can)
        return res.status(200).json({ message: "Los contactos del usuario se han borrado" });
      return res.status(404).json({ message: "No se elimino, ningun contacto" });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },
  editarContactoUsuario: async (req, res) => {
    try {
      let can = await contactoService.editarContactoUsuario(req.params.id_usuario, req.params.id_contacto, req.body);
      if (can) 
        return res.status(200).json({message: "El contacto se ha modificado con exito"}); 
      return res.status(400).json({message: "El contacto no se ha modificado"});
    } catch (error) {
      return res.status(500).json({message: error});
    }
  }
};
