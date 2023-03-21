const { expect } = require('chai');
const sinon = require('sinon');
const { productsModel } = require('../../../src/models');

const connection = require('../../../src/models/connection');
const { products } = require('./mocks/products.model.mock');

describe('Testes de unidade de produtos, na camada Model', () => {
  it('teste de busca por todos produtos (caso de sucesso)', async () => {
    sinon.stub(connection, 'execute').resolves([products]);
    const result = await productsModel.findAll();

    expect(result).to.be.deep.equal(products);
  });

  it('teste de busca de produto por Id (caso de sucesso)', async () => {
    sinon.stub(connection, 'execute').resolves([[products[0]]]);

    const result = await productsModel.findById(1);

    expect(result).to.be.deep.equal(products[0]);
  });

  afterEach(sinon.restore);
});
