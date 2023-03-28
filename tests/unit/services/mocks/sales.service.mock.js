const sales = [
  {
    "saleId": 1,
    "date": "2021-09-09T04:54:29.000Z",
    "productId": 1,
    "quantity": 2
  },
  {
    "saleId": 1,
    "date": "2021-09-09T04:54:54.000Z",
    "productId": 2,
    "quantity": 2
  }

  /* ... */
]

const findSaleId = [
  {
    "date": "2021-09-09T04:54:29.000Z",
    "productId": 1,
    "quantity": 2
  },
  {
    "date": "2021-09-09T04:54:54.000Z",
    "productId": 2,
    "quantity": 2
  }

  /* ... */
]

const allSales = [
  {
    saleId: 1,
    date: "2023-03-23T14:11:10.000Z",
    productId: 1,
    quantity: 5
  },
  {
    saleId: 1,
    date: "2023-03-23T14:11:10.000Z",
    productId: 2,
    quantity: 10
  },
  {
    saleId: 2,
    date: "2023-03-23T14:11:10.000Z",
    productId: 3,
    quantity: 15
  }
]

module.exports = {
  sales,
  findSaleId,
  allSales,
};
