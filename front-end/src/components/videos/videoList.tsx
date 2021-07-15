import { useEffect, useState } from 'react';
import { VideoI } from './VideoI';
import { getVideos } from './VideoService';
import { Link } from 'react-router-dom';
import VideoItem from './VideoItem';

const FormatVideos = (videos: VideoI[]) => {
	return videos
		.map((video) => {
			return {
				...video,
				createdAt: video.createdAt
					? new Date(video.createdAt)
					: new Date(),
				updatedAt: video.updatedAt
					? new Date(video.updatedAt)
					: new Date(),
			};
		})
		.sort((a, b) => a.createdAt.getTime() - b.createdAt.getTime());
};

const VideoList = () => {
	const [videos, setVideos] = useState<VideoI[]>([]);
	const [isLoading, setIsLoading] = useState(true);

	const loadVideos = async () => {
		const res = await getVideos();
		const formatedVideos = FormatVideos(res.data);
		setIsLoading(false);
		setVideos(formatedVideos);
	};

	useEffect(() => {
		loadVideos();
	}, []);

	return (
		<div className='columns is-dektop is-multiline'>
			{isLoading && <h1 className='title'>Loading...</h1>}
			{videos.length > 0 &&
				videos.map((video) => {
					const { _id } = video;
					return (
						<VideoItem
							key={_id}
							video={video}
							loadVideos={loadVideos}
						/>
					);
				})}
			{videos.length === 0 && isLoading === false && (
				<>
					<h1 className='title'>
						There are no videos,{' '}
						<Link to='/new-video'>Create a new video</Link>
					</h1>
				</>
			)}
		</div>
	);
};

export default VideoList;
