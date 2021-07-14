import videoModel from './video';
import { RequestHandler } from 'express';

// Get methods
const getVideos: RequestHandler = async (_req, res) => {
	try {
		const videos = await videoModel.find();
		res.json(videos);
	} catch (error) {
		res.json(error);
	}
};

const getVideo: RequestHandler = async (req, res) => {
	const { id } = req.params;
	const videoFound = await videoModel.findById(id);
	if (videoFound) {
		return res.status(200).json(videoFound);
	}
	return res.status(204).json();
};

// Post methods
const saveVideo: RequestHandler = async (req, res) => {
	const { title, description, url } = req.body;
	const videoFound = await videoModel.findOne({ url: url });

	if (videoFound) {
		return res.status(301).json({ message: 'The URL already exits' });
	}

	if (!title) {
		return res.status(400).json({ message: 'Please provide a title' });
	}
	if (!description) {
		return res
			.status(400)
			.json({ message: 'Please provide a description' });
	}
	if (!url) {
		return res.status(400).json({ message: 'Please provide an url' });
	}
	const video = new videoModel({
		title,
		description,
		url,
	});
	const saveVideo = await video.save();
	return res.status(201).json(saveVideo);
};

// Delete methods

const deleteVideo: RequestHandler = async (req, res) => {
	const { id } = req.params;
	const videoFound = await videoModel.findByIdAndDelete(id);
	if (videoFound) {
		return res.status(200).json(videoFound);
	}
	return res.status(204).json();
};

// Update methods

const updateVideo: RequestHandler = async (req, res) => {
	const { id } = req.params;
	const videoUpdated = await videoModel.findByIdAndUpdate(id, req.body, {
		new: true,
	});
	if (videoUpdated) {
		return res.status(200).json(videoUpdated);
	}
	return res.status(204).json();
};

export { getVideos, saveVideo, getVideo, deleteVideo, updateVideo };
