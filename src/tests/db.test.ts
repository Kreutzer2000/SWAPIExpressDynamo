// Importaciones necesarias para la prueba
import { DynamoDBDocumentClient, GetCommand, PutCommand } from '@aws-sdk/lib-dynamodb';
import { User } from '../interfaces/user.interface';

// Mock global para las funciones send del cliente DynamoDB
const mockedSend = jest.fn();

// Configuración del mock para AWS SDK
jest.mock('@aws-sdk/lib-dynamodb', () => {
    const originalModule = jest.requireActual('@aws-sdk/lib-dynamodb');
    return {
        __esModule: true, // Habilita la exportación por defecto y nombrada
        ...originalModule, // Conserva comportamientos predeterminados
        DynamoDBDocumentClient: {
            from: () => ({
                send: mockedSend // Sustituye send por el mock
            })
        },
        GetCommand: originalModule.GetCommand, // Mantiene la implementación original de GetCommand
        PutCommand: originalModule.PutCommand // Mantiene la implementación original de PutCommand
    };
});

// Importa las funciones de la base de datos después de configurar el mock
import { getUser, createUser } from '../config/db';

// Usuario de prueba para usar en los mocks y verificaciones
const mockUser: User = {
    userId: "1",
    nombre: "Test User",
    altura: "180",
    peso: "80",
    color_de_pelo: "brown",
    color_de_piel: "fair",
    color_de_ojo: "blue",
    nacimiento: "1990",
    genero: "male"
};

// Describe el grupo de funciones de prueba relacionadas con operaciones en la base de datos
describe('Database Functions', () => {
    beforeEach(() => {
        mockedSend.mockReset(); // Limpia el estado del mock entre pruebas
    });

    describe('getUser', () => {
        it('should return null when user does not exist', async () => {
            // Configura el mock para retornar un resultado vacío cuando el usuario no existe
            mockedSend.mockResolvedValue({});
            const result = await getUser('nonexistent-id');
            expect(result).toBeNull(); // Verifica que el resultado sea null para un ID no existente
        });

        it('should return user data when user exists', async () => {
            // Configura el mock para retornar el usuario de prueba cuando el usuario existe
            mockedSend.mockResolvedValue({ Item: mockUser });
            const result = await getUser('1');
            expect(result).toEqual(mockUser); // Verifica que los datos del usuario sean devueltos correctamente
        });
    });

    describe('createUser', () => {
        it('should create a user successfully', async () => {
            // Configura el mock para simular una creación exitosa
            mockedSend.mockResolvedValue({ Attributes: mockUser });
            await createUser(mockUser);
            // Verifica que se haya llamado al método send, implicando que la creación fue intentada
            expect(mockedSend).toHaveBeenCalled();
        });
    });
});