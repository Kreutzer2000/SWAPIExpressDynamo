// src/swaggerOptions.ts
import swaggerJsdoc from 'swagger-jsdoc';

const swaggerDefinition = {
    openapi: '3.0.0',
    info: {
        title: 'SWAPI DynamoDB Express API',
        version: '1.0.0',
        description: 'This API adapts SWAPI data to Spanish and stores user data in DynamoDB.',
    },
    servers: [
        {
            url: 'http://localhost:3000',
            description: 'Local server',
        },
    ],
};

const options = {
    swaggerDefinition,
    apis: ['./src/api/*.ts'], // Rutas de los archivos donde Swagger buscará anotaciones.
};

const swaggerSpec = swaggerJsdoc(options);

export default swaggerSpec;
