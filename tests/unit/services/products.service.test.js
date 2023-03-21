const { expect } = require('chai');
const sinon = require('sinon');

const { productsModel } = require('../../../src/models');
const { productsService } = require('../../../src/services/');
const { allProducts, invalidValue } = require('./mocks/products.service.mock');

describe('Testes de unidade de produtos na camada service', () => {
  describe('teste de listagem de todos produtos', () => {
    it('busca de todos produtos (caso sucesso)', async () => {
      sinon.stub(productsModel, 'findAll').resolves(allProducts);
  
      const result = await productsService.findAll();
  
      expect(result.message).to.deep.equal(allProducts);
    });
  }); -

  describe('teste de pesquisa por produto Id', () => {
    it('teste de buca por id (caso sucesso)', async () => {
      sinon.stub(productsModel, 'findById').resolves(allProducts[0]);

      const result = await productsService.findById(1);

      expect(result.type).to.equal(null);
      expect(result.message).to.deep.equal(allProducts[0]);
    });

    it('teste busca por Id (caso erro Id não encontrado)', async () => {
      sinon.stub(productsModel, 'findById').resolves(undefined);

      const result = await productsService.findById(99999);

      expect(result.type).to.equal('PRODUCT_NOT_FOUND');
      expect(result.message).to.equal('Product not found');
    })

    it('teste busca por Id (caso erro Id invalido', async () => {
      sinon.stub(productsModel, 'findById').resolves('a');
      const result = await productsService.findById(invalidValue);

      expect(result.type).to.equal('INVALID_VALUE');
      expect(result.message).to.equal('"id" must be a number');
    });
  });


  afterEach(function () { sinon.restore() });
});
