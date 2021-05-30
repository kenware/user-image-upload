import express from 'express';
import UserController from '../controller/user';
import UserMiddleware from '../middleware/user';

const router = express.Router();

router.post('/',
  UserMiddleware.create,
  UserController.create);
router.post('/login', UserController.login);
export default router;
