import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import productModel from '../../../src/database/models/product.model';
import app from '../../../src/app';
import { productToCreateMock, productResultMock } from '../../mocks/products.mocks';

chai.use(chaiHttp);

describe('POST /products', function () { 
  beforeEach(function () { sinon.restore(); });
  it('Deve ser possível cadastrar produto com sucesso', async function () {
    const productSimulated = productModel.build(productResultMock);
    sinon.stub(productModel, 'create').resolves(productSimulated);

    const response = await chai.request(app)
    .post('/products')
    .send(productToCreateMock);

    expect(response.status).to.be.equal(201);
  });
});
