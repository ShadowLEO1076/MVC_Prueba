const User = require('../models/user');

exports.getUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving users', error });
  }
};

exports.saveUser = async (req, res) => {
  try{
    //crear tabla jugadorea
    await User.sync();

    const {nombre, descripcion} = req.body;

    
    if (!nombre || !descripcion) {
      return res.status(400).json({ error: 'Faltan campos requeridos: nombre o descripcion' });
    }

    //se crea usuario
     const nuevoUsuario = await User.create({ nombre, descripcion });

    // Responde con éxito
    return res.status(201).json({
      message: 'Usuario creado correctamente',
      data: nuevoUsuario
    });

  }
  catch(error){
    res.status(500).json({message: "Error saving user ", error});
  }
};

exports.getUserById = async (req, res) => {
  try{
    let {id} = req.params;

    let user = await User.findByPk(id);

    return res.json(user);
  }
  catch(error){
    return res.status(500).json({error: "Error finding user by id: ", error: error.message});
  }
};

exports.updateUser = async(req, res) => {
  try{
    //obtengo datos de mi req
    let {id} = req.params;
    let data = req.body
    //bsucamos usando sequelize
    let user = await User.findByPk(id);
    if(!user){
      res.status(404).json({message: "Usuario no encontrado"});
    }
    //actaulización
    await user.update(data);
    return res.status(200).json(user);
  }
  catch(error){
    res.status(500).json({message: "Error updating user", error: error.message});
  }
};

exports.deleteUser = async (req, res) =>{
  try{

    let {id} = req.params;
    let data = req.body
    //bsucamos usando sequelize
    let user = await User.findByPk(id);
    if(!user){
      res.status(404).json({message: "Usuario no encontrado"});
    }
    //eliminar 
    await user.destroy();
    return res.status(200).json(user);
  }
  catch(error){
    res.status(500).json({message: "Error deleting user", error: error.message});
  }
}