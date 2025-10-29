const express = require('express');
const userRouter = require('./Routes/userRoutes');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para manejar JSON
app.use(express.json());

// Rutas
app.use('/user', userRouter);

app.get('/', (req, res) => {
  res.send('Welcome to the Home Page!');
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} -> http://localhost:${PORT}`);
});
