/*
import generateToken from '../utils/jwt.util';
import UserModel from '../database/models/user.model';

const login = async (email, password) => {
  const user = await UserModel.findOne({
    where: { email, password },
    attributes: { exclude: ['email', 'password'] },
  });

  if (!user) return null;

  const { id, username } = user.dataValues;

  const token = generateToken.sign({ id, username });
  return token;
};

export = {
  login,
};
*/
