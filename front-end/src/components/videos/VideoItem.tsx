import { VideoI } from './VideoI';
import { Link } from 'react-router-dom';

interface Props {
	video: VideoI;
}

const VideoItem = ({ video: { url, title, description, _id } }: Props) => {
	return (
		<article className='column card is-half'>
			<div className='card-content'>
				<h1 className='title'>{title}</h1>
				<p>{description}</p>
				<p>{url}</p>
			</div>
			<footer className='card-footer'>
				<Link className='card-footer-item' to={`/${_id}`}>
					Ver video
				</Link>
			</footer>
		</article>
	);
};

export default VideoItem;
