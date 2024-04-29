# SWAPI Express Dynamo

Este proyecto es una API construida con Express que adapta los datos de la API de Star Wars (SWAPI) al español y utiliza DynamoDB para almacenar datos de usuarios. Está diseñado para ser desplegado en AWS Lambda utilizando el Serverless Framework.

## Características

- Proporciona endpoints para interactuar con los datos de SWAPI y para gestionar usuarios.
- Utiliza Swagger UI para documentar la API.
- Almacena datos de usuarios en una tabla DynamoDB.
- Permite el desarrollo y prueba local utilizando `serverless-offline`.

## Configuración

### Requisitos previos

- Node.js y npm instalados.
- Serverless Framework instalado globalmente (`npm install -g serverless`).

### Instalación de dependencias

Ejecuta el siguiente comando para instalar las dependencias del proyecto:

```bash
npm install
```

## Despliegue

Para desplegar la API en AWS, ejecuta el siguiente comando:

```bash
npm run deploy
```

## Uso

  - Una vez desplegado, puedes interactuar con la API de las siguientes maneras:

  - Accede a la documentación de la API a través de Swagger UI en http://<API_ENDPOINT>/docs.
  - Para obtener información sobre un usuario, haz una petición GET a /users/{userId}.
  - Para crear un nuevo usuario, haz una petición POST a /users.
  - Para obtener datos de un personaje de SWAPI por su ID, haz una petición GET a /swapi/people/{id}.

## Desarrollo local
  
  Puedes ejecutar la API localmente para desarrollo y pruebas. Utiliza el siguiente comando:

```bash
npm run dev
```

Esto iniciará el servidor local y podrás acceder a la API en http://localhost:3000.

## Estructura del Proyecto
  
  El proyecto sigue la siguiente estructura de directorios:

```
SWAPIExpressDynamo/
├── src/
│   ├── api/
│   │   ├── users.ts
│   │   └── swapi.ts
│   ├── config/
│   │   └── db.ts
│   ├── interfaces/
│   │   └── user.interface.ts
│   ├── tests/
│   │   └── db.tests.ts
│   ├── types/
│   │   └── declarations.d.ts
│   ├── swaggerOptions.ts
│   └── index.ts
├── jest.config.js
├── package.json
├── serverless.yml
└── tsconfig.json
```