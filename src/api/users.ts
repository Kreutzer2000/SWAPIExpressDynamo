// src/api/users.ts
import { Router } from 'express';
import { DynamoDBDocumentClient } from '@aws-sdk/lib-dynamodb';
import { getUser, createUser } from '../config/db';

export const router = Router();

// Endpoint para obtener un usuario por su ID.
/**
 * @openapi
 * /users/{userId}:
 *   get:
 *     tags:
 *       - Users
 *     summary: Retrieve a user by userId
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: User found
 *       404:
 *         description: User not found
 */
router.get('/:userId', async (req, res) => {
    const { userId } = req.params;
    const user = await getUser(userId);
    if (user) {
        res.json(user);
    } else {
        res.status(404).json({ error: 'User not found' });
    }
});

// Endpoint para crear un nuevo usuario.
router.post('/', async (req, res) => {
    const user = req.body;
    await createUser(user);
    res.status(201).json(user);
});
