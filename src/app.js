import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import categoriasRoutes from './routes/categorias.routes.js';
import cursanteRoutes from './routes/cursante.routes.js';
import docenteRoutes from './routes/docente.routes.js';
import cursoRoutes from './routes/curso.routes.js';
import adminRoutes from './routes/cursoAdmin.routes.js';
import logincRoutes from './routes/loginCursante.routes.js';
import logindRoutes from './routes/loginDocente.routes.js';
import miscursos from "./routes/miscursos.routes.js";

const app = express();

// Configuración de CORS
app.use(cors({
  origin: 'http://localhost:5173', // Cambia esto según el origen de tu front-end
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Métodos permitidos
  allowedHeaders: ['Content-Type', 'Authorization'] // Encabezados permitidos
}));

app.use(morgan('dev'));
app.use(express.json());

// Configuración de rutas
app.use("/api", categoriasRoutes);
app.use("/api", cursanteRoutes);
app.use("/api", docenteRoutes);
app.use("/api", cursoRoutes);
app.use("/api", adminRoutes);
app.use("/api", logincRoutes);
app.use("/api", logindRoutes);
app.use("/api", miscursos);

// Manejo de errores
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

export default app;
