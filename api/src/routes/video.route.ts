import { Router } from 'express';
import {
	getVideos,
	saveVideo,
	getVideo,
	updateVideo,
	deleteVideo,
} from './video.controller';
const router = Router();

router.route('/:id').get(getVideo).put(updateVideo).delete(deleteVideo);
router.route('/').get(getVideos).post(saveVideo);

export default router;
