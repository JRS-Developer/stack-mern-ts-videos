import { VideoI } from './VideoI';
import { Link } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import ReactPlayer from 'react-player';
import { deleteVideo } from './VideoService';

interface Props {
	video: VideoI;
	loadVideos(): void;
}

const VideoItem = ({
	video: { url, title, description, _id },
	loadVideos,
}: Props) => {
	const handleDelete = async (id: string) => {
		await deleteVideo(id);
		loadVideos();
	};
	return (
		<IconContext.Provider value={{ size: '1.5rem' }}>
			<article className='column is-one-third'>
				<div className='card'>
					<div className='card-content'>
						<div className='is-flex is-align-items-baseline is-justify-content-space-between'>
							<h1 className='title is-4'>{title}</h1>
							<span
								className='icon is-large has-text-danger is-clickable'
								onClick={() => _id && handleDelete(_id)}
							>
								<FaTimes />
							</span>
						</div>
						<ReactPlayer url={url} width='auto' />
						<span className='subtitle'>Description:</span>
						<p>{description}</p>
					</div>
					<footer className='card-footer'>
						<Link
							className='card-footer-item'
							to={`/update/${_id}`}
						>
							Edit Video
						</Link>
					</footer>
				</div>
			</article>
		</IconContext.Provider>
	);
};

export default VideoItem;
