const { expect } = require('chai');
const sinon = require('sinon');
const { salesModel } = require('../../../src/models');

const connection = require('../../../src/models/connection');
const { sales, findSaleId } = require('./mocks/sales.model.mock');

describe('Testes de unidade de sales na camada model', () => {
  it('getAllSales na model (caso sucesso)', async () => {
    sinon.stub(connection, 'execute').resolves([sales]);

    const result = await salesModel.getAllSales();

    expect(result).to.deep.equal(sales);
  });
  it('chamada de getSalesById na model (caso sucesso)', async () => {
    sinon.stub(connection, 'execute').resolves([findSaleId]);

    const result = await salesModel.findByIdSales(1);

    expect(result).to.deep.equal(findSaleId);
  });

  afterEach(sinon.restore);
});