// src/api/swapi.ts
import { Router } from 'express';
import axios from 'axios';

export const router = Router();

// Endpoint para obtener datos de una persona de la SWAPI por ID.
router.get('/people/:id', async (req, res) => {
    try {
        const response = await axios.get(`https://swapi.py4e.com/api/people/${req.params.id}`);
        const person = response.data;
        res.json({
            nombre: person.name,
            altura: person.height,
            peso: person.mass,
            color_de_pelo: person.hair_color,
            color_de_piel: person.skin_color,
            color_de_ojo: person.eye_color,
            nacimiento: person.birth_year,
            genero: person.gender
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error retrieving data from SWAPI" });
    }
});
