import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import dotenv from 'dotenv';
import path from 'path';
import fileUpload from 'express-fileupload';
import logger from './server/utils/logger';
import Route from './server/routes';

dotenv.config();

const app = express();
app.use(cors());
app.options('*', cors());
app.use(express.json());
app.use(fileUpload());
app.use(express.urlencoded({
  extended: true,
}));
app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'));
app.use('/api/v1', Route);
const PORT = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, '/client')));
app.get('*', (req, res) => res.sendFile(path.join(__dirname, './client/index.html')));
app.listen(PORT, () => logger.info(`App is running at port ${PORT}`));

export default app;
