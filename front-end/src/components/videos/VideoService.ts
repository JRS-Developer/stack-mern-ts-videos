import axios from 'axios';
import { VideoI } from './VideoI';

const API = 'http://localhost:5000';

const getVideos = async () => {
	return await axios.get<VideoI[]>(`${API}/videos`);
};

const getVideo = async (id: string) => {
	return await axios.get<VideoI>(`${API}/videos/${id}`);
};

const createVideo = async (video: VideoI) => {
	return await axios.post(`${API}/videos`, video);
};

const updateVideo = async (id: string, video: VideoI) => {
	return await axios.put(`${API}/videos/${id}`, video);
};

const deleteVideo = async (id: string) => {
	return await axios.delete(`${API}/videos/${id}`);
};
export { getVideos, createVideo, getVideo, updateVideo, deleteVideo };
