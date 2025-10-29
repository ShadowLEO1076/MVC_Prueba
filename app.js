const express = require('express');
const userRouter = require('./Routes/userRoutes');
const teamRouter = require('./Routes/teamRoutes');
const userTeamRouter = require ("./Routes/userTeamRoutes");
const sequelize = require('./config/database');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para manejar JSON
app.use(express.json());

// Rutas
app.use('/user', userRouter);
app.use('/team',teamRouter);
app.use("/api", userTeamRouter)

app.get('/', (req, res) => {
  res.send('Welcome to the Home Page!');
});

sequelize.sync({ alter: true })
  .then(() => console.log('Tablas sincronizadas'))
  .catch(err => console.error('Error al sincronizar', err));

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} -> http://localhost:${PORT}`);
});
