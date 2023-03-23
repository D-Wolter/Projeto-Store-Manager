const connection = require('./connection');

const insertSales = async (newArray) => {
  const [{ insertId: id }] = await connection
    .execute('INSERT INTO StoreManager.sales (date) VALUE (NOW())');

  const sales = await Promise.all(newArray.map(async (e) => {
    const { productId, quantity } = e;
    await connection.execute(
      'INSERT INTO StoreManager.sales_products (sale_id, product_id, quantity) VALUE (?, ?, ?)',
      [id, productId, quantity],
    );
      return e;
  }));

  return { id, itemsSold: sales };
};
const findAllSales = async () => {
  const query = `SELECT (sP.sale_id), (s.date), (sP.product_id), (sP.quantity) 
  FROM StoreManager.sales_products AS sP INNER JOIN StoreManager.sales AS s ON s.id = sP.sale_id`;
  const [result] = await connection.execute(query);

  return result;
};

const findByIdSales = async (id) => {
  const query = `SELECT (s.date), (sP.product_id), (sP.quantity)
  FROM StoreManager.sales_products AS sP INNER JOIN StoreManager
  .sales AS s ON s.id = sP.sale_id WHERE sale_id = ?`;
  const [result] = await connection.execute(query, [id]);

  return result;
};

module.exports = {
  insertSales,
  findAllSales,
  findByIdSales,
};
