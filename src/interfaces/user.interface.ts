// src/interfaces/user.interface.ts

// Definición de la interfaz para un usuario, utilizada en toda la aplicación para garantizar consistencia de tipos.
export interface User {
    userId: string;
    nombre: string;
    altura: string;
    peso: string;
    color_de_pelo: string;
    color_de_piel: string;
    color_de_ojo: string;
    nacimiento: string;
    genero: string;
}
