// src/index.js
const express = require('express');
const path = require('path');
const pool = require('./db');

const app = express();

// Configuraciones
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '..', 'views'));

// Middlewares
app.use(express.urlencoded({ extended: true })); // Para leer datos de formularios

// Ruta raíz: muestra el formulario de login
app.get('/', (req, res) => {
  res.render('login', { error: null });
});

// Ruta POST para procesar el login
app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    const [rows] = await pool.query(
      'SELECT nombre, apellido, nota1, nota2, nota3 FROM estudiantes WHERE username = ? AND password = ?',
      [username, password]
    );

    if (rows.length === 0) {
      return res.status(401).render('login', { error: 'Usuario o contraseña incorrectos' });
    }

    const estudiante = rows[0];

    res.render('student', {
      titulo: 'Estudiante',
      nombre: estudiante.nombre,
      apellido: estudiante.apellido,
      nota1: estudiante.nota1,
      nota2: estudiante.nota2,
      nota3: estudiante.nota3,
    });
  } catch (err) {
    console.error('Error al consultar la base de datos:', err);
    res.status(500).send('Error interno del servidor');
  }
});

// Levantar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor de aplicacion escuchando en el puerto ${PORT}`);
});
