import bcrypt from 'bcryptjs';
import Handler from '../utils/handler';
import db from '../models';

export default class User {
  /**
   * @param {object} ctx
   * @param {req} ctx.request
   * @param {res} ctx.response
   */
  static async create(req, res) {
    const { email, name } = req.body;

    try {
      const user = await db.User.create({ name, email, password: req.hash });
      const token = Handler.generateToken(user);

      return Handler.successHandler(req, res, { token, user }, 201);
    } catch (err) {
      return Handler.errorHandler(req, res, err.message, 400);
    }
  }

  /**
   * @param {object} ctx
   * @param {req} ctx.request
   * @param {res} ctx.response
   */
  static async login(req, res) {
    const { email, password } = req.body;
    const message = 'Wrong username or password';
    try {
      const user = await db.User.findOne({ where: { email } });
      if (user && bcrypt.compareSync(password, user.password)) {
        const token = Handler.generateToken(user);
        return Handler.successHandler(req, res, { token, user }, 200);
      }
      return Handler.errorHandler(req, res, message, 400);
    } catch (err) {
      return Handler.errorHandler(req, res, err.message || message, 400);
    }
  }
}
