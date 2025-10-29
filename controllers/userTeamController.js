const {User, UserTeam, Equipo} =  require("../models");

exports.save = async (req, res) =>{

    try{
    const { userId, equipoId } = req.params;

    const user = await User.findByPk(userId);
    const equipo = await Equipo.findByPk(equipoId)

    if (!user || !equipo) {
      return res.status(404).json({ message: "Usuario o Equipo no encontrado" });
    }

    // Crear la relación manualmente en UserEquipo
    await UserTeam.create({ userId, equipoId });

    res.json({ message: "Usuario agregado al equipo correctamente" });
    }
    catch(err){
        res.status(500).json({message: "Error al agregar un usuario a un equipo", error: err.message});
    }
};

// Listar todos los equipos de un usuario
exports.listarEquiposDeUsuario = async (req, res) => {
  try {
    const { userId } = req.params;

    const user = await User.findByPk(userId, {
      include: Equipo
    });

    if (!user) return res.status(404).json({ message: "Usuario no encontrado" });

    res.json(user.Equipos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al listar equipos del usuario" });
  }
};

// Listar todos los usuarios de un equipo
exports.listarUsuariosDeEquipo = async (req, res) => {
  try {
    const { equipoId } = req.params;

    const equipo = await Equipo.findByPk(equipoId, {
      include: User
    });

    if (!equipo) return res.status(404).json({ message: "Equipo no encontrado" });

    res.json(equipo.Users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al listar usuarios del equipo" });
  }
};