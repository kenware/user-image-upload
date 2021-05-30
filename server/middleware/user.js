import Validator from 'validatorjs';
import bcrypt from 'bcryptjs';
import Handler from '../utils/handler';
import db from '../models';

export default class User {
  /**
   * @param {object} ctx
   * @param {req} ctx.request
   * @param {res} ctx.response
   * @param {Function} next
   */
  static async create(req, res, next) {
    const { email, password } = req.body;
    const rules = {
      name: 'required|string',
      email: 'required|email',
      password: 'required|min:8',
    };
    const validation = new Validator(req.body, rules);
    if (validation.fails()) {
      return Handler.errorHandler(req, res, validation.errors.errors, 400);
    }
    try {
      const user = await db.User.findOne({ where: { email } });
      if (user) {
        return Handler.errorHandler(req, res, 'Email already exist', 400);
      }
      const hash = bcrypt.hashSync(password, 8);
      req.hash = hash;
      return next();
    } catch (err) {
      return Handler.errorHandler(req, res, err.message || 'Error occured', 400);
    }
  }

  /**
   * @param {object} ctx
   * @param {req} ctx.request
   * @param {res} ctx.response
   * @param {Function} next
   */
  static async login(req, res, next) {
    const rules = {
      email: 'required|email',
      password: 'required',
    };
    const validation = new Validator(req.body, rules);
    if (validation.fails()) {
      return Handler.errorHandler(req, res, validation.errors.errors, 400);
    }
    return next();
  }
}
