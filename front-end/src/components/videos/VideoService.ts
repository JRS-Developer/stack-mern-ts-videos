import axios from 'axios';
import { VideoI } from './VideoI';

const API = 'http://localhost:5000';

const getVideos = async () => {
	return await axios.get(`${API}/videos`);
};

const createVideo = async (video: VideoI) => {
	return await axios.post(`${API}/videos`, video);
};
export { getVideos, createVideo };
