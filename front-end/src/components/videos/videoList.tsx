import { useEffect, useState } from 'react';
import { VideoI } from './VideoI';
import { getVideos } from './VideoService';
import VideoItem from './VideoItem';

const VideoList = () => {
	const [videos, setVideos] = useState<VideoI[]>([]);

	const loadVideos = async () => {
		const res = await getVideos();
		setVideos(res.data);
	};

	useEffect(() => {
		loadVideos();
	}, []);

	return (
		<div className='is-flex is-flex-wrap-wrap is-3'>
			{videos.map((video) => {
				const { _id } = video;
				return <VideoItem key={_id} video={video} />;
			})}
		</div>
	);
};

export default VideoList;
