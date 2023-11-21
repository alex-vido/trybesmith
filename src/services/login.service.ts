import bcrypt from 'bcryptjs';
import generateToken from '../utils/jwt.util';
import UserModel from '../database/models/user.model';
import { Login, Token } from '../types/Login';
import { ServiceResponse } from '../types/ServiceResponse';

const login = async ({ username: loginUsername, password }: Login)
: Promise<ServiceResponse<Token>> => {
  const user = await UserModel.findOne({
    where: { username: loginUsername },
  });

  if (!user || !bcrypt.compareSync(password, user.dataValues.password)) {
    return { status: 401, data: { message: 'Username or password invalid' } };
  }
  
  const { id, username } = user.dataValues;
  const token = generateToken.sign({ id, username });
  return { status: 200, data: { token } };
};

export = {
  login,
};
