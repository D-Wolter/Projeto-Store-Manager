const connection = require('./connection');

const getAllSales = async () => {
  const query = `
  SELECT p.sale_id saleId, s.date, p.product_id productId, p.quantity 
  FROM StoreManager.sales s JOIN StoreManager.sales_products p 
  ON s.id = p.sale_id
  ORDER BY p.sale_id, p.product_id`;
  const [result] = await connection.execute(query);

  return result;
};

const findByIdSales = async (id) => {
  const query = `
  SELECT s.date, p.product_id productId, p.quantity 
  FROM sales s JOIN sales_products p ON s.id = p.sale_id
  WHERE p.sale_id = ?
  ORDER BY p.sale_id, p.product_id`;
  const [result] = await connection.execute(query, [id]);

  return result;
};

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

module.exports = {
  insertSales,
  getAllSales,
  findByIdSales,
};
