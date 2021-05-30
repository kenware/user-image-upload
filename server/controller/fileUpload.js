import moment from 'moment';
import { v4 as uuidv4 } from 'uuid';
import Handler from '../utils/handler';
import config from '../config';
import db from '../models';

export default class FileUpload {
  static async create(req, res) {
    try {
      const { image } = req.files;
      let ext = image.name.split('.');

      ext = ext[ext.length - 1];

      const params = {
        Bucket: config.s3Bucket,
        Key: `${uuidv4()}-${moment(new Date()).format('YYYY-MM-DD-HH-mm')}.${ext}`,
        Body: image.data,
        ACL: 'public-read',
      };
      const { Location } = await config.s3.upload(params).promise();
      const data = await db.Image.create({ fileName: Location, userId: req.decoded.id });

      return res.status(201).json(data);
    } catch (err) {
      return Handler.errorHandler(req, res, err.message || 'Error occured', 400);
    }
  }

  static async fetch(req, res) {
    try {
      const data = await db.Image.findAll();
      return res.status(200).json(data);
    } catch (err) {
      return Handler.errorHandler(req, res, err.message || 'Error occured', 400);
    }
  }
}
