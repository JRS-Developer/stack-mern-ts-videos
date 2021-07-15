import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { VideoI } from './VideoI';
import { createVideo, getVideo, updateVideo } from './VideoService';
import { toast } from 'react-toastify';
import { useHistory, useParams } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';

type InputChange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;
type Params = {
	id: string;
};

const initialState = {
	title: '',
	description: '',
	url: '',
};

const VideoForm = () => {
	const [video, setVideo] = useState<VideoI>(initialState);
	const { id }: Params = useParams();
	const history = useHistory();

	const handleChange = (e: InputChange) => {
		const value = e.target.value;
		const name = e.target.name;
		setVideo({ ...video, [name]: value });
	};

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (id) {
			try {
				await updateVideo(id, video);
				toast.success('Video updated correctly');
				history.push('/');
			} catch (error) {
				toast.error('There is an error with your request');
			}
		} else {
			try {
				await createVideo(video);
				toast.success('Video added correctly');
				history.push('/');
			} catch (error) {
				toast.error('There is already a video with that URL');
			}
		}
	};

	const loadVideo = async (id: string) => {
		try {
			const res = await getVideo(id);
			setVideo(res.data);
		} catch (error) {
			history.replace('/');
		}
	};

	useEffect(() => {
		if (id) loadVideo(id);
	}, []);

	return (
		<form
			className='is-flex is-flex-direction-column is-align-items-center'
			onSubmit={handleSubmit}
		>
			<h1 className='title'>New Video</h1>
			<div className='field'>
				<label htmlFor='title' className='label'>
					Title
				</label>
				<p className='control'>
					<input
						className='input'
						type='text'
						name='title'
						id='title'
						onChange={handleChange}
						placeholder='Title'
						value={video.title}
					/>
				</p>
			</div>
			<div className='field'>
				<label htmlFor='url' className='label'>
					Url
				</label>
				<p className='control'>
					<input
						className='input'
						type='url'
						name='url'
						id='url'
						onChange={handleChange}
						placeholder='Url'
						value={video.url}
					/>
				</p>
			</div>
			<div className='field'>
				<label htmlFor='description' className='label'>
					Description
				</label>
				<p className='control'>
					<textarea
						className='textarea'
						name='description'
						id='description'
						placeholder='Write a description'
						onChange={handleChange}
						value={video.description}
					></textarea>
				</p>
			</div>
			<div className='field'>
				<p className='control'>
					{id ? (
						<button className='button is-info'>Update Video</button>
					) : (
						<button className='button is-success'>
							Create Video
						</button>
					)}
				</p>
			</div>
		</form>
	);
};

export default VideoForm;
