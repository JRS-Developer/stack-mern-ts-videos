// Model
import { Schema, model } from 'mongoose';

// trim significa que elimina espacios al principio y al final en caso de que traiga espacios
const videSchema = new Schema(
	{
		title: {
			type: String,
			required: true,
			trim: true,
		},
		description: {
			type: String,
			trim: true,
		},
		url: {
			type: String,
			required: true,
			trim: true,
			unique: true,
		},
	},
	{
		versionKey: false,
		timestamps: true,
	}
);

export default model('Video', videSchema);
