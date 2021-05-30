import express from 'express';
import FileController from '../controller/fileUpload';
import FileMiddleware from '../middleware/fileUpload';
import Auth from '../middleware/auth';

const router = express.Router();

router.get('/',
  Auth.Authenticate,
  FileController.fetch);

router.post('/upload',
  Auth.Authenticate,
  FileMiddleware.validate,
  FileController.create);

export default router;
