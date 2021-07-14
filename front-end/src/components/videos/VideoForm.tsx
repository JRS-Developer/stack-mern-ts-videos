import { ChangeEvent, FormEvent, useState } from 'react';
import { VideoI } from './VideoI';
import { createVideo } from './VideoService';

type InputChange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

const VideoForm = () => {
	const [video, setVideo] = useState<VideoI>({
		title: '',
		description: '',
		url: '',
	});

	const handleChange = (e: InputChange) => {
		const value = e.target.value;
		const name = e.target.name;
		setVideo({ ...video, [name]: value });
	};

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const res = await createVideo(video);
		console.log(res);
	};

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
					<button className='button is-success'>Create Video</button>
				</p>
			</div>
		</form>
	);
};

export default VideoForm;
