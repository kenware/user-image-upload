import Handler from '../utils/handler';
import config from '../config';

export default class ImageFile {
  /**
   * @param {object} ctx
   * @param {req} ctx.request
   * @param {res} ctx.response
   * @param {Function} next
   */
  static async validate(req, res, next) {
    try {
      const { image } = req.files;
      const error = [];
      if (!image) error.push('Image is required');
      if (!(config.s3Bucket || config.secretAccessKey || config.accessKeyId)) {
        error.push('AWS S3 credentials are required to be set in .env file');
      }
      if (error.length) {
        return Handler.errorHandler(req, res, error, 400);
      }
      return next();
    } catch (err) {
      return Handler.errorHandler(req, res, err.message || 'Error occured', 400);
    }
  }
}
