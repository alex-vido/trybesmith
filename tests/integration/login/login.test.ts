import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../../../src/app';
import UserModel from '../../../src/database/models/user.model';
import bcrypt from 'bcryptjs';
import { validBodyLogin, loginFromDB } from '../../mocks/login.mocks';
import authenticate from '../../../src/utils/jwt.util'

chai.use(chaiHttp);

describe('POST /login', function () { 
  beforeEach(function () { sinon.restore(); });
  it('Deve ser possível logar com sucesso e retornar o token', async function () {
    const userSimulated = UserModel.build(loginFromDB);
    sinon.stub(UserModel, 'findOne').resolves(userSimulated);
    sinon.stub(bcrypt, 'compareSync').resolves(true);
    sinon.stub(authenticate, 'sign').resolves('token');

    const response = await chai.request(app)
    .post('/login')
    .send(validBodyLogin);

    expect(response.status).to.be.equal(200);
  });
});
