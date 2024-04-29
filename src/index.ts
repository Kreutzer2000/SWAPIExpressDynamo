// src/index.ts
import express from 'express';
import serverless from 'serverless-http';
import swaggerUi from 'swagger-ui-express';
import swaggerSpec from './swaggerOptions';
import { router as userRouter } from './api/users';
import { router as swapiRouter } from './api/swapi';

const app = express();
app.use(express.json());

// Ruta para la documentación de API usando Swagger UI
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Rutas de la API
app.use('/users', userRouter);
app.use('/swapi', swapiRouter);

// Manejo de rutas no encontradas
app.use((req, res) => {
    res.status(404).send("Not Found");
});

module.exports.handler = serverless(app);
