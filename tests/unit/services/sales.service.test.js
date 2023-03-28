const { expect } = require('chai');
const sinon = require('sinon');

const { salesModel } = require('../../../src/models');
const { salesService, productsService } = require('../../../src/services/');
const { allSales } = require('./mocks/sales.service.mock');

describe('Testes de unidade de sales na camada service', () => {
  it('teste getAllSales na service (caso de sucesso)', async () => {

      sinon.stub(salesModel, 'getAllSales')
      .resolves(allSales);
    
    const result = await salesService.getAllSales()
    console.log('++++++++++', result)


    expect(result.message).to.be.deep.equal(allSales)
  });

  afterEach(sinon.restore);
});
