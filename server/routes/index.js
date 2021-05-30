import express from 'express';
import userRoute from './user';
import fileRoute from './fileRoute';

const router = express.Router();

router.get('/health', (req, res) => res.status(200).json('server is running'));
router.use('/users', userRoute);
router.use('/images', fileRoute);

export default router;
