import express from 'express';
import './database';
import config from './config';
import morgan from 'morgan';
import cors from 'cors';
import videoRoutes from './routes/video.route';

// Aun falta bastante
const app = express();
app.set('port', config.PORT);

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/videos', videoRoutes);

export default app;
