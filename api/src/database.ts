import mongoose, { ConnectionOptions } from 'mongoose';
import config from './config';

(async () => {
	try {
		const mongooseOptions: ConnectionOptions = {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			// user: config.MONGO_USER,
			// pass: config.MONGO_PASSWORD,
		};
		const db = await mongoose.connect(
			`mongodb://${config.MONGO_HOST}/${config.MONGO_DATABASE}`,
			mongooseOptions
		);
		console.log('Database connected to: ', db.connection.name);
	} catch (error) {
		console.log('There is an error with the database:', error);
	}
})();
