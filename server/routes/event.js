import express from 'express';

import {createPost, getPrevPosts, getPost, getCurrentPost, finishPost, deleteParticipant} from '../controllers/event.js';
const router = express.Router();

router.post('/getprevposts', getPrevPosts);
router.post('/getcurrentpost', getCurrentPost);
router.post('/getpost', getPost);
router.post('/createpost', createPost);
router.post('/finish', finishPost);
router.post('/deletepost', deleteParticipant);

export default router;