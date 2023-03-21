const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const { expect } = chai;
chai.use(sinonChai);

const { productsService } = require('../../../src/services');
const { productsController } = require('../../../src/controllers');
const { productMock } = require('./mocks/products.controller.mock');

describe('Testes de unidade de produtos, na camada controler', () => {
  it('teste de busca por todos os produtos (caso de sucesso)', async () => {
    const res = {};
    const req = {};
    const productsList = [productMock];

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon
      .stub(productsService, 'findAll')
      .resolves({ type: null, message: productsList })
    
    await productsController.getAllProducts(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(getAllProducts);
  });

  it('Teste de busca por produto Id (caso de sucesso)', async () => {
    const res = {};
    const req = {
      params: { id: 1 },
    };

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon
      .stub(productsService, 'findById')
      .resolves({ type: null, message: productMock });
    
    await productsController.getByIdProduct(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(productMock);
  });

  it('Teste de busca por produto Id (caso de erro Id não encontrado)', async () => {
    const res = {};
    const req = {
      params: { id: 1 },
    };

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon
      .stub(productsService, 'findById')
      .resolves({ type: 'PRODUCT_NOT_FOUND', message: 'Product not found' });
    
    await productsController.getByIdProduct(req, res);

    expect(res.status).to.have.been.calledWith(404);
    expect(res.json).to.have.been.calledWith({ message: 'Product not found' });
  });
  
  afterEach(sinon.restore);
});
