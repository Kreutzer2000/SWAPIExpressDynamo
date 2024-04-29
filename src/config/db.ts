// src/config/db.ts
import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocumentClient, PutCommand, GetCommand } from '@aws-sdk/lib-dynamodb';
import { User } from '../interfaces/user.interface';

// Cliente de DynamoDB configurado para interactuar con la base de datos.
const client = DynamoDBDocumentClient.from(new DynamoDBClient({ region: "us-east-1" }));
const USERS_TABLE = process.env.USERS_TABLE || 'users-table-dev';

// Función para obtener un usuario por ID.
export async function getUser(userId: string): Promise<User | null> {
    const params = {
        TableName: USERS_TABLE,
        Key: { userId }
    };
    const { Item } = await client.send(new GetCommand(params));
    return Item as User || null;
}

// Función para crear un usuario en la base de datos.
export async function createUser(user: User): Promise<void> {
    const params = {
        TableName: USERS_TABLE,
        Item: user
    };
    await client.send(new PutCommand(params));
}
