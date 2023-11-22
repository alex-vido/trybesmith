import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import productModel from '../../../src/database/models/product.model';
import app from '../../../src/app';
import { productListMock, productResultMock } from '../../mocks/products.mocks';
import e from 'express';

chai.use(chaiHttp);

describe('GET /products', function () { 
  beforeEach(function () { sinon.restore(); });
  it('Deve ser possível listar todos os produtos com sucesso', async function () {
    const products = productListMock.map(product => productModel.build(product));
    sinon.stub(productModel, 'findAll').resolves(products);
    const response = await chai.request(app).get('/products');
    expect(response.status).to.be.equal(200);
  });
});
