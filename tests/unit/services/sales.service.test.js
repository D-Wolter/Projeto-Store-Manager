const { expect } = require('chai');
const sinon = require('sinon');

const { salesModel } = require('../../../src/models');
const { salesService } = require('../../../src/services/');
const { allSales, findSaleId } = require('./mocks/sales.service.mock');

describe('Testes de unidade de sales na camada service', () => {
  it('teste getAllSales na service (caso de sucesso)', async () => {

    sinon.stub(salesModel, 'getAllSales').resolves(allSales);
    
    const result = await salesService.getAllSales()

    expect(result.message).to.be.deep.equal(allSales)
  });
  it('teste getSalesById na service (caso de sucesso)', async function () {
    
    sinon.stub(salesModel, 'findByIdSales').resolves(findSaleId);
    
    const result = await salesService.findIdExist(2)
    
    expect(result.message).to.be.deep.equal(findSaleId)
  })
  it('teste getSalesById na service (caso de erro id nao encontrado)', async () => {
    
    const result = await salesService.findIdExist(999)
    
    expect(result.type).to.be.equal('INVALID VALUE');
    expect(result.message).to.be.deep.equal('Sale not found')
  })

  afterEach(sinon.restore);
});
