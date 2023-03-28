const { expect } = require('chai');
const sinon = require('sinon');

const { salesModel } = require('../../../src/models');
const { salesService } = require('../../../src/services/');
const { sales, findSaleId } = require('./mocks/sales.service.mock');

describe('Testes de unidade de sales na camada service', () => {
  describe('teste de listagem de todas as sales', () => {
   it('todas as sales (caso sucesso)', async function () {
      
      sinon.stub(salesModel, 'getAllSales').resolves(sales);
      
      const result = await salesService.getAllSales();

      expect(result.type).to.be.equal(null);
      expect(result.message).to.deep.equal(sales);
   });
   it('retorna a venda caso ID existente', async () => {
      
      sinon.stub(salesModel, 'findByIdSales').resolves(findSaleId);
      
      const result = await salesService.findIdExist(1);

      expect(result.type).to.equal(null);
      expect(result.message).to.deep.equal(findSaleId);
    });
  });

  afterEach(function () { sinon.restore() });
});
