const Team = require('../models/team');

exports.getUsers = async (req, res) => {
  try {
    const users = await Team.findAll();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving users', error });
  }
};

exports.saveUser = async (req, res) => {
  try{
    //crear tabla jugadorea
    await Team.sync();

    const {nombre, ciudad} = req.body;

    
    if (!nombre) {
      return res.status(400).json({ error: 'Faltan campos requeridos: nombre' });
    }

    //se crea usuario
     const nuevoUsuario = await Team.create({ nombre, ciudad});

    // Responde con éxito
    return res.status(201).json({
      message: 'Equipo creado correctamente',
      data: nuevoUsuario
    });

  }
  catch(error){
    res.status(500).json({message: "Error saving team ", error: error.message});
  }
};

exports.getUserById = async (req, res) => {
  try{
    let {id} = req.params;

    let user = await Team.findByPk(id);

    return res.json(user);
  }
  catch(error){
    return res.status(500).json({error: "Error finding team by id: ", error: error.message});
  }
};

exports.updateUser = async(req, res) => {
  try{
    //obtengo datos de mi req
    let {id} = req.params;
    let data = req.body
    //bsucamos usando sequelize
    let team = await Team.findByPk(id);
    if(!team){
      res.status(404).json({message: "Equipo no encontrado"});
    }
    //actaulización
    await team.update(data);
    return res.status(200).json(team);
  }
  catch(error){
    res.status(500).json({message: "Error updating team", error: error.message});
  }
};

exports.deleteUser = async (req, res) =>{
  try{

    let {id} = req.params;
    //bsucamos usando sequelize
    let user = await Team.findByPk(id);
    if(!user){
      res.status(404).json({message: "Equipo no encontrado"});
    }
    //eliminar 
    await user.destroy();
    return res.status(200).json(user);
  }
  catch(error){
    res.status(500).json({message: "Error deleting team", error: error.message});
  }
}