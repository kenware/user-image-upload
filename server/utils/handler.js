import jwt from 'jsonwebtoken';
import config from '../config';

export default class Handler {
  /**
   * @param {object} ctx
   * @param {req} ctx.request
   * @param {res} ctx.response
   * @param {mesage} string error
   * @param {status} HttpCode status
   */
  static errorHandler(req, res, message, status) {
    return res.status(status || 400).json({
      message,
      status,
    });
  }

  /**
   * @param {object} ctx
   * @param {req} ctx.request
   * @param {res} ctx.response
   * @param {data} ctx.data response data
   * @param {status} HttpCode status
   */
  static successHandler(req, res, data, status) {
    return res.status(status || 200).json(data);
  }

  /**
   * @param {object} ctx
   * @param {user} ctx.user a user account
   * @response {token}
   */
  static generateToken(user) {
    const token = jwt.sign({ email: user.email, name: user.name, id: user.id }, config.secrete);
    return token;
  }
}
