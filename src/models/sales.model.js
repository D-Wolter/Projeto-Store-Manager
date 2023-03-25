const connection = require('./connection');

const getAllSales = async () => {
  const query = `
  SELECT p.sale_id AS saleId, s.date, p.product_id AS productId, p.quantity 
  FROM StoreManager.sales AS s INNER JOIN StoreManager.sales_products AS p 
  ON s.id = p.sale_id
  ORDER BY p.sale_id, p.product_id`;
  const [result] = await connection.execute(query);

  return result;
};

const findByIdSales = async (id) => {
  const query = `
  SELECT s.date, p.product_id AS productId, p.quantity 
  FROM StoreManager.sales AS s JOIN StoreManager.sales_products AS p 
  ON s.id = p.sale_id
  WHERE p.sale_id = ?
  ORDER BY p.sale_id, p.product_id`;
  const [result] = await connection.execute(query, [id]);

  return result;
  };

const insertSales = async () => {
  const [{ insertId }] = await connection.execute(
    'INSERT INTO StoreManager.sales (date) VALUE (NOW())',
  );

  return insertId;
};

const insertSalesProduct = async (newArray) => {
  const arrayPlaceHolder = newArray.map((obj) => Object.keys(obj).map((_key) => '?').join(', '));
  
  const insertId = await insertSales();

  const placeholders = arrayPlaceHolder.map((_key) => `(${insertId}, ${_key})`).join(', ');

  const content = newArray.map((obj) => Object.values(obj));

  const AllContent = [];
  content.forEach((element) => element.map((values) => AllContent.push(values)));

  await connection.execute(
    `INSERT INTO StoreManager.sales_products (sale_id, product_id, quantity) VALUES
    ${placeholders}`,
    [...AllContent],
  );

  return insertId;
};

module.exports = {
  insertSalesProduct,
  getAllSales,
  findByIdSales,
};
