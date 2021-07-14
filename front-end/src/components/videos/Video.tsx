import { useParams } from 'react-router-dom';

type Params = {
	id: string;
};

const Video = () => {
	const { id }: Params = useParams();
	return <div>Video Specific {id}</div>;
};

export default Video;
