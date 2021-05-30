/* eslint-disable no-await-in-loop */
/* eslint-disable no-restricted-syntax */
import bcrypt from 'bcryptjs';
import { accounts } from './mock';
import Models from '../../server/models';
import Handler from '../../server/utils/handler';

const createUser = async () => {
  const data = [];
  for (const user of accounts) {
    const password = bcrypt.hashSync(user.password, 8);
    const where = { email: user.email };
    const defaults = { ...user, password };
    const [userInstance] = await Models.User.findOrCreate({ where, defaults });
    const token = Handler.generateToken(userInstance);
    data.push({ token, user: userInstance });
  }
  return data;
};
export default createUser;
