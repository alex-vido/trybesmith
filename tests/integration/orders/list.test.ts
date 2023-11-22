import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../../../src/app';
import OrderModel from '../../../src/database/models/order.model';
import { allOrdersMock } from '../../mocks/order.mocks';

chai.use(chaiHttp);

describe('GET /orders', function () { 
  beforeEach(function () { sinon.restore(); });
  it('Deve ser possível listar todos os pedidos com sucesso', async function () {
    const orders = allOrdersMock.map(order => OrderModel.build(order));
    sinon.stub(OrderModel, 'findAll').resolves(orders);
    const response = await chai.request(app).get('/orders');
    expect(response.status).to.be.equal(200);
  });
});
