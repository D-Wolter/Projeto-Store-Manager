const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const { expect } = chai;
chai.use(sinonChai);

const { salesController } = require('../../../src/controllers');
const { salesService } = require('../../../src/services');
const { allSales, salesError, salesSucess } = require('./mocks/sales.controller.mock');

describe('Testes de unidade de sales, na camada controller', () => {
    it('teste de Busca por todas as vendas (caso de sucesso)', async () => {
    const res = {};
    const req = {}

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon
      .stub(salesService, 'getAllSales')
      .resolves({ type: null, message: allSales });

      await salesController.getAllSales(req, res);

      expect(res.status).to.have.been.calledWith(200);
      expect(res.json).to.have.been.calledWith(allSales);
    });
  it('teste de inserção de nova venda (caso de sucesso)', async () => {
    const res = {};
    const req = { body: salesSucess.itemsSold }

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon
      .stub(salesService, 'insertSales')
      .resolves({ type: null, message: salesSucess });
    
    await salesController.addNewSales(req, res);

    expect(res.status).to.have.been.calledWith(201);
    expect(res.json).to.have.been.calledWith(salesSucess);
  });

  afterEach(sinon.restore);
});
