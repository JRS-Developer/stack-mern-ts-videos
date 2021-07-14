// Es buena practica tener un archivo config para tener datos de base de datos
import dotenv from 'dotenv';

// dotenv.config lee el archivo dotenv, sin esto, no podemos leer las variables de entorno personalizadas
dotenv.config();

export default {
	// El || indica que si la variable de entorno esta definida pues que la use, sino que use la opcion de la derecha/
	MONGO_DATABASE: process.env.MONGO_DATABASE || 'videosdb',
	MONGO_USER: process.env.MONGO_USER || 'admin',
	MONGO_PASSWORD: process.env.MONGO_PASSWORD || 'admin',
	MONGO_HOST: process.env.MONGO_HOST || 'localhost',
	PORT: process.env.PORT || 3000,
};
