import jwt from 'jsonwebtoken';

const secret = 'secret';

type TokenPayload = {
  id: number;
  username: string;
};

const sign = (payload: TokenPayload): string => {
  const token = jwt.sign(payload, secret);
  return token;
};

const verify = (token: string): TokenPayload => {
  const decoded = jwt.verify(token, secret) as TokenPayload;
  return decoded;
};

export default {
  sign,
  verify,
};